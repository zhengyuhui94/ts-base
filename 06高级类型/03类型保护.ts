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
// 类型保护
if((pet as Fish).swim){
    (pet as Fish).swim()
}else {
    (pet as Bird).fly()
}

function isFish(pet: Fish | Bird): pet is Fish{
    return (pet as Fish).swim !== undefined
}

if(isFish(pet)){
    pet.swim()
}else{
    pet.fly()
}
