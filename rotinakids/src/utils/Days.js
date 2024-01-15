const Days = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta','Sábado'];

const AbDays = ['DOM', 'SEG', 'TER', 'QUA', 'QUI', 'SEX', 'SAB'];

const dateLabel = (dt) => {
  let y = `${dt.getFullYear()}`;

  let m = `${dt.getMonth() + 1}`;
  m = m < 10 ? `0${m}` : m;

  let d = dt.getDate();
  d = d < 10 ? `0${d}` : d;

  return `${d}/${m}/${y[2]}${y[3]}`;
}

const completeDateLabel = (dt) => {
  let y = `${dt.getFullYear()}`;

  let m = `${dt.getMonth() + 1}`;
  m = m < 10 ? `0${m}` : m;

  let d = dt.getDate();
  d = d < 10 ? `0${d}` : d;

  return `${AbDays[dt.getDay()]} - ${d}/${m}/${y[2]}${y[3]}`;
}

export {
  Days,
  AbDays,
  dateLabel,
  completeDateLabel,
}