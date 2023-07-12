// Clase 12 Lunes 3 de Julio

// array.find

const list = [0, 0,1,2,3,4,5,6,7,8]

const result = list.find((item, index, array) => {
    return item > 3
})

// console.log(result);

// index Of



// array.map
// genera arreglo con misma cantidad de elemento

const resultadomap = list.map((item, index, array) => {
    return item >= 1
})

console.log(resultadomap)
