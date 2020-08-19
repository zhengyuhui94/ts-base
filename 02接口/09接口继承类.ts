class Control {
    private state: any
}

// 接口 SelectableControl 继承 Control 类
interface SelectableControl extends Control {
    select(): void
}

class Button extends Control implements SelectableControl {
    select(){}
}

class TextBox extends Control {
    select(){}
}

// 报错，类 ImageC 错误实现接口 SelectableControl
// class ImageC implements SelectableControl {
//     // private state = 0; // 报错，类 ImageC 错误实现接口 SelectableControl。类型具有私有属性 state 的单独声明
//     select(){}
// }