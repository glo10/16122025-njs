import { EventEmitter } from 'node:events'
import { writeFile } from 'node:fs'
import { readFile } from 'node:fs/promises'
const evt = new EventEmitter()
writeFile('me.txt', 'Glodie Tshimini', (err) => {
    if(!err) evt.emit('app:ready', { filename: 'me.txt', contentType: 'text/plain'})
    else console.log('KO')
})
evt.on('app:ready', async ({ filename }) => {
    const content = await readFile(filename)
    console.log(`Contenu du fichier ${filename}: ${content}`)
})