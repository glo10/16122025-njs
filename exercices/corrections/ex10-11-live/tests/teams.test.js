import { describe, it, expect } from "vitest";
import request from "supertest";
import app from "../app.js";
// supertest pour les tests d'intégration, idéale pour tester des routes de votre application
// describe regroupe ma suite de test
describe("Testing routes /teams", () => {
  // it effectue le test que l'on souhaite
  it("Testing GET /teams", () => {
    // Arrange (préparation de l'environnement pour effectuer votre test, appel de tout ce qu'il vous faut)
    // Act (l'appel de la fonction ou action à tester)
    // Assert (vérification que le résultat attendu correspond au résultat obtenu)
    return request(app)
      .get("/teams")
      .expect("Content-Type", /json/) // vérification d'un élément des headers (en-tête)
      .expect(200) // vérification du statut retourné par le serveur
      .then((response) => {
        // vérification du corps
        expect(Array.isArray(response.body.data)).toBe(true);
        expect(response.body.success).toBe(true);
      });
  });
});
