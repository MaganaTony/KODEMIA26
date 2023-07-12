//Append child - Insert Before

const body = document.querySelector('body');
const titulo = document.querySelector('h1');

const elemento = document.createElement('div');
elemento.textContent='abcd'

body.insertBefore(elemento,titulo)

//Remove Child

body.removeChild(elemento)

//