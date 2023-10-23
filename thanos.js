const fs = require('fs');
const config = require('./config.json');

console.log('Booting up Thanos');

const files = fs.readdirSync('.');

console.log(files);

let namesToDel = [];

for(let i = 0; i < files.length / 2; i++){
    namesToDel.push(files.at(Math.floor(Math.random() * files.length)));
}

console.log(namesToDel);

// now delete all files in namesToDel
namesToDel.forEach((name)=>{
    if(!config.safe){
        fs.unlinkSync(name);
    }
})

console.log('Thanos completed, file size reduced by 50%');
console.log(`Removed: ${namesToDel}`);
