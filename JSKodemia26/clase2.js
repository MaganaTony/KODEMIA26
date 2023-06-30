// Tener un numero el cual vamos a deducir si el numero es de tipo number
// evaluar el numero para dedudcir el dia
// mostrar el dia o resultado
const grade = 90;

if (typeof grade === 'number') {
    if (grade < 60){
        console.log('F')
    }
    if (grade >= 61 && grade <= 70)
    console.log('D')
    if (grade >= 71 && grade <= 80)
    console.log('C')
    if(grade>= 81 && grade<=90)
    console.log('B')
    if(grade>=91 && grade<=100)
    console.log('A')
}