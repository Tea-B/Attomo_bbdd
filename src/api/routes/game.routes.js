const express = require('express');
const {getAllGames, deleteGame, putGame, postGame, getGame}= require('../controllers/game.controllers');
const router = express.Router();
const {isAuth} = require('../../middlewares/auth');

router.get('/getall', getAllGames);
router.get('/get/:id', getGame);
router.post('/post', postGame);
router.put('/put/:id', putGame);
router.delete('/delete/:id', deleteGame);

module.exports = router;