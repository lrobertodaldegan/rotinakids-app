import CacheService from "./CacheService";
import DaysValidation from "./medal/DaysValidation";
import DevotionalValidation from "./medal/DevotionalValidation";
import PointsValidation from "./medal/PointsValidation";
import TasksValidation from "./medal/TasksValidation";
import { KEY_SCORE } from "./TaskService";

const medalsValidations = [
  DaysValidation,
  PointsValidation,
  TasksValidation,
  DevotionalValidation,
]

const scoreOptions = ['Não fez', 'Pode melhorar', 'Perfeito!'];

const MEDAL_KEY = '@medals_';

const getScore = async (childId) => {
  let scores = await CacheService.getAllByKeyPrefix(KEY_SCORE);
  
  let nf   = 0;
  let pm   = 0;
  let pf   = 0;
  let qtd  = 0;
  let pont = 0;
  let dias = 0;
  let devocionais = 0;

  let childScore = [];

  if(scores && scores !== null && scores.length > 0){

    for(let i=0; i < scores.length; i++){
      let ss = JSON.parse(scores[i][1]);
      
      for(let j=0; j < ss.length; j++){
        let s = ss[j];

        if(s.childId === childId) {
          childScore.push(s);

          pont = pont + s.points;
          qtd = qtd + 1;

          if(scoreOptions[0] === s.score)
            nf = nf + 1;

          if(scoreOptions[1] === s.score)
            pm = pm + 1;

          if(scoreOptions[2] === s.score)
            pf = pf + 1;

          if(s.title === 'Fazer devocional' 
              && (scoreOptions[1] === s.score || scoreOptions[2] === s.score)){
            devocionais = devocionais + 1;
          }
        }
      }
    }
  }

  let dailyKeys = await CacheService.getKeysByPrefix(KEY_SCORE);

  dailyKeys = dailyKeys.filter(k => k.includes(childId));

  dias = dailyKeys && dailyKeys !== null ? dailyKeys.length : 0;

  return {
    childId:childId,
    pontuacao:pont,
    qtdTarefas:qtd,
    qtdNF:nf,
    qtdPM:pm,
    qtdPf:pf,
    qtdDias:dias,
    qtdDevocionais:devocionais,
    detalhes:childScore,
  }
}

const handleMedalGiven = async (childId) => {
  let scoreOverall = await getScore(childId);

  let newMedals = [];
  
  for(let i=0; i<medalsValidations.length; i++){
    let medal = await medalsValidations[i].wood(scoreOverall);

    if(medal && medal !== null)
      newMedals.push(medal);
    
    medal = await medalsValidations[i].iron(scoreOverall);
      
    if(medal && medal !== null)
      newMedals.push(medal);
      
    medal = await medalsValidations[i].bronze(scoreOverall);
      
    if(medal && medal !== null)
      newMedals.push(medal);

    medal = await medalsValidations[i].silver(scoreOverall);
      
    if(medal && medal !== null)
      newMedals.push(medal);

    medal = await medalsValidations[i].gold(scoreOverall);
      
    if(medal && medal !== null)
      newMedals.push(medal);

    medal = await medalsValidations[i].diamond(scoreOverall);
  }

  if(newMedals && newMedals !== null && newMedals.length > 0){
    for(let i=0; i < newMedals.length; i++){
      await giveMedal(newMedals[i], childId);
    }
  }

  return newMedals;
}

const giveMedal = async (newObj, childId) => {
  let key = `${MEDAL_KEY}${childId}`;

  let objs = await CacheService.get(key);

  objs = JSON.parse(objs);

  if(objs && objs !== null && objs.length > 0){
      let obj = objs.filter((d) => d.id === newObj.id);

      if(obj && obj !== null && obj.length > 0){        
        objs.splice(objs.indexOf(obj[0]), 1);
          
        objs.push(newObj);
      } else {
        objs.push(newObj);
      }
  } else {
    objs = [newObj];
  }

  await CacheService.register(key, JSON.stringify(objs));

  return objs;
}

const getMedalsByChild = async (childId) => {
  let key = `${MEDAL_KEY}${childId}`;

  let rs = await CacheService.get(key);

  if(rs && rs != null){
    rs = JSON.parse(rs);

    rs.sort((a, b) => {
        if(a.id > b.id)
            return 1;
        
        if(a.id < b.id)
            return -1;

        return 0;
    });

    return rs;
  }

  return [];
}

export {
  scoreOptions,
  getScore,
  handleMedalGiven,
  getMedalsByChild,
}