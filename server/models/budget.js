const { Schema, model } = require('mongoose')

const budgetSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    amount: {
        type: Number,
        required: true,
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: User,
    },
    Category: {
        type: String,
        required: true,
    }
})

const Budget = model('budget', budgetSchema)

module.exports = Budget