//Importamos los modelos que hayamos creado
const Comment = require('../api/models/comment.model.js')
const Game = require('../api/models/game.model.js')
const User = require('../api/models/user.model.js')

const initializeRelations = () => {
    try {
        User.hasMany(Comment)
        Comment.belongsTo(User)
       
    } catch(error) {
        console.log(error)
    }
} 

module.exports = initializeRelations




