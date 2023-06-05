const User = require('../models/userModel')
class UserController{
    static async create(req, res){
        try{
            User.find({})
            .then(user=>{
                console.log(user)
            })
        }catch(error){
            console.log(error);
        }
    }
}

module.exports = UserController;