// tenemos que pedir la informacion
// const obtenerNumeros = () => ({
//     n1:Number(prompt('Pedir el primer numero')),
//     n2:Number(prompt('Numero dos'))
// })
// validamos la informacion
// const verificarSegundoNumero = (nums) => {
//     if(nums.n2 == 0)
//         throw new Error('No se puede dividir por cero');

//     return nums;
// }
// ejecutamos la division
// const dividir = (nums) => {return nums.n1/nums.n2}

// // mostrar la informacion
// const mostrarPorConsola = (data) => {console.log('Division: ', data)}


// let resultado = obtenerNumeros();
// resultado = verificarSegundoNumero(resultado)
// resultado = dividir(resultado)
// resultado = mostrarPorConsola(resultado)


const obtenerNumeros = () => new Promise((resolve) => resolve({
    n1:Number(prompt('Pedir el primer numero')),
    n2:Number(prompt('Numero dos'))
}))

const verificarSegundoNumero = (nums) => new Promise((resolve, reject) => {
    if(nums.n2 == 0){
        reject('No se puede dividir por cero');
        return;
    }
    resolve(nums);
    return nums;
})

const dividir = (nums) =>  new Promise ((resolve)=> resolve(nums.n1/nums.n2))
const mostrarPorConsola = (data) =>  console.log('Division: ', data)

// console.log(obtenerNumeros())

obtenerNumeros()
.then(verificarSegundoNumero)
.then(dividir)
.then(mostrarPorConsola)
.catch((err)=> console.log(err))
// const procesarPromesa = (result, reject) => result(retorne datos)
// new Promise(procesarPromesa)