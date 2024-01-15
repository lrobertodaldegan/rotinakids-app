import { getMedalValidation } from './Validation';

const TasksValidation = {
  wood:async (scoreOverall)=> {
    return getMedalValidation('mt', scoreOverall.qtdPf >= 20);
  },
  iron:async (scoreOverall)=>{
    return getMedalValidation('ft', scoreOverall.qtdPf >= 50);
  },
  bronze:async (scoreOverall)=>{
    return getMedalValidation('bt', scoreOverall.qtdPf >= 200);
  },
  silver:async (scoreOverall)=>{
    return getMedalValidation('pt', scoreOverall.qtdPf >= 500);
  },
  gold:async (scoreOverall)=>{
    return getMedalValidation('ot', scoreOverall.qtdPf >= 1000);
  },
  diamond:async (scoreOverall)=>{
    return getMedalValidation('st', scoreOverall.qtdPf >= 10000);
  },
}

export default TasksValidation;