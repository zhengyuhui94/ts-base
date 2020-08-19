// 定义一个接口，定义接口对象下的属性名，属性值类型
interface Person {
    name: string
}

function getName(person: Person){
    console.log(person.name);
}

let obj = {size: 10, name: 'lala'};
getName(obj); // 跳过这些检查的方式，不会经过额外的属性检查，这样写不好，不应该绕过类型检查
getName({name: 'lala'}); 
// getName({size: 10, name: 'lala'}); // 报错