import express from 'express'
import teamsRouter from './routes/teams-router.js'
// initialise une instance d'Express
const app = express()

// appel de nos routes
app.use('/teams', teamsRouter)
export default app