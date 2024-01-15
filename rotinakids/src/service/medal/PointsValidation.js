import { getMedalValidation } from './Validation';

const PointsValidation = {
  wood:async (scoreOverall)=> {
    return getMedalValidation('mp', scoreOverall.pontuacao >= 1);
  },
  iron:async (scoreOverall)=>{
    return getMedalValidation('fp', scoreOverall.pontuacao >= 50);
  },
  bronze:async (scoreOverall)=>{
    return getMedalValidation('bp', scoreOverall.pontuacao >= 500);
  },
  silver:async (scoreOverall)=>{
    return getMedalValidation('pp', scoreOverall.pontuacao >= 2000);
  },
  gold:async (scoreOverall)=>{
    return getMedalValidation('op', scoreOverall.pontuacao >= 10000);
  },
  diamond:async (scoreOverall)=>{
    return getMedalValidation('sp', scoreOverall.pontuacao >= 20000);
  },
}

export default PointsValidation;