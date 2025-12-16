// module fs pour filesystem => gestion des fichiers et dossiers
import { readFile, writeFileSync } from 'node:fs'
import { readFile as readFilePromise } from 'node:fs/promises'

const me = {
    firstname: 'Glodie',
    lastname: 'Tshimini',
    age: 34
}
// écriture en mode synchrone => bloquant
writeFileSync('./me.txt',
    JSON.stringify(me),
    { encoding: 'utf-8'},
    (err) => {
    if(err) console.error('KO')
    console.info('OK')
})

// Lecture en mode asynchrone avec une callback function
readFile('./me.txt', (err, content) => {
    if(!err)  {
        const meAsObject = JSON.parse(content)
        const meAsString = content.toString()
        console.log('string', meAsString, 'object', meAsObject)
        console.log(`My name is ${meAsObject.firstname}`)
    }
    else console.error('error', err)
})

// lecture avec une promise
readFilePromise('./me.txt')
.then(data => console.log('data from promise', data.toString()))
.catch(err => console.error('error from promise', err))