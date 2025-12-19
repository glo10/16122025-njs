import { Schema, model } from 'mongoose'

const playerSchema = new Schema({
    id: { type: Number, required: true, unique: true},
    number : { type: Number },
    post: { type: String, required: true },
    firstname: { type: String, required: true},
    lastname : { type: String, required: true }
})

export default model('Player', playerSchema)