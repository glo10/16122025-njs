/**
 * Traitement asynchrone qui retourne une promesse
 * Une promesse (promise) est une fonction qui va retourner un résultat
 * selon si succès ou échec
 * En cas de succès = appel de resolve(), le résultat sera accessible
 *  depuis la fonction .then() de la promesse
 * En cas d'échec, l'erreur sera accessible (capturée) dans la fonction .catch()
 * Pour créer une Promesse, on utilise l'objet Promise
 *  Prend en paramètre 2 fonctions resolve, reject
 *      resolve est appelée en cas de succès et reject en cas d'erreur
 */

const fromJSONP = () => {
  return new Promise(async (resolve, reject) => {
    /**
     * fetch est également une promesse
     */
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    /**
     * Si le serveur distant nous répond favorable (code HTTP 200)
     * on sait qu'on récupère du JSON mais à travers le réseau
     * c'est uniquement des strings (les objets ont été stringifié)
     * On peut transformer ce string en objet en utilisant
     * la fonction .json()
     *  */
    // resolve => succès => retourne le résultat sous forme de JSON
    if (res.status == 200) resolve(res.json()); 
    else reject("Impossible récupérer les utilisateurs depuis JSONPLACEHOLDER");
  });
};

fromJSONP().then((data) => console.log("data", data))
.catch(err => console.error('catch error fromJSONP', err))

// for next demo with Promise.all()
// const fromGitHub = new Promise((resolve, reject) => {
//   fetch("https://api.github.com/users");
// });
