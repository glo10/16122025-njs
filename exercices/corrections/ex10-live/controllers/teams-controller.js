import dataJSON from '../models/data.json'
export const findAll = (req, res,next) => {
    const data = JSON.parse(dataJSON)
    const { teams }  = data
    res.json(teams)
}