// -Crear una función que recibe un string y regresa false si el string contiene al menos una letra mayúscula


// -Crear una función que recibe un arreglo de números y devuelve el valor mas grande que se encuentra en el arreglo. 
const listNumber = [1,23,5,8,5,3]

const buscarNumero = (array) => {
    let accum = 0

    for(const element of array){
        console.log(accum)
        if(element > accum){
            accum = element
        }
    }
}

buscarNumero(listNumber)

// -Crear una función que pueda contar cuantos elementos de un arreglo son mayores a X valor dado en los parámetros.
// -Crear una función que reciba un arreglo de números y regrese la lista de números pares que se encuentran en el arreglo
// -Crear una función que pueda contar cuantas veces aparece un elemento dado en los parámetros en un arreglo también dado en sus parámetros
// -Crear una función que recibe un arreglo de strings y un string, la función devuelve true si ese string se encuentra en el arreglo y false si no se encuentra

const listName = ['ivan','mayra', 'Fer'];
const buscarString = (array, string) => {
    let isMatch = false
    for (const name of array){
        if (name.toUpperCase() === string.toUpperCase()) {
            isMatch = true 
        } 
    }
    return isMatch
}
console.log(buscarString(listName, 'Fer'))


//CICLO FOR

for (let index = 0; index < array.length; index++) {
    const element = array[index];
    
}

