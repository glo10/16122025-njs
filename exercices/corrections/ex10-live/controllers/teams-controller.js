import { readFile } from 'node:fs/promises'
import { resolve, join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'
export const findAll = (req, res,next) => {
    const rootPath = resolve(dirname(fileURLToPath(import.meta.url)), '..')
    const filename = join(rootPath, 'models', 'data.json')
    readFile(filename)
    .then(data => JSON.parse(data))
    .then(data => {
        const { teams }  = data
        res.json(teams)
    }).catch(error => console.error('error', error))
}