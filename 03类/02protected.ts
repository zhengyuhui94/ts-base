class Person {
    // 受保护属性 (protected) 可以被子类访问，但外部不能访问
    protected name: string
    // 受保护的构造器，只能被子类继承，无法通过 new 这个类，来创建实例
    protected constructor(name: string){
        this.name = name
    }
}

class Employee1 extends Person {
    private department: string
    constructor(name: string, department: string){
        super(name)
        this.department = department
    }
    getElevator(){
        return `Hello,my name is ${this.name} and I work in ${this.department}`;
    }
}

let howard = new Employee1('Howard', 'Sales')
console.log(howard.getElevator())
// console.log(howard.name) // 报错，属性 name 受保护，只能在类 Person 及其子类中访问
// let john = new Person('john') // 报错，类 Person 的构造函数是受保护的，仅可在类声明中访问