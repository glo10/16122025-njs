const { getUsers } = require('../models/users-model')
async function findAll(req, res, next) {
  const users = await getUsers();
  res.render("users-list", { users });
}

const findOne = (req, res) => {
  const login = req.params.login;
  /**
   * On tente de récupérer le user depuis GitHub, si tout va bien on l'a
   * Si ça échoue parce qu'on a fait trop de requête
   * alors on récupère le user depuis le dépôt du cours dans le catch
   */
  fetch(`https://api.github.com/users/${login}`)
    .then((data) => data.json()) // promesse contenant les users transformé en objet JS (à travers le réseau les infos transitent en tant texte)
    .then((user) => user) // cette notation retourne une promesse avec user ie .then(user => { return user })
    .catch(async () => {
      const users = await fetch(repoUserURL).then((data) => data.json());
      const user = users.find((u) => u.login === login);
      return user; // retourne une promesse avec user
    })
    .then((user) => {
      // récupère le résultat d'une des promesse précédent selon le scenario
      res.render("user-single", { user });
    });
};
module.exports = {
  findAll,
  findOne,
};
