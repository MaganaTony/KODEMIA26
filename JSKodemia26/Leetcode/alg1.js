const myObject = {
    city: "Madrid",
    greet() {
      console.log(`Greetings from ${myObject.city}`);
    },
  };
  
console.log(Object.getPrototypeOf(myObject));