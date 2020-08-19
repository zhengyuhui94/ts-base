class User {
    fullName: string
    firstName: string
    lastName: string

    constructor(firstName: string, lastName: string){
        this.firstName = firstName;
        this.lastName = lastName;
        this.fullName = this.firstName + '' + this.lastName;
    }
}

interface Person {
    firstNam: string,
    lastName: string
}

function greeter(person: Person){
    return 'hello' + person.firstNam + '-' + person.lastName;
}
var user: Person = {
    firstNam: 'yuhui',
    lastName: 'lala'
};

let newUser = new User('yuhui', 'lala');

console.log(newUser.fullName);

console.log(greeter(user));