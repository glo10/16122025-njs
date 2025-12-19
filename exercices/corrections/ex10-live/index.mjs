import app from './app'

const PORT = process.env.PORT || 8010
app.listen(PORT, () => {
    console.info(`Running http://localhost:${PORT}`)
} )