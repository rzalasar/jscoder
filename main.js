/*Realizar un programa en el cual se ingrese el departamento del trabajador (A, B, C o
    D), la cantidad de horas trabajadas y se calcule cuánto se le tiene que pagar:
    a) Trabajadores del departamento A: Cobran $25 la hora
    b) Trabajadores del departamento B: Cobran $50 la hora
    c) Trabajadores del departamento C: Cobran $75 la hora
    d) Trabajadores del departamento D: Cobran $100 la hora*/

/*
let opcion= prompt("Ingrese el Departamento del Trabajador del que es usted y le decimos el monto a cobrar, 'A', 'B', 'C', 'D' o ingrese 'SALIR' para finalizar")

    while(opcion != "SALIR"){


    switch (opcion){
        
        case "A":
            console.log("Ingreso A")
            
            let horasTrabajadasA = parseInt(prompt("Usted ingreso A y cobra $25 la hora, ahora ingrese las horas trabajadas o 'SALIR' para volver al menu anterior"))
            while(horasTrabajadasA != "SALIR"){
            const deparA = 25

            const cobrar = deparA * horasTrabajadasA
            
            console.log("Usted tiene que cobrar = " + cobrar)
            break
            }
            
            horasTrabajadasA = parseInt(prompt("Usted ingreso A y cobra $25 la hora, ahora ingrese las horas trabajadas o 'SALIR' para volver al menu anterior"))
            break

            
        
        case "B": 

            console.log("Ingreso B")    

            let horasTrabajadasB = parseInt(prompt("Usted ingreso B y cobra $50 la hora, ahora ingrese las horas trabajadas o 'SALIR' para volver al menu anterior"))

            while(horasTrabajadasB != "SALIR"){
            const deparB = 50

            const cobrar = deparB * horasTrabajadasB
            
            console.log("Usted tiene que cobrar= " + cobrar)
            break
            }
            
            horasTrabajadasB = parseInt(prompt("Usted ingreso B y cobra $50 la hora, ahora ingrese las horas trabajadas o 'SALIR' para volver al menu anterior"))
            break

        case "C":

            console.log("Ingreso C")    

            let horasTrabajadasC = parseInt(prompt("Usted ingreso C y cobra $75 la hora, ahora ingrese las horas trabajadas o 'SALIR' para volver al menu anterior"))

            while(horasTrabajadasC != "SALIR"){
            const deparC = 75

            const cobrar = deparC * horasTrabajadasC
            
            console.log("Usted tiene que cobrar= " + cobrar)
            break
            }
            
            horasTrabajadasC = parseInt(prompt("Usted ingreso C y cobra $75 la hora, ahora ingrese las horas trabajadas o 'SALIR' para volver al menu anterior"))
            break

        case "D":

            console.log("Ingreso D")    

            let horasTrabajadasD = parseInt(prompt("Usted ingreso D y cobra $100 la hora, ahora ingrese las horas trabajadas o 'SALIR' para volver al menu anterior"))

            while(horasTrabajadasD != "SALIR"){
            const deparD = 100

            const cobrar = deparD * horasTrabajadasD
            
            console.log("Usted tiene que cobrar= " + cobrar)
            break
            }
            
            horasTrabajadasD = parseInt(prompt("Usted ingreso D y cobra $100 la hora, ahora ingrese las horas trabajadas o'SALIR' para volver al menu anterior"))
            break

        default:
            console.log("Opcion invalida");

        }

        opcion= prompt("Ingrese el Departamento del Trabajador del que es usted y le decimos el monto a cobrar, 'A', 'B', 'C', 'D' o ingrese 'SALIR' para finalizar")
}

*/
/*
6) Escribir una función que reciba 2 números como parámetros y devuelva:
a) Si el primer número es mayor que el segundo, devuelva 1
b) Si el segundo número es mayor que el primero, devuelva -1
c) Si ambos números son iguales, devuelva un 0
*/

/*
const numero1 = parseInt(prompt("Ingrese un Numero"))
const numero2 = parseInt(prompt("Ingrese otro Numero"))


function numeros (numero1, numero2){
    if(numero1 > numero2){
        return 1
    }
    else if(numero1 < numero2){
        return -1
    }
    else (numero1 == numero2);{
        return 0
    }
}

numeros()

console.log (numeros(numero1, numero2))

*/






/*12) Escriba una función que reciba un número como parámetro e imprima su tabla de
multiplicación desde 1 hasta 10.
*/

/*
const numero = parseInt(prompt("Ingresar Numero"))


function multiplicación (numero){
    for (let i=1 ; i<=10 ; i++){
        const resultado = numero * i;
        console.log(resultado)
    }
}

multiplicación(numero)

*/




/**2. Dado el siguiente array
a. Se pide primero obtener todas las personas del género femenino (genero
= “F”)
b. Una vez obtenidas, se pide calcular el promedio de edad sobre ellas
const listaPersonas = [
 { nombre: "Matias", genero: "M", edad: 25 },
 { nombre: "Fernanda", genero: "F", edad: 27 },
 { nombre: "Federico", genero: "M", edad: 32 },
 { nombre: "Camila", genero: "F", edad: 12 },
 { nombre: "Gabriela", genero: "F", edad: 42 },
]; */

const listaPersonas = [
    { nombre: "Matias", genero: "M", edad: 25 },
    { nombre: "Fernanda", genero: "F", edad: 27 },
    { nombre: "Federico", genero: "M", edad: 32 },
    { nombre: "Camila", genero: "F", edad: 12 },
    { nombre: "Gabriela", genero: "F", edad: 42 },
];


const personasFemeninas = listaPersonas.filter((el) => {
    return el.genero === "F" ;
})

const sumatoria =  personasFemeninas.reduce((acc, el)=> acc + el.edad, 0)

const promedio = sumatoria / personasFemeninas.length



console.log(personasFemeninas)

console.log(promedio)