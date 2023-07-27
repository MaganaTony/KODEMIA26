//Ejercicio
// Hacer una peticion a la api de rick & morty y mostrar en el dom la imagen de cada personaje en el DOM
// https://rickandmortyapi.com/api/character

const getRickInfo = async() => {

    try {
        const response = await fetch('https://rickandmortyapi.com/api/character',{
            method: 'GET'
        });
        if (response.status === 200){
            const data = await response.json()
            const arrayList = data.results
            createImage(arrayList)
        } else {
            alert('Hubo un error')
        }
    } catch (error) {
        console.log(error, 'Hubo un error')
    }
};
getRickInfo();

const ejemplo = 1

const createImage = (array) => {
    const newList = array.map((item) => {
        return item.image
    });
    domDisplay(newList)
};

const domDisplay = (imagen) => {
    console.log(imagen);

    imagen.forEach(icon => {
         //Container
         const container = document.querySelector('.container')
         //CARD
         const thenewCard = document.createElement('div');
         thenewCard.setAttribute('class', 'card-container');
         container.appendChild(thenewCard)
         //imagen
         const addImage = document.createElement('img')
         addImage.setAttribute('src', icon)
         addImage.style.width='100px'
         thenewCard.appendChild(addImage)
    });
}