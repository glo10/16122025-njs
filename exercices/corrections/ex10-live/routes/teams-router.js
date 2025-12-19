import express from 'express'
import { findAll } from '../controllers/teams-controller.js'
const teamsRouter = express.Router()
teamsRouter.get('/', findAll)
export default teamsRouter