const config = require('./configure.json')

function fib(n){
    if(n < 1) return 0
    if(n == 1) return n

    return fib(n-1) + fib(n-2);
}

console.log(`Starting up file ${config.name}`);

console.log(`Fib 5: ${fib(5)}`)

setTimeout(()=>{
    console.log('Closing file');
}, 2000);
