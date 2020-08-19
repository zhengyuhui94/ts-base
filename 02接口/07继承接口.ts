interface Shape {
    color: string
}

interface PenStroke {
    penWidth: number
}

// 单继承
// Square 接口继承 Shape 接口
interface Square extends Shape {
    sideLength: number
}
// 类型断言
let square = {} as Square;
square.color = 'red';
square.sideLength = 10;
console.log(square);

// 多继承
interface SquareMore extends Shape, PenStroke {
    squareMoreLength: number
}
let squareMore = {} as SquareMore;
squareMore.color = 'blue';
squareMore.penWidth = 100;
squareMore.squareMoreLength = 5;
