const Game = require('../model/game.model');

const getAllGames = async (req, res, next) => {
    try {
        const allGame = await Game.find();
        return res.status(200).json(allGame)
    } catch (error) {
        return res.status(500).json(error)
    }
}

const getGame = async (req, res) => {
    try {
        const {id} = req.params;
        const oneGame = await Game.findById(id);
        return res.status(200).json(oneGame)
    } catch (error) {
        return res.status(500).json(error);
    }
};

const deleteGame = async (req, res, next) => {
    try {
        const {id} = req.params;
        const game = await Game.findByIdAndDelete(id);
        return res.status(200).json("Game deleted")
    } catch (error) {
        return res.status(500).json(error)
    }
}

const postGame = async (req, res, next) => {
    try {
        const {} = req.body;
        const newGame = new Game(req.body);
        const createdGame = await newGame.save();
        return res.status(200).json(createdGame) ;
    } catch (error) {
        return res.status(500).json(error) ;
    }
}

const putGame = async (req, res, next) => {
    try {
        const {id} = req.params;
        const game = new Game(req.body)
        game._id = id;
        const newGame = await Game.findByIdAndUpdate(id, game, {new:true})
        return res.status(201).json(newGame)
    } catch (error) {
        return res.status(500).json(error)
    }
}



module.exports = {getAllGames, deleteGame, putGame, postGame, getGame}