class Animal1 {
    private name: string
    constructor(name: string){
        this.name = name
    }
    move(distance: number = 0){
        console.log(`${this.name} moved ${distance}m`)
    }
}

class Rhino extends Animal1 {
    constructor(){
        super('Rhino')
    }
    getName(){
        // 报错，属性 name 为私有属性，只能在类 Animal1 中访问
        // 受保护属性 (protected) 可以被子类访问，但外部不能访问
        // console.log(this.name); 
    }
}

class Employee {
    private name: string
    constructor(name: string){
        this.name = name
    }
}

let animal1 = new Animal1('Goat');
let rhino = new Rhino();
let employee = new Employee('Bob');

animal1 = rhino; // rhino 是 animal1 的子类，可以兼容
// animal1 = employee; // 错误: Animal 与 Employee 不兼容



