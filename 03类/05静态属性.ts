class Grid {
    // 静态属性只能类来访问，不能通过实例或者 this 来访问
    static origin = {x: 0, y: 0}
    scale: number
    constructor(scale: number){
        this.scale = scale
    }
    calculateDistanceFromOrigin(point: {x: number, y: number}){
        let xDist = point.x - Grid.origin.x
        let yDist = point.y - Grid.origin.y
        return Math.sqrt(xDist * xDist + yDist * yDist) * this.scale
    }
}

let grid1 = new Grid(1.0);
let grid2 = new Grid(5.0);

console.log(grid1.calculateDistanceFromOrigin({x: 3, y: 4}))
console.log(grid2.calculateDistanceFromOrigin({x: 3, y: 4}))
