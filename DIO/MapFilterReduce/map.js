/*
Cria um novo array
Não modifica o array original
Realiza as operações em ordem (do index[0] ao ultimo)
*/



/*
array.map(callback, thisArg)
callback(item,index,array)

callback: função a ser executada em cada elemento
thisArg (opcional): valor de 'this' dentro da função de callback
*/

const array = [1,2,3,4,5]

let res = array.map((item)=> item*2);

console.log(res)