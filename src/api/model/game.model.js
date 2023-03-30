const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const GameSchema = new Schema({
    
    name: {type: String, required: true},
    category: [{type: String, required: true}],
    image: {type: String, required: true},
    votes: {type: Number, default: 0},
    
},{
    timestamps: true
    });


const Game = mongoose.model('Game', GameSchema);

module.exports = Game;