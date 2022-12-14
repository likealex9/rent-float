/* eslint-disable react/jsx-filename-extension */
import express from 'express';
import { favorite, user, flat } from '../db/models';

const route = express.Router();

route.post('/:id', async (req, res) => {
  try {
    const fav = await favorite.findAll({
      include: [{
        model: user,
      },
      {
        model: flat,
      }],
    });
    res.json(fav);
  } catch (err) {
    console.error(err);
  }
});
route.put('/add/:id', async (req, res) => {
  try {
    const newFav = await favorite.create({
      id_user: req.session.userSession.id,
      id_flat: req.params.id,
      createdAt: new Date(),
      updatedAt: new Date(),
    });
    res.sendStatus(200);
  } catch (err) {
    console.error(err);
  }
});

export default route;
