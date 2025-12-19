import { connect } from "../models/connect.js";
import { findAllPromise, findOnePromise } from "../models/teams-model.js";
import TeamModel from "../models/schemas/team-schema.js";
export const findAll = (req, res, next) => {
  findAllPromise()
    .then((data) => {
      const { teams } = data;
      const result = {
        success: true,
        data: teams,
      };
      res.status(200);
      res.json(result);
    })
    .catch((error) => {
      console.error("error", error);
      res.status(404);
      res.json({ success: false, message: `can't find teams, try again` });
    });
};

export const findOne = (req, res, next) => {
  const id = req.params.id;
  findOnePromise(id)
    .then((user) => {
      if (user && user.id && user.name && user.country) {
        const result = {
          success: true,
          data: user,
        };
        res.json(result);
      } else {
        throw new Error(`${id} not found`);
      }
    })
    .catch(({ message }) => {
      res.status(404);
      res.json({ success: false, message });
    });
};

export const save = (req, res, next) => {
  /**
   * 1. connection à MongoDB
   * 2. Charger le model TeamSchema
   * 3. Donner les informations de l'équipe à enregistrer dans la base de données
   * 4. Enregistrer l'équipe dans la collection teams
   */
  connect().then(() => {
    // connexion avec
    // team est les infos envoyées par la request dans le body
    let team = "";
    req.on("data", (chunk) => {
      team += chunk;
    });
    req.on("end", async () => {
      team = JSON.parse(team);
      const teamModel = new TeamModel(team);
      try {
        const newTeam = await teamModel.save().catch(() => {
          throw new Error();
        });
        if (newTeam._id) {
          res.json({ message: "new team added", success: true });
        } else {
          throw new Error();
        }
      } catch (error) {
        res.status(400);
        res.json({ message: "failed", success: false });
      }
    });
  });
};
