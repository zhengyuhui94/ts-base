interface ClockInterface {
    currentTime: Date
    setTime(d: Date)
}

class Clock implements ClockInterface {
    constructor(h: number, m: number) { }
    currentTime: Date
    setTime(d: Date){
        this.currentTime = d;
    }
}