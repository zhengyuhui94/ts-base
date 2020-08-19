interface Counter {
    (start: number): string
    interval: number
    reset(): void
}

function getCounter(): Counter {
    let counter = (function(s: number){
        return `${s}`;
    }) as Counter;
    counter.interval = 123;
    counter.reset = function(){
        console.log('reset');
    }
    return counter;
}

let counter = getCounter();
console.log(counter(10));
counter.reset();
console.log(counter);
