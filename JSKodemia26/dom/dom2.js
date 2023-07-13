//Append child - Insert Before

const body = document.querySelector('body');
const titulo = document.querySelector('h1');

const elemento = document.createElement('div');
elemento.textContent='abcd'

body.insertBefore(elemento,titulo)

//Remove Child

body.removeChild(elemento)

//innerHTML - es propiedad como textContent

// document.body.innerHTML = 'ijuawhda'; Reemplaza todo el document por lo que se le asigne

// to export vars from another js file we need to
 export default body

//- Luego podemos hacer import en otro file js con

// import body - no importa como la nombres ya que solo se exporta una sola

//- Para exportar mas variables
 export {titulo, body}

 // - Importar mas variab;es(ya ques se exporta como objeto)

 //import{ titulo, body}


 //Event Listener

 //variable.addEventListener('keypress(o otro evento) (event) => {
//  console.log(event.target.value)
// })


//Con query selectors a inputs podemos agregar a su variable .value y nos da su valor o se lo podemos cambiar
