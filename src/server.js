import express from 'express';
import morgan from 'morgan';
import session from 'express-session';
import store from 'session-file-store';
import { renderToString } from 'react-dom/server';
import React from 'react';
import Layout from './components/Layout';
import loginrouter from './routes/loginroute';
import regrouter from './routes/regrouter';
import favoriterouter from './routes/favoriterouter';
import { flat } from './db/models';

const app = express();
const PORT = 3000;

// require('dotenv').config();

const FileStore = store(session);

const sessionConfig = {
  name: 'user_sid',
  secret: process.env.SESSION_SECRET ?? 'test',
  resave: true,
  saveUninitialized: false,
  store: new FileStore(),
  cookie: {
    maxAge: 1000 * 60 * 60 * 12,
    httpOnly: true,
  },
};

app.use(express.static('public'));
app.use(express.json());
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(session(sessionConfig));

app.use('/favorite', favoriterouter);
app.use('/login', loginrouter);

app.use('/register', regrouter);

app.use('/signup', regrouter);
app.use('/users', regrouter);

app.get('/', async (req, res) => {
  try {
    const initState = { path: req.originalUrl };
    const html = renderToString(<Layout initState={initState} />);
    res.write('<!DOCTYPE html>');
    res.end(html);
  } catch (err) {
    console.error(err);
  }
});

app.get('/houses/:id', async (req, res) => {
  try {
    const initState = { path: req.originalUrl };
    const html = renderToString(<Layout initState={initState} />);
    res.write('<!DOCTYPE html>');
    res.end(html);
  } catch (err) {
    console.error(err);
  }
});

app.get('/qwerty', async (req, res) => {
  const list = await flat.findAll();
  res.json(list);
});



app.listen(PORT, () => console.log(`Server is started on port ${PORT}`));
