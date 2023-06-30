// Crear una funcion que reciba un nombre y un apellido y devuelva un saludo y si no recibe un nombre simplemente llamarlo amigo 

// input: freddy, kruguer
// output: Hola Freddy kruguer
// output: Hola amigo

function HelloName(name, surname, etc) {
    if (name !== undefined && surname !== undefined){
        let fullName = (name + ' '+ surname)
        console.log('Hola' + ' ' + fullName)
    } else{
        console.log('Hola amigo')
    }

}
HelloName()

// Crear una funcion que altere el valor de +1 de una variable global cada que se ejecute (no retornar nada)

function alterValue(){
    let value = 0
    console.log(value)
    value++
    console.log(value)
}
alterValue()

// Crear un funcion que reciba un parametro de tipo numero y regrese true si el parametro es un numero par o false si es un numero impar

const esPar = (number) => number % 2 === 0 ? true : false;
console.log(esPar(7))