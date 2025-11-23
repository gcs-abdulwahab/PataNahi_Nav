import { EventEmitter } from "events";

const emitter = new EventEmitter();

emitter.once("click", (arr: number[]) => {
    
    console.log('get the sum of the array')
    const sum = arr.reduce((a, b) => a + b, 0);
    console.log('Sum:', sum);
   
});

setTimeout(() => {
    console.log("Emitting click event after 2 secondsf.......");
    emitter.emit("click", [1, 2, 3, 4, 5]);
}, 2000);

emitter.emit("click", [1, 2, 3]);
emitter.emit("click", [10, 20, 30]);
emitter.emit("click", [10, 20, 30]);
emitter.emit("click", [10, 20, 30]);
emitter.emit("click", [10, 20, 30]);


