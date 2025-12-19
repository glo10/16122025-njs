import { Schema, model } from 'mongoose'

const gameSchema = new Schema({
    id: { type: Number, required: true, unique: true},
    home : { type: Number, required: true },
    away: { type: Number, required: true },
    score: { type: String, required: true, default: '0-0'},
    at : { type: Date, required: true }
})

export default model('Game', gameSchema)