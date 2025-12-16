# Exercice 4 : serveur web avec du *JSON*

---

## Énoncé

1. Créez un *serveur web*.
2. Observez la partie ***réseau de la devTools*** côté client (navigateur).
3. Observez la ***console*** côté serveur.

### Spécifications techniques

Voici les caractéristiques du serveur Web Node :
- Écoute sur le ***port 8004*** ;
- Dans la *console*, indiquez l'url *`http://localhost:8004`* ;
- Retournez une ***réponse en JSON*** *`{"message":"success"}`* pour une requête sur la page d'accueil dont la route est `/` et le code HTTP ***200*** ;
- Retournez une ***réponse en JSON*** *`{"message":"not found"}`* pour tout autre requête en dehors de la page d'accueil et le code HTTP ***404*** ;

