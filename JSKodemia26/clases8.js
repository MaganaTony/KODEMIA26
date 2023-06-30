const persona = {
    name : 'Freddy',
    age : 18,
}

for (const key in persona) {
   console.log(persona[key])
}

// nueva concatenacion
`Buen dia ${persona}`