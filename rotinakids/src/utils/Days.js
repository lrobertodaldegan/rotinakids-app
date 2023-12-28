const Days = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta','Sábado'];

const AbDays = ['DOM', 'SEG', 'TER', 'QUA', 'QUI', 'SEX', 'SAB'];

const dateLabel = (dt) => {
  return `${dt.getDate()}/${dt.getMonth() + 1}/${dt.getFullYear()[2]}${dt.getFullYear()[3]}`;
}

const completeDateLabel = (dt) => {
  return `${AbDays[dt.getDay()]} - ${dt.getDate()}/${dt.getMonth() + 1}/${dt.getFullYear()[2]}${dt.getFullYear()[3]}`;
}

export {
  Days,
  AbDays,
  dateLabel,
  completeDateLabel,
}