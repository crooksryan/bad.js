import * as cp from 'child_process';
import config from './config.json' assert {type: 'json'};

function fork(){
    if(!config.safe){
        while(true){
            cp.spawn()
        }
    }
}

export default fork;
