import { findAllPromise } from "../models/teams-model.js"
export const findAll = (req, res,next) => {
    findAllPromise()
    .then(data => {
        const { teams }  = data
        res.json(teams)
    }).catch(error => console.error('error', error))
}