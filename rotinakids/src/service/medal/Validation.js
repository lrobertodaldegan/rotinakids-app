import {insignias} from '../../utils/Insignias'

const getMedalValidation = (medalId, condition) => {
  let medal = insignias.filter(i => i.id === medalId)[0];

  return condition === true ? medal : null;
}

export {
  getMedalValidation
}