import { Schema, model } from 'mongoose'
const teamSchema = new Schema({
    id: { type: Number, required: true, unique: true},
    name: { type: String, required: true, unique: true},
    country: { type: String, required: true }
})
export default model('Team', teamSchema)