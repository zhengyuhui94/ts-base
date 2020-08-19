function buildName(firstName: string, lastName?: string): string {
    return firstName + ' ' + lastName
}
console.log(buildName('yuhui', 'lala'));

function buildName2(firstName: string, lastName = 'lala'): string {
    return firstName + ' ' + lastName
}
console.log(buildName2('yuhui', 'lala'));

function buildName3(firstName: string, ...restOfName: string[]): string {
    console.log(restOfName);
    return firstName + ' ' + restOfName.join(' ')
}
console.log(buildName3('yuhui', 'lala', 'xiaoma', 'laobiao', 'dagou'));
