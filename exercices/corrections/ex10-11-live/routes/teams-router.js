import express from 'express'
import { findAll, findOne } from '../controllers/teams-controller.js'
import { checkId } from '../middlewares/teams-middleware.js'
const teamsRouter = express.Router()
teamsRouter.get('/', findAll)
teamsRouter.get('/:id', checkId, findOne)
export default teamsRouter