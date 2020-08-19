interface Bird {
    fly()
    layEggs()
}

interface Fish {
    swim()
    layEggs()
}

// 此处报错先不管
function getSmallPet(): Bird | Fish {
    
}

let pet = getSmallPet()
pet.layEggs()
// 使用联合类型的时候，只能使用二者公共的方法/属性，如果使用非公共方法/属性，将会报错
// pet.swim // 报错，类型 Bird | Fish 上不存在属性 swim。类型 Bird 上不存在属性 swim
