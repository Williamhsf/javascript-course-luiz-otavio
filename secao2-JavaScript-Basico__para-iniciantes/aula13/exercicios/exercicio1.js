const nome = prompt('Digite seu nome completo: ');
document.body.innerHTML += `O seu nome é <strong>${nome}</strong><br>`;
document.body.innerHTML += `Seu nome tem <strong>${nome.length}</strong> letras<br>`;
document.body.innerHTML += `A segunda letra do seu nome é: ${nome.charAt(1)} <br>`;
document.body.innerHTML += `Qual é o primeiro indice da LETRA <strong>A</strong> do seu nome? <strong>${nome.indexOf('a')}</strong><br>`;
document.body.innerHTML += `Qual é o ultimo indice da LETRA <strong>A</strong> do seu nome? <strong>${nome.lastIndexOf('a')}</strong><br>`;
document.body.innerHTML += `As ultimas 3 letras do seu nome são? ${nome.slice(-3)}<br>`;
document.body.innerHTML += `As palavras do seu nome são <strong>${nome.split(' ')}</strong><br>`;
document.body.innerHTML += `Seu nome com letras maiusculas <strong>${nome.toUpperCase()}</strong><br>`;
document.body.innerHTML += `Seu nome com letras minusculas <strong>${nome.toLowerCase()}</strong><br>`;