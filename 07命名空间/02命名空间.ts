// 不要将许多不同的名称放入全局命名空间，而是将对象包装到 Validation 命名空间中
namespace Validation {
    // 通过 export 导出，使其可以在命名空间外部访问
    export interface StringValidator {
        isAcceptable(s: string): boolean;
    }

    // 没有通过 export 导出的，该命名空间外部无法访问
    const lettersRegexp = /^[A-Za-z]+$/;
    const numberRegexp = /^[0-9]+$/;

    export class LettersOnlyValidator implements StringValidator {
        isAcceptable(s: string): boolean{
            return lettersRegexp.test(s);
        }
    }

    export class ZipCodeValidator implements StringValidator {
        isAcceptable(s: string): boolean{
            return s.length === 5 && numberRegexp.test(s);
        }
    }
}

let strings2 = ["Hello", "98052", "101"];

let validators2: {[s: string]: Validation.StringValidator} = {};

validators2['ZIP CODE'] = new Validation.ZipCodeValidator();
validators2['Letters only'] = new Validation.LettersOnlyValidator();

for (let s of strings2) {
    for (let name in validators2) {
        let isMatch = validators2[name].isAcceptable(s);
        console.log(`'${ s }' ${ isMatch ? "matches" : "does not match" } '${ name }'.`);
    }
}

