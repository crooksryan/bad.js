import config from './config.json' assert {type: 'json'};
import fs from 'fs';
import confirm from '@inquirer/confirm';
import chalk from 'chalk';


async function thanos(){

    const files = fs.readdirSync('.');

    let namesToDel = [];

    for(let i = 0; i < files.length / 2; i++){
        namesToDel.push(files.at(Math.floor(Math.random() * files.length)));
    }

    // now delete all files in namesToDel
    if(!config.safe){
        
        console.log(chalk.red("Safe Mode Disabled."))
        const answer = await confirm({'message': 'Do you want to continue?', 'default': false})
        
        if(answer){
            namesToDel.forEach((name)=>{
                fs.unlinkSync(name);
            })

            console.log(`Removed: ${namesToDel}`);

            console.log('Thanos completed, file size reduced by 50%');
        }
    }
}

export default thanos;
