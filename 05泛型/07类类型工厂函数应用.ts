// 简单应用
// T 实例类型，c 构造器类型，通过 new c() 得到实例，并将实例作为返回值返回
function create<T>(c: new() => T): T {
    // return c() // 报错，类型 new () => T 的值不可调用。是否希望包括 new ?
    return new c() // 定义了约束，必须通过 new 来调用
}

// 复杂应用
class BeeKeeper {
    hasMask: boolean
}
class LionKeeper {
    nametag: string
}
class Animal {
    numLength: number
}
class Bee extends Animal {
    keeper: BeeKeeper
}
class Lion extends Animal {
    keeper: LionKeeper
}
// T 约束为 Animal 的子类
// T 实例类型，c 构造器类型，通过 new c() 得到实例，并将实例作为返回值返回
function createInstance<T extends Animal>(c: new() => T): T {
    return new c()
}
// createInstance(BeeKeeper) // 报错
console.log(createInstance(Bee).keeper.hasMask) // createInstance(Bee).keeper 的值为 undefined，不是很懂
createInstance(Lion).keeper.nametag


