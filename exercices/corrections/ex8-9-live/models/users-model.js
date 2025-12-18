async function getUsers() {
  const repoUserURL =
    "https://raw.githubusercontent.com/glo10/16122025-njs/refs/heads/main/exercices/ressources/users.json";
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

module.exports = {
  getUsers,
};
