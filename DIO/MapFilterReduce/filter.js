/*
Cria um novo array
Não modifica o array original
*/

/*
array.filter(callback, thisArg)
callback(item,index,array)

callback: função a ser executada em cada elemento
thisArg (opcional): valor de 'this' dentro da função de callback
*/

const frutas = ['maçã fuji', 'maça verde', 'laranja', 'abacaxi'];

frutas.filter((fruta) => fruta.includes('maçã'))
// return ['maçã fuji', 'maçã verde'];