const repoUserURL = "https://raw.githubusercontent.com/glo10/16122025-njs/refs/heads/main/exercices/ressources/users.json";
async function getUsers() {
  const users = await fetch(repoUserURL, {
    headers: { "Content-Type": "application/json" },
  })
    .then((data) => {
      if (data.status === 200) {
        return data.json(); // transforme les données en JSON et retourne une nouvelle promesse
      }
    })
    .catch((error) => console.error("error", error));
  return users;
}

async function getUserBy(login) {
    /**
   * On tente de récupérer le user depuis GitHub, si tout va bien on l'a
   * Si ça échoue parce qu'on a fait trop de requête
   * alors on récupère le user depuis le dépôt du cours dans le catch
   */
  return fetch(`https://api.github.com/users/${login}`)
    .then((data) => data.json()) // promesse contenant les users transformé en objet JS (à travers le réseau les infos transitent en tant texte)
    .then((user) => user) // cette notation retourne une promesse avec user ie .then(user => { return user })
    .catch(async () => {
      const users = await fetch(repoUserURL).then((data) => data.json());
      const user = users.find((u) => u.login === login);
      return user; // retourne une promesse avec user
    })
    .then((user) => user)
    .catch(error => error)
}

module.exports = {
  getUsers,
  getUserBy
};
