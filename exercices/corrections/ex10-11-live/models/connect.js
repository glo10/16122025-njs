import { mongoose } from 'mongoose'
export async function connect() {
    // Propriété readyState nous donne l'info sur l'état de connexion à bdd
    const state = mongoose.connection.readyState
    /**
     * les valeurs possibles de state
     *  0 => disconnected
     *  1 => connected
     *  2 => connecting (en cours de connexion)
     *  3 => disconnecting (en cours de déconnexion)
     */
    if(state != 1) {
        const url = process.env.MONGO_URL
        mongoose.connect(url)
        .then(() => {
            return mongoose.connection.readyState
            console.log('connexion OK', mongoose.connection.readyState) // égale à 1
        }).catch(err => {
            console.error('connexion KO', err)
        })
    }
    return mongoose.connection.readyState
}