// const response = fetch('https://jsonplaceholder.typicode.com/posts/1/comments',{
//     method: 'GET'
// });

// response
// .then((data) => data.json())
// .then((json) => console.log(json))

//ASYNC //AWAIT

const getInfo = async() => {

    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts/1/comments',{
            method: 'GET'
        });
        if (response.status === 200){
            const data = await response.json()
            createEmails(data)
        } else {
            alert('Hubo un error')
        }
    } catch (error) {
        console.log(error, 'Hubo un error')
    }
};
getInfo();

const createEmails = (array) => {
    const newList = array.map((item) => {
        return item.email
    });
    console.log(newList);
};