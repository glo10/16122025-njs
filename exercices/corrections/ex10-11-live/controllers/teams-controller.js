import { findAllPromise, findOnePromise } from "../models/teams-model.js"
export const findAll = (req, res,next) => {
    findAllPromise()
    .then(data => {
        const { teams }  = data
        const result = {
            success: true,
            data: teams
        }
        res.status(200)
        res.json(result)
    }).catch(error => {
        console.error('error', error)
        res.status(404)
        res.json({ success: false, message: `can't find teams, try again`})
    })
}

export const findOne = (req, res,next) => {
    const id = req.params.id
    findOnePromise(id)
    .then(user => {
        if(user && user.id && user.name && user.country) {
            const result = {
                success: true,
                data: user
            }
            res.json(result)
        } else {
            throw new Error(`${id} not found`)
        }
    }).catch(({ message }) => {
        res.status(404)
        res.json({ success: false, message})
    })
}