var x: string = 'lala'; // string 类型
x = undefined; // null 和 undefined 作为子类型，可以赋值给父类型，不会报错，除非使用 tsc xxx.ts --strictNullChecks 执行编译才会报错

var y: number = 10; // number 类型

var z: boolean = true; // boolean 类型

var a: number[] = [1, 2]; // 元素全部是 number 类型的数组

var b: Array<string> = ['a', 'b']; // 数组泛型，Array<元素类型>

let c: [string, number]; // 定义一对值分别为 string 和 number 类型的元组
c = ['hello', 10];

let d: any = 4; // 变量可以是任何类型
d = 'maybe a string instead';
d = false;

function warnUser(): void { // 当一个函数没有返回值时，定义返回值类型为 void 
    console.log('This is my warning message');
}

let e: void = null; // 声明一个 void 类型的变量没有什么大用，只能为它赋予 undefined 和 null

let f: number | string = 1111; // 联合类型

// declare function create(o: object | null): void // object 表示非原始类型，也就是除 number，string，symbol，boolean，null，undefined之外的类型
// create({prop: 0});
// create(null);
// create(11); // 报错

let g: any = 'this is a string'; 
let gNum: number = (g as string).length; // 类型断言，知道一个实体具有比它现有类型更确切的类型
let gNum2: number = (<string>g).length; // 类型断言，在程序里尽量使用一种语法
console.log(gNum);

// 类型谓词（此处与定义 boolean 效果一样）
function test(val: any): val is String{
    return typeof val === 'string';
    // return 'string'; // 不能将类型 "string" 分配给类型 boolean
}

