function add(x: number, y: number): number {
    return x + y
}
console.log(add(1, 2));

// myAdd 和 myAdd2 等同
let myAdd: (baseValue: number, increment: number) => number = function(x, y){
    return x + y
}
console.log(myAdd(3, 2));
let myAdd2 = function(x: number, y: number): number {
    return x + y
}
console.log(myAdd2(3, 4));

