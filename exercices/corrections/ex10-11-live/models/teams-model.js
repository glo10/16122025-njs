import { readFile } from 'node:fs/promises'
import { resolve, join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const rootPath = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const filename = join(rootPath, 'models', 'data.json')

export const findAllPromise = async () => {
    return readFile(filename)
    .then(data => JSON.parse(data))
    .catch(error => error)
}

export const findOnePromise = async (id) => {
    return readFile(filename)
    .then(data => JSON.parse(data))
    .then(({ teams }) => {
        const team = teams.find(t => parseInt(t.id) === parseInt(id))
        return team
    })
    .catch(error => error)
}