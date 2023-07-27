const form = document.querySelector("#user-form");
const users = [];

form.addEventListener("submit", (event) => {
  event.preventDefault();

  // obtener los valores de los inputs
  const nombre = document.querySelector("#inputName");
  const fecha = document.querySelector("#inputFecha");
  const country = document.querySelector("#inputCountry");
  const avatar = document.querySelector("#inputAvatar");

  const userInfo = {
    nombre: nombre.value,
    fecha: fecha.value,
    country: country.value,
    avatar: avatar.value,
  };

  users.push(userInfo);
  createData(userInfo);
});

const getData = async () => {
  try {
    const response = await fetch(
      "https://kodemia26-default-rtdb.firebaseio.com/.json",
      {
        method: "GET",
      }
    );
    if (response.status === 200) {
      const data = await response.json();
      const array = Object.entries(data);
      array.map((item) => {
        const personaObject = {
          id: item[0],
          name: item[1].nombre,
          fecha: item[1].fecha,
          country: item[1].country,
          avatar: item[1].avatar,
        };
        console.log(personaObject.country);

        //Container
        const container = document.querySelector(".container");

        //CARD
        const thenewCard = document.createElement("div");
        thenewCard.setAttribute("class", "card-container");
        container.appendChild(thenewCard);
        //Imagen
        const avatarimage = document.createElement("img");
        avatarimage.setAttribute("src", personaObject.avatar);
        avatarimage.style.width = "80px";
        thenewCard.appendChild(avatarimage);
        //ContainerText
        const containerText = document.createElement("div");
        containerText.setAttribute("class", "container-text");
        thenewCard.appendChild(containerText);
        //Info
        const name = document.createElement("h2");
        name.textContent = personaObject.nombre;
        containerText.appendChild(name);

        const fechaData = document.createElement("h2");
        fechaData.textContent = personaObject.fecha;
        containerText.appendChild(fechaData);

        const countryData = document.createElement("h2");
        countryData.textContent = personaObject.country;
        containerText.appendChild(countryData);
        //DELETE BUTTON
        const deleteButton = document.createElement("button");
        deleteButton.setAttribute("class", "btn-close");
        deleteButton.setAttribute("type", "button");
        deleteButton.style.width = "10px";
        deleteButton.style.height = "18px";
        deleteButton.style.backgroundColor = "red";
        thenewCard.appendChild(deleteButton);
      });
    } else {
      alert("Hubo un error");
    }
  } catch (error) {
    console.log(error, "Hubo un error");
  }
};

getData();

const createData = async (userdata) => {
  const response = await fetch(
    "https://kodemia26-default-rtdb.firebaseio.com/.json",
    {
      method: "POST",
      body: JSON.stringify(userdata),
    }
  );
};

const deleteData = async (id) => {
  const response = await fetch(
    `https://kodemia26-default-rtdb.firebaseio.com/${id}.json`,
    {
      method: "DELETE",
    }
  );
};
