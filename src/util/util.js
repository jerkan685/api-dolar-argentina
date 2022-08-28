const {weekDays, month} = require('./valueStatic');
const formatedFecha = () => {
    const date = new Date();
    return `${weekDays[date.getDay()]} ${date.getDate()} de ${month[date.getMonth()]} del año ${date.getFullYear()} `
}


module.exports={
    formatedFecha
}