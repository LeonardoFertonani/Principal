function filtraPares(arr){
    return arr.filter((item)=>item%2===0)
};


const array = [1, 23, 55, 67, 32, 2 ,4];
console.log(filtraPares(array))