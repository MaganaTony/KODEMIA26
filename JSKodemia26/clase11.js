// Metodos de array

//push - add element to the last
const list1 = [1,2,3];
list1.push(5);
console.log(list1)

//unshift - adds element to first posistion

const list = [1,2,3];
list.unshift(5);
console.log(list)

//pop - removes last element

const list2 = [1,2,3];
list2.pop();
console.log(list2)

// shift - removes first element

const list3 = [1,2,3];
list3.shift();
console.log(list3)

//join - add all strings

const list4 = ['mi', 'perro', 'jake'];
const transform = list4.join('-');
console.log(transform)

//slice - extrase/ remueve a traves de parametros (2,4) osea del 2 a 4 se quedaria y lo demas se va /crea arreglo nuevo

let text = [ 'c', 'i', 'v', 'i' , 'c']

console.log(text.slice(2 ,4));

//splice modifica el arreglo existente

let text1 = [ 'c', 'i', 'v', 'i' , 'c']

console.log(text1.splice(2 ,4));

// Crear una funcion que se encargue de decirnos la cancion con mas reproducciones




// Crear una funcion que nos indique cual es la cancion mas vieja

// Utilizar el forEach

const songsData = [
    {
        name: "¿Dónde jugarán los niños?",
        band: "Maná",
        releaseYear: "1992",
        statistics: {
            likes: 20000,
            reproductions: 8000
        },
    },
    {
        name: "La muralla verde",
        band: "Enanitos Verdes",
        releaseYear: "1986",
        statistics: {
            likes: 21000,
            reproductions: 19000
        },
    },
    {
        name: "Te Ví En Un Tren",
        band: "Enanitos Verdes",
        releaseYear: "1987",
        statistics: {
            likes: 20000,
            reproductions: 23490
        },
    },
    {
        name: "Mariposa Traicionera",
        band: "Maná",
        releaseYear: "2002",
        statistics: {
            likes: 12000,
            reproductions: 25690
        },
    },
    {
        name: "Rayando el Sol",
        band: "Maná",
        releaseYear: "1990",
        statistics: {
            likes: 12000,
            reproductions: 18000
        },
    },
    {
        name: "La celula que explota",
        band: "Jaguares",
        releaseYear: "1999",
        statistics: {
            likes: 12000,
            reproductions: 23421
        },
    },
    {
        name: "No dejes que...",
        band: "Jaguares",
        releaseYear: "1999",
        statistics: {
            likes: 12345,
            reproductions: 10000
        },
    }
]
let accum = null
songsData.forEach((element) => {
    let reps = element.statistics.reproductions
    if (!accum) {
        accum = element
    } else {
        if(accum.statistics.reproductions < reps){
            accum = element
        } 
    }
    })
    console.log(accum);


