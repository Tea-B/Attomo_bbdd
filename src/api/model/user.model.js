const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    
    email: {type: String, required: true},
    password: {type: String, required: true},
    name: {type: String, required: true},
    admin: {type: Boolean, default: false},
    votes: {type: Number, default: 5},
    votedGames: [{type: Schema.Types.ObjectId, ref: "Game"}],
    
},{
    timestamps: true
    });


const User = mongoose.model('User', UserSchema);

module.exports = User;