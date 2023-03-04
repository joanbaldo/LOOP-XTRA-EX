//4- Imprimir los números del 1 al 10 en la consola,pero solo los pares.

//Comprobación previa
// console.log(4%2) 
// pruebo este bucle que NO arroja resultado:

// for (let i = 1; (i<=10) && (i%2)==0 ; i++){
//     console.log(i);
// }

//Creo una condicional IF, alimentada por una variable cuyo valor asigno y varío aleatoriamente:

// const modulo = 2;
// let a = 4
// if (a%modulo==0){
//     console.log(a)
// }

// IF funciona así que "i%2" está bien en bucle FOR
// Nuevo intento:
// for (let i = 0; (i<=10) && (i%2==0) ; i++){
//      console.log(i);
//  }
 //Con i=0 ,console.log muestra 0, bien! ahora ya sé que antes no mostraba nada porque al igual que ahora no iteraba PERO 0%2 SI que==0 PERO 1%2 NO es igual a 0 (es decir devolvia FALSE)--> El problema es que por alguna razón NO ITERA EL BUCLE!!! WTF!!

// Quito el bloque de validación MÓDULO y funciona!
// for (let i = 0; i <=10; i++) {
//        console.log(i);
// }
// NO sé que falla...
// Pruebo con i++ en el console log

// for (let i = 0; (i<=10) && (i%2==0) ; i++){
//     console.log(i++);

// } /// y BOOOOOOOM!! FUNCIONA!
// Ahora pruebo SIN el operador módulo pero mantengo el incremental en el CONSOLE y BOOM! funciona otra vez
// for (let i = 0; i<=10 ; i++){
//     console.log(i++);
// }

for (let i = 2; (i<=10) && (i%2==0) ; i++){
console.log(i++);
}