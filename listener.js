import fs from 'fs';

process.stdin.setRawMode(true)

process.stdin.resume();
process.stdin.setEncoding('utf-8')

process.stdin.on('data', key=>{
    if(true){
        if(key === '\u0003'){
            process.exit();
        }
        if('a' == String(key)){
            console.log('banana')
        }
        process.stdout.write(key)
        return key
    }
})
