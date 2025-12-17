import { createConnection } from 'node:net'
const client = createConnection({ port : 8006 }, () => {
    console.info('Client est connecté au serveur sur le Port 8006')
})

// Ecoute l'envoi des données par le serveur
client.on('data', (chunk) => {
    console.log('chunk', chunk.toString())
})
// gestion de la fin de la communication (com), ici c'est sain pas d'erreur, l'un de deux à décider volontairement de clotûrer la com)
client.on('end', () => {
    // destruction du client pour éviter que le paquet soit de nouveau redemander au serveur
    client.destroy()
    process.exit(0) // fin propre du processus
})
// gestion des erreurs
client.on('error', (err) => {
    console.error('Error côté client', err)
    client.destroy()
    process.exit(1) // indiquer au serveur que le processus s'est mal terminé
})
