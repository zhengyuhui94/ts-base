// 此处所有的接口和类都放在了全局命名空间中，容易产生命名冲突
// 不要将许多不同的名称放入全局命名空间，而是将对象包装到命名空间中
interface StringValidator {
    isAcceptable(s: string): boolean;
}

const lettersRegexp = /^[A-Za-z]+$/;
const numberRegexp = /^[0-9]+$/;

class LettersOnlyValidator implements StringValidator {
    isAcceptable(s: string): boolean{
        return lettersRegexp.test(s);
    }
}

class ZipCodeValidator implements StringValidator {
    isAcceptable(s: string): boolean{
        return s.length === 5 && numberRegexp.test(s);
    }
}

let strings = ["Hello", "98052", "101"];

let validators: {[s: string]: StringValidator} = {};

validators['ZIP CODE'] = new ZipCodeValidator();
validators['Letters only'] = new LettersOnlyValidator();

for (let s of strings) {
    for (let name in validators) {
        let isMatch = validators[name].isAcceptable(s);
        console.log(`'${ s }' ${ isMatch ? "matches" : "does not match" } '${ name }'.`);
    }
}