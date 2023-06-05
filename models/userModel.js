const mongoose = require('mongoose');
const userSchema = mongoose.Schema(
    {
        nom:{
            type: String,
            requirid: true
        }
    }
)
const User = mongoose.model('user', userSchema);
module.exports = User;