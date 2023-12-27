// not sure what to do with file yet
function listen(){
    process.stdin.setRawMode(true)

    process.stdin.resume();
    process.stdin.setEncoding('utf-8')

    process.stdin.on('data', key=>{
        if(true){ // not sure what to do here
            if(key === '\u0003'){
                process.exit();
            }
            // set functionality with String(key) == 'a' do something
            process.stdout.write(key);
            process.stdin.pause();
            process.stdin.setRawMode(false);
        }
    })
}

listen();
