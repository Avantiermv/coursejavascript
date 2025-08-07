const fs = require('fs').promises;
const path = require('path');

async function leitora(rootDir) {
    rootDir = rootDir || path.resolve(__dirname);
    const files = await fs.readdir(rootDir);
    walk(files);
}

function walk(files){
    for(let file of files){
        console.log(file);
    }
}
leitora('C:/Users/marco/Documents/marcosviniciusdocs/cursos e projetos de cursos');