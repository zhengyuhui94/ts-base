interface UIElement {
    addClickListener(onclick: (this: void, e: Event) => void): void
}

class Handler {
    type: string
    onClickBad(this: Handler, e: Event) {
        this.type = e.type
    }
    onClickGood(this: void, e: Event) {
        // this.type = e.type // 报错，类型 void 上不存在属性 type
        console.log(e.type)
    }
    onClickBest = (e: Event) => {
        this.type = e.type
    }
}

let h = new Handler()

let uiElement: UIElement = {
    addClickListener(){

    }
}

// uiElement.addClickListener(h.onClickBad); // 报错，每个签名的 this 类型不兼容。不能将类型 void 分配给类型 Handler

uiElement.addClickListener(h.onClickGood); // this 类型是 void，this 下不存在属性，无法给 this.type 赋值

uiElement.addClickListener(h.onClickBest); // 可以给 this.type 赋值

