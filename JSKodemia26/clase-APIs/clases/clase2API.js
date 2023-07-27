const persona = {
    name: 'Armando',
    age : 26,
}



const createData = async() => {
    const response = await fetch('https://kodemia26-default-rtdb.firebaseio.com/.json', {
        method: 'POST',
        body: JSON.stringify(persona),
    })
}

// createData()

const getData= async () => {
    try {
        const response = await fetch('https://kodemia26-default-rtdb.firebaseio.com/.json',{
            method: 'GET'
        });
        if (response.status === 200){
            const data = await response.json()
            const array = Object.entries(data);
            console.log(array);
            array.map((item) => {
                const personaObject = {
                    id: item[0],
                    age: item[1].age,
                    name: item[1].name
                }
                console.log(personaObject);
                return personaObject
            })
        } else {
            alert('Hubo un error')
        }
    } catch (error) {
        console.log(error, 'Hubo un error')
    }
} 

// getData()


const getId = async () => {
        const response = await fetch('https://kodemia26-default-rtdb.firebaseio.com/.json',{
        method: 'GET'
    })
    const data = await response.json()
    const array = Object.entries(data);
    console.log(data);
}
getId()

const getDatabyId = async (id) => {
    const response = await fetch(`https://kodemia26-default-rtdb.firebaseio.com/${id}.json`, {
        method: 'GET'
    })
    const data = await response.json()
    return data
}

// PUT sobreescribe el registro
// PATCH actualiza solo lo que le envies en el body
const updateDataById = async() => {
    const response = await fetch('https://kodemia26-default-rtdb.firebaseio.com/-NaK3MD53OhP6oVXr1RK.json',{
        method: 'PATCH',
        headers: {
            "Content-type": "application/json;charset=UTF-8"
        },
        body: JSON.stringify({ name: 'actualizado'})
    });
    const data = await response.json()
    console.log(data)
};
updateDataById();