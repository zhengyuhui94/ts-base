// 接口描述函数类型
// 以下接口描述了函数参数及返回值类型
// 参数名不需要与接口描述中的参数名一致，但类型检查会按照顺序依次进行检查
interface SearchFunc {
    (source: string, subString: string): boolean
}

let mySearch: SearchFunc;
mySearch = function(src, sub){
    let result = src.search(sub);
    // return result; // 不能将类型 number 分配给类型 boolean
    return result > -1;
}

console.log(mySearch('Visit W3School!', 'W3School'));