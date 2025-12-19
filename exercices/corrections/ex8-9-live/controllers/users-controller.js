const { getUsers, getUserBy } = require('../models/users-model')
async function findAll(req, res, next) {
  const users = await getUsers();
  res.render("users-list", { users });
}

const findOne = async (req, res, next) => {
  const login = req.params.login;
  getUserBy(login)
  .then((user) => {
    res.render('user-single', { user })
  }).catch((err) =>  {
    console.log('erreur', err)
    next(new Error(`Can't find user with login ${login}`))
  })
};
module.exports = {
  findAll,
  findOne,
};
