/* eslint-disable react/jsx-filename-extension */
import express, { json } from 'express';
import { renderToString } from 'react-dom/server';
import React from 'react';
import Layout from '../components/Layout';
import { favorite, user, flat } from '../db/models';

const route = express.Router();

route.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    console.log(id);
    const fav = await favorite.findAll({
      include: [{
        model: user,
      },
      {
        model: flat,
      }],
    });
    console.log('отправил данные');
    const initState = { path: req.originalUrl, data: fav };
    const html = renderToString(<Layout initState={initState} />);
    res.write('<!DOCTYPE html>');
    res.end(html);
  } catch (err) {
    console.error(err);
  }
});

route.post('/add/:id', async (req, res) => {
  const { id_flat } = req.params.id;
  console.log(id_flat)
  const newFav = await favorite.create({ id_user: req.session.userId, id_flat });
  res.sendStatus(200);
});

export default route;
