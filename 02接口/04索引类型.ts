interface StringArray {
    [index: number]: string
}
let myArray: StringArray;
myArray = ['yuhui', 'lala'];
let myStr: string = myArray['0'];

class Animal {
    name: string
}
class Dog extends Animal {
    bread: string
}
// 数值索引类型是字符串索引类型的子类
interface NotOkey {
    [x: number]: Dog
    [x: string]: Animal
}
// 报错，数字索引类型 Animal 不能赋给字符串索引类型 Dog
// Animal 是 Dog 的父类
// interface badOkey {
//     [x: number]: Animal
//     [x: string]: Dog
// }

interface NumberDictionary {
    [index: string]: number
    length: number
    // name: string //报错，类型 string 的属性 name 不能赋给字符串索引类型 number
}

interface ReadonlyStringArray {
    readonly [index: number]: string
}
let myReadonlyArray: ReadonlyStringArray = ['yuhui', 'lala'];
// myReadonlyArray[0] = 'love'; // 报错，类型 ReadonlyStringArray 中的索引签名仅允许读取