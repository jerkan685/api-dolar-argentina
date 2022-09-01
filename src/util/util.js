const {weekDays, month} = require('./valueStatic');
const formatedFecha = () => {
    const date = new Date();
    return `${weekDays[date.getDay()]} ${date.getDate()} de ${month[date.getMonth()]} del año ${date.getFullYear()} `
}

const formatedEvolucion = (infoYear) => {
const today = new Date();

const keys = Object.keys(infoYear);
const value = Object.values(infoYear);

let listResult = [];

value.forEach((value, index) => {
 let data = {
  year: index < (today.getMonth() + 1) ? today.getFullYear().toString() : (today.getFullYear() - 1).toString(),
  month: keys[index],
  value: value._text
 }
 listResult.push(data);
});

listResult = listResult.sort((a, b) => a.year - b.year);

const valueReturn = {
    EvolutionInfo:listResult
}

return valueReturn;

}


module.exports={
    formatedFecha,
    formatedEvolucion
}