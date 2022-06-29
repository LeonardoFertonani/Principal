const maca = {
    value: 3,
}
const banana = {
    value: 2,
}
function usandoThis(arr, thisArg){
    return arr.map(function(item){
        return item*this.value;
    }, thisArg);
}
const quantidade = [1,2,3,4,5];
function semThis(arr){
    return arr.map(x=>x*2)
}
console.log(usandoThis(quantidade, maca));
console.log(semThis(quantidade))

