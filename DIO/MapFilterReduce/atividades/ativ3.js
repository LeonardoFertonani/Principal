function somaNumeros(arr){
    return arr.reduce(function(prev, current){
        return prev+current
    })
}
const array1 = [1,2]

console.log(somaNumeros(array1))

function calculaConta(arr, wallet){
    return arr.reduce(function(prev, current){
        return prev - current
    }, wallet)
}
const priceList = [5, 10, 15]
console.log(calculaConta(priceList, 300))
