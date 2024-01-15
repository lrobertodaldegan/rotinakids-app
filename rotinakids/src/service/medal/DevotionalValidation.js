import { getMedalValidation } from './Validation';

const DevotionalValidation = {
  wood:async (scoreOverall)=> {
    return getMedalValidation('md', scoreOverall.qtdDevocionais >= 1);
  },
  iron:async (scoreOverall)=>{
    return getMedalValidation('fd', scoreOverall.qtdDevocionais >= 7);
  },
  bronze:async (scoreOverall)=>{
    return getMedalValidation('bd', scoreOverall.qtdDevocionais >= 21);
  },
  silver:async (scoreOverall)=>{
    return getMedalValidation('pd', scoreOverall.qtdDevocionais >= 54);
  },
  gold:async (scoreOverall)=>{
    return getMedalValidation('od', scoreOverall.qtdDevocionais >= 115);
  },
  diamond:async (scoreOverall)=>{
    return getMedalValidation('sd', scoreOverall.qtdDevocionais >= 345);
  },
}

export default DevotionalValidation;