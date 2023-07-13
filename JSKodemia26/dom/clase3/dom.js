const form = document.querySelector('#user-form')
const users = []

form.addEventListener('submit', (event) => {

    event.preventDefault();

    // obtener los valores de los inputs
    const nombre = document.querySelector('#inputName');
    const apellido = document.querySelector('#inputApellido');
    const edad = document.querySelector('#inputEdad');
    const avatar = document.querySelector('#inputAvatar');

    const userInfo = {
        nombre: nombre.value,
        apellido: apellido.value,
        edad: edad.value,
        avatar: avatar.value,
    };

    users.push(userInfo)
    domDisplay(userInfo)
});

const domDisplay = (userObject) => {
    //Imagen
    const container = document.querySelector('.container')
    const avatarimage = document.createElement('img')
    avatarimage.setAttribute('src', userObject.avatar)
    avatarimage.style.width='150px'
    container.appendChild(avatarimage)
    //Info
    const name = document.createElement('h2'); 
    name.textContent = userObject.nombre;
    container.appendChild(name)

    const surname =document.createElement('h2'); 
    surname.textContent = userObject.apellido;
    container.appendChild(surname)

    const age = document.createElement('h2');
    age.textContent = userObject.edad;
    container.appendChild(age)

}


