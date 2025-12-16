// module fs pour filesystem => gestion des fichiers et dossiers
import {readFile, writeFile } from 'node:fs'

const me = {
    firstname: 'Glodie',
    lastname: 'Tshimini',
    age: 34
}
writeFile('./me.txt',
    JSON.stringify(me),
    { encoding: 'utf-8'},
    (err) => {
    if(err) console.error('KO')
    console.info('OK')
})