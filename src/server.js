import express from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config()
import router from './routes/index.js';
import * as models from './models/index.js';

const { DB_PASSWORD, DB_SERVER, DB_USER } = process.env;
mongoose.set('strictQuery', true);
mongoose.connect(`mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_SERVER}/admin`);

const server = express();

server.use(bodyParser.json());
server.use(morgan('tiny'));

server.use('/', router)

server.use((err, req, res) => {
  const status = err.status || 500;
  const message = err.message || err;
  console.error(err);
  res.status(status).send(message)
});

export default server;