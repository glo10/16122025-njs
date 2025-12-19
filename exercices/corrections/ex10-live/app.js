import express from 'express'

// initialise une instance d'Expres
const app = express()

// appel de nos routes
app.use('/teams', teamsRouter)
export default app