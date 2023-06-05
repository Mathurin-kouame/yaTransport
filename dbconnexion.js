const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://mathurin:mathurin@transport.1hng7bn.mongodb.net/?retryWrites=true&w=majority', {useNewUrlParser:true,useUnifiedTopology:true})
.then(()=>{
    console.log('connexion éffectuée avec succès');
})
.catch(error=>{
    console.log(`connexion non établie:\n ${error}`);
})
module.exports = mongoose;