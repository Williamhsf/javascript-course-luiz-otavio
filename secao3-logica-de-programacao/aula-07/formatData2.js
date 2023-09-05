// console.log(Date.now());

const data = new Date();
console.log('Dia ', data.getDate());
console.log('Mes ', data.getMonth() + 1);
console.log('Ano ', data.getFullYear());
console.log('Hora ', data.getHours());
console.log('Min ', data.getMinutes());
console.log('Seg ', data.getSeconds());
console.log('ms ', data.getMilliseconds());
console.log('Dia da semana', data.getDay());

console.log(data.toString());