const data =  new Date('2023-06-30 19:51:22.100');

console.log('Dia ', data.getDate());
console.log('Mes ', data.getMonth() + 1);
console.log('Ano ', data.getFullYear());
console.log('Hora ', data.getHours());
console.log('Min ', data.getMinutes());
console.log('Seg ', data.getSeconds());
console.log('ms ', data.getMilliseconds());
console.log('Dia da semana', data.getDay());
// 0 --> domingo
// 6 --> sábado

console.log(data.toString());