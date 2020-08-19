let passcode = 'secret2 passcode';

class Employee2 {
    private _fullname: string
    get fullName(): string {
        return this._fullname;
    }
    set fullName(newName: string){
        if(passcode && passcode === 'secret passcode'){
            this._fullname = newName
        }else {
            console.log('Error: Unauthorized update of employee')
        }
    }
}

let employee2 = new Employee2();
employee2.fullName = 'lala';
if(employee2.fullName){
    console.log(employee2.fullName);
}