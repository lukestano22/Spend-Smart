const { Schema, model } = require('mongoose')

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    budgets: {
        type: Schema.Types.ObjectId,
        ref: Budget
    }
})

const User = model('user', userSchema)

module.exports = User