/**
 * 1. Importer la fonction createServer du package node:http
 * 2. Appeler cette fonction createServer avec une callback function qui prend en paramètre 
 *  - Un objet Request (objet qui représente la requête du client)
 *  - Et un objet Response (objet qui représente la réponse du serveur)
 * 3. Indiquer sur quel port écoute notre serveur à l'aide de la méthode listen()
 */
import { createServer } from 'node:http'

createServer(function(req, res) {
    // req.url stocke le chemin demandé par le client => la route
    if(req.url === '/' && req.method.toLocaleUpperCase() === 'GET') {
        // code HTTP
        res.writeHead(200)
        // on écrit dans le flux de sortie
        res.write('Bonjour vous êtes sur la page d\'accueil')
        res.write('Bienvenue')
        res.end() // fermer le flux de sortie et retourner le résultat au client
    }
}).listen(8000, function() {
    console.log('App run on http://localhost:8000')
})