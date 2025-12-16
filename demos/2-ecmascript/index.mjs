import {lang as renameLang, capitalize, firstLetterCapitalize } from './functions/string.mjs'
import Toto from './functions/math.mjs'
console.log('La langue est stockée la variable lang qui a été renommée', renameLang)
capitalize()
firstLetterCapitalize()
const newToto = new Toto()
newToto.sum()
newToto.multiply()