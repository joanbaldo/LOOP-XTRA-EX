// console.log('CHECK CONNECTION')

////EJERCICICIOS BUCLES
// 1- Imprimir los números del 21 al 34 en la consola.
/*
for (let i=21 ; i<= 34 ;i++){
    console.log (`Este es el numerinchi Nº${i}`)
}
*/
//2-  Sumar los números del 1 al 10 y mostrar el resultado en la consola.

// for(let i = 1; (i>= 1) && (i<=10) ; i++) {
//     console.log(i+i)
// }
//
// let longArray = prompt ("Especifique longitud del array")
// let miArray = []
 
// // bucle del 1 al 5
// for(var i=1;i<=5;i++)
// {
//     // var name = prompt("Introduce un numero");
//     miArray.push(name);
//     console.log(name);
// }
// document.write(miArray);



// for (let i = 0; i <=10; i++) {
    //        console.log(i);
    // }


//3-  Dado un array de números, imprimir en la consola la suma de todos los números.
//(AMPLIADA)//
//Paso 1: Pedir longitud array por prompt
//Paso 2: Rellenar valores array
//Paso 3: Sumar valores array

//1
let longArray = prompt ("Especifique longitud array")
console.log(longArray)
//2
const miArray = []
for (let i = 0; i <= longArray; i++) {
    const miArray = miArray[i];
    
}




//4- Imprimir los números del 1 al 10 en la consola,pero solo los pares.

//Comprobación previa
// console.log(4%2) 

    for (let i= 0; i<=10; i++){
    if (i>0 && i%2==0){
        console.log('EX4 - '+i)
    } 
}
 



//5- Imprimir los números del 1 al 10 en la consola,pero solo los impares.

for (let i= 0; i<=10 ; i++){
    if(i>0 && i%2==0){
        console.log('EX5 - '+ (i-1))
    }
}



//6- Imprimir los números del 1 al 20 en la consola,pero para los múltiplos de 3 imprimir "Fizz",para los múltiplos de 5 imprimir "Buzz" y para los múltiplos de ambos imprimir "FizzBuzz".

for (let i= 0; i<=20 ; i++){
     if (i>0 && i%3==0 && i%5==0) {
        console.log('('+i+')'+'Fizz-Buzz')
    } else if(i>0 && i%3==0){
        console.log('('+i+')'+'Fizz')
    } else if (i>0 && i%5==0){
        console.log('('+i+')'+'Buzz')
        
    }
}
// NOTA: Hay que colocar la más restrictiva antes.
/*
for (let i= 0; i<=20 ; i++){
    if(i>0 && i%3==0){
        console.log('('+i+')'+'Fizz')
    } else if (i>0 && i%5==0){
        console.log('('+i+')'+'Buzz')
    } else if (i>0 && i%3==0 && i%5==0) {
        console.log('('+i+')'+'Fizz-Buzz')
    }
        
    }
*/



//7-  Dado un array de números, imprimir en la   consola solo los números pares.

//8-  Dado un array de números, imprimir en la   consola solo los números mayores a 5.

//9- Dada una lista de nombres, imprimir solo los nombres que empiezan con la letra "A".

//10- Dada una lista de números, encontrar el    número más grande y el número más pequeño.