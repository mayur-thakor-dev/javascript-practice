// map practice

let arr = [1, 2, 3, 4];

let squareArr = arr.map( (currElm, idx) =>{
    return Math.pow(currElm, 2);
})

console.log(squareArr);