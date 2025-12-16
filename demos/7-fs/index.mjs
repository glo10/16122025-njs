// module fs pour filesystem => gestion des fichiers et dossiers
import {readFile, writeFile } from 'node:fs'

const me = {
    firstname: 'Glodie',
    lastname: 'Tshimini',
    age: 34
}
// écriture
writeFile('./me.txt',
    JSON.stringify(me),
    { encoding: 'utf-8'},
    (err) => {
    if(err) console.error('KO')
    console.info('OK')
})

// Lecture
readFile('./me.txt', (err, content) => {
    if(!err)  {
        const meAsObject = JSON.parse(content)
        const meAsString = content.toString()
        console.log('string', meAsString, 'object', meAsObject)
        console.log(`My name is ${meAsObject.firstname}`)
    }
    else console.error('error', err)
})