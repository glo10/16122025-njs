import { readFile } from 'node:fs'
import { resolve, join, dirname} from 'node:path'
import { fileURLToPath } from 'node:url'

/**
 * Pour faire de la résolution d'URL = construction des chemins absolues pour les fichiers et dossiers
 * 1. Transformer l'URL courant en chemin grâce
 *  à la fonction fileURLToPath()
 * - Pour récupérer l'URL courant, on va utiliser la proprité meta.url de la fonction import
 *      - import.meta.url = URL courant
 * 2. Utiliser la fonction dirname sur le chemin précédent pour récupérer le dossier 
 * 3. Passer en argument le chemin à la fonction resolve() pour construire vos différentes routes
 * 4. Construire nos différents chemins en utilisant la concaténation avec la fonction join()
 */
// 1
const currentURLPath = fileURLToPath(import.meta.url)
// 2
const rootPath = dirname(currentURLPath)
// 3 les différents routes vers les dossiers assets, config, css, etc.
const assetsDir = resolve(rootPath, 'assets')
const cssDir = join(assetsDir, 'css')
const jsDir = join(assetsDir, 'js')
const configDir = join(assetsDir, '..', 'config') // .. un cran en arrière (retour dossier parent)
const srcDir = join(rootPath, 'src')
const componentsDir = join(srcDir, 'views', 'components') // on liste les sous dossiers à la suite
readFile(join(cssDir, 'main.css'), (err, content) => {
    if(err) console.error('Erreur lecture fichier css', err)
    else console.log('contenu css', content.toString())
})