import express from 'express'
import { findAll, findOne, save } from '../controllers/teams-controller.js'
import { checkId } from '../middlewares/teams-middleware.js'
const teamsRouter = express.Router()
teamsRouter.get('/', findAll)
teamsRouter.get('/:id', checkId, findOne)
teamsRouter.post('/', save)
export default teamsRouter