class Person2 {
    readonly name: string
    constructor(name: string){
        this.name = name
    }
}

let person2 = new Person2('lala');
// person2.name = 'yuhui'; // 报错，只读属性，不可修改
console.log(person2.name);