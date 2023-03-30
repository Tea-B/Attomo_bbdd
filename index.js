const express = require('express');
const {connect} = require('./src/utils/database')

const usersRouter= require('./src/api/routes/users.routes')
const gameRouter= require('./src/api/routes/game.routes')

const dotenv = require('dotenv');
const cors = require("cors");
const app = express();
const http = require('http');
const server = http.createServer(app);

dotenv.config();
const PORT = process.env.PORT || 8000;

connect();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/user', usersRouter)
app.use('/game', gameRouter)

server.listen(PORT, () => console.log(`listening http://localhost:${PORT}`))