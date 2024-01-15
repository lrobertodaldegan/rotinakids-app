
import { getMedalValidation } from './Validation';

const DaysValidation = {
  wood:async (scoreOverall)=> {
    return getMedalValidation('ml', scoreOverall.days >= 1);
  },
  iron:async (scoreOverall)=>{
    return getMedalValidation('fl', scoreOverall.days >= 10);
  },
  bronze:async (scoreOverall)=>{
    return getMedalValidation('bl', scoreOverall.days >= 50);
  },
  silver:async (scoreOverall)=>{
    return getMedalValidation('pl', scoreOverall.days >= 100);
  },
  gold:async (scoreOverall)=>{
    return getMedalValidation('ol', scoreOverall.days >= 300);
  },
  diamond:async (scoreOverall)=>{
    return getMedalValidation('sl', scoreOverall.days >= 500);
  },
}

export default DaysValidation;