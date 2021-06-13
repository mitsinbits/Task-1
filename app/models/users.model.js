const mongoose  = require('mongoose')

const UserSchema = mongoose.Schema({
    name: {
        type: String
    },
    email: {
        type: String,
    },
    age: {
        type: Number
    }
})

module.exports = mongoose.model('User',UserSchema)