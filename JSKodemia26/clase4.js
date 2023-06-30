// Objetos
//      Objeto            Array
// {nombre : Ivan}      [1,2,3,4,]

const persona = {
    nombre: 'Freddy Kurger',
    age: 45,
}

persona.edad
persona['edad']

console.log(persona.age)

// Ejerrcicio

const RickAndMortyCharacters = {
    info: {
      count: 826,
      pages: 42,
      next: "https://rickandmortyapi.com/api/character?page=2",
      prev: null
    },
    results: {
        id: 2,
        name: "Morty Smith",
        status: "Alive",
        species: "Human",
        type: "",
        gender: "Male",
        origin: {
            name: "unknown",
            url: ""
        },
        location: {
            name: "Citadel of Ricks",
            url: "https://rickandmortyapi.com/api/location/3"
        },
        image: "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
        episode: 'Sugar Castle',
        url: "https://rickandmortyapi.com/api/character/2",
        created: "2017-11-04T18:50:21.651Z"
    }
}

// Accede a las propiedades que correspondan a los siguientes valores
 826     
'Citadel of Ricks'
'Alive'
'https://rickandmortyapi.com/api/character/avatar/2.jpeg'


console.log(RickAndMortyCharacters.info.count)
console.log(RickAndMortyCharacters.results.status)
console.log(RickAndMortyCharacters.results.location.name)
console.log(RickAndMortyCharacters.results.image)

// --------------------- Ejercicios ----------------------
// Crea objetos javascript que representen los siguientes objetos de la vida real (con todo y metodos)
// una casa
// un mentor
// un koder
// una computadora

const casa = {
    antiguedad: 45,
    color: 'blanco',
    size: '200mts',
    pisos: 3,
    renta: () => console.log('En dolares! Ahhhh!')
}
const mentor = {
    nombre: 'Ivan',
    edad: 34,
    expertise: 'JS',
    feedback: () => console.log('te falto agregarle metodos a los objetos')
}
const kdoer = {
    nombre: 'Antonio',
    edad: 25,
    curso: 'Fullstack',
    escuela: 'Kodemia',
    response: () => console.log('Mierda.. jajaja')
}

// Escribe el codigo necesario para ejecutar su metodo de acelerar
let automovil = {
    marca: 'FIAT',
    modelo: '500',
    acelerar: () => console.log('ruuuun!')
}

console.log(automovil.acelerar())



let isString = '3'=== 3
console.log(isString)