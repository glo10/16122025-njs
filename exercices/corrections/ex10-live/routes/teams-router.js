import express from 'express'
import { findAll } from '../controllers/teams-controller'
const teamsRouter = express.Router()
teamsRouter.get('/', findAll)