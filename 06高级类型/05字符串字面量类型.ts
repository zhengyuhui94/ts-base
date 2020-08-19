type Easing = 'ease-in' | 'ease-out' | 'ease-in-out'

class UIElement {
    animal(dx: number, dy: number, easing: Easing) {
        if (easing === 'ease-in') {
            // ...
        } else if (easing === 'ease-out') {
            
        } else if (easing === 'ease-in-out') {

        } else {
            // error! 不能传入 null 或者 undefined.
        }
    }
}

let button = new UIElement()
button.animal(10, 10, 'ease-in')
// 你只能从三种允许的字符中选择其一来做为参数传递，传入其它值则会产生错误
// button.animal(10, 10, 'yyy') // 报错，类型 "yyy" 的参数不能赋给类型 Easing 的参数