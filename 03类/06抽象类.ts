// 抽象类
abstract class Department {
    name: string
    constructor(name: string) {
        this.name = name
    }
    printName(): void {
        console.log('Department name' + this.name)
    }
    // 抽象方法不包含具体实现并且必须在子类中实现
    abstract printMeeting(): void
}

class AccountingDepartment extends Department {
    constructor(){
        // 抽象类，在子类的构造函数中必须调用 super()
        super('lala')
    }
    // 子类中实现的抽象类中的方法
    printMeeting(){
        console.log('The Accounting Department meets each Monday at 10am.')
    }
    genterateReports(): void{
        console.log('Generating accounting reports...')
    }
}

// 定义 department 的类型为 Department 的实例类型
let department: Department
// department = new Department('yuhui') // 报错，不能通过抽象类创建实例
department = new AccountingDepartment();
department.printMeeting()
department.printName()
// 定义实例类型为抽象类型之后，只有在抽象类型中已经定义了的抽象方法，在子类中定义才会存在
// department.genterateReports() // 报错，类型 Department 上不存在属性 genterateReports

