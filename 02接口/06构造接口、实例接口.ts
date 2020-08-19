// 构造接口
interface ClockConstructor {
    new (h: number, m: number)
}

// 报错，类 Clock 错误实现接口 ClockConstructor
// class Clock implements ClockConstructor {
//     currentTime: Date
//     constructor(h: number, m: number)
// }

// 实例接口
interface ClockInterface {
    tick()
}

// 检查 ctor 是否符合构造接口
function createClock(ctor: ClockConstructor, h: number, m: number) {
    return new ctor(h, m);
}

// 检查 DigitalClock 是否符合实例接口
class DigitalClock implements ClockInterface {
    constructor(h: number, m: number){}
    tick(){
        console.log('tick');
    }
}

let digital = createClock(DigitalClock, 12, 10);

