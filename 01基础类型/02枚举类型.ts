enum Color {
    Red = 1,
    Green = 3,
    Blue = 5
}

let c: Color = Color.Green; // 获取指定成员的数值
console.log(c); // 3

let colorName: string = Color[3]; // 根据数值，找到相应的名字
console.log(colorName); // Green
