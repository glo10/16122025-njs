const firstname = 'Glodie'
const lastname = 'tshimini'

/**
 * concaténer = mettre bout à bout les infos (string + variable)
 * ancienne façon pour concaténer avec l'utilisation
 * de l'opérateur +
 * 
 * nouvelle façon avec `(touche ALT GR + 7 + Espace) et ${} pour évaluer une variable
 * 
 */ 
const phraseOld = 'Je suis ' + firstname + ' ' + lastname
const phraseNew = `Je suis ${firstname} ${lastname}`
console.log('phraseOld :', phraseOld, ', phraseNew :', phraseNew)
