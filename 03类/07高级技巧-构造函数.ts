class Greeter {
    static standardGreeting = 'hello, there'
    greeting: string
    constructor(message?: string) {
        this.greeting = message
    }
    greet() {
        if(this.greeting){
            return 'hello, ' + this.greeting
        }else {
            return Greeter.standardGreeting
        }
    }
}

// 定义 greeter 的类型为 Greeter 的实例类型
let greeter: Greeter
greeter = new Greeter()
console.log(greeter.greet())

// 定义 greeterMaker 的类型为 Greeter 的构造器类型
let greeterMaker: typeof Greeter = Greeter
console.log(greeterMaker.standardGreeting)
// 通过 greeterMaker 去修改静态属性
// greeterMaker 不是实例，是 Greeter 类
greeterMaker.standardGreeting = 'hey there'

let greeter2: Greeter
greeter2 = new Greeter()
console.log(greeter2.greet())
