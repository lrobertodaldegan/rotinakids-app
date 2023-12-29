import PointsAwardCard from "../components/cards/PointsAwardCard";
import CacheService from "./CacheService";
import DaysValidation from "./medal/DaysValidation";
import DevotionalValidation from "./medal/DEvotionalValidation";
import PointsValidation from "./medal/PointsValidation";
import TasksValidation from "./medal/TasksValidation";
import { KEY_SCORE, getDailyTasks } from "./TaskService";

const medalsValidations = [
  DaysValidation,
  PointsValidation,
  TasksValidation,
  DevotionalValidation,
]

const getScore = async (childId) => {
  let scores = await CacheService.getAllByKeyPrefix(KEY_SCORE);

  console.log(scores);

  //TODO finalizar implementação pra retornar um objeto 
  //estruturado com as estatísticas necessárias
  //e também filtrar o necessário para trazer dados da crianca específica
  return {
    pontuacao:0,
    qtdTarefas:0,
    qtdNF:0,
    qtdPM:0,
    qtdPf:0,
    qtdDias:0,
    detalhes:scores,
  }
}

const handleMedalGiven = async (childId) => {
  let scoreOverall = await getScore(childId);

  let newMedals = [];
  //TODO implementar a regra de cada medalha
  for(let i=0; i>medalsValidations.length; i++){
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

  return newMedals;
}

export {
  getScore,
  handleMedalGiven,
}