const Days = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta','Sábado'];

const AbDays = ['DOM', 'SEG', 'TER', 'QUA', 'QUI', 'SEX', 'SAB'];

const Months = [
  'Janeiro', 'Fevereiro',
  'Março', 'Abril', 'Maio',
  'Junho', 'Julho', 'Agosto',
  'Setembro', 'Outubro',
  'Novembro', 'Dezembro'
];

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

const monthLabel = (dt) => {
  return `${Months[dt.getMonth()]}/${dt.getFullYear()}`;
}

export {
  Days,
  AbDays,
  Months,
  dateLabel,
  monthLabel,
  completeDateLabel,
}