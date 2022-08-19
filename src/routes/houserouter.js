/* eslint-disable react/jsx-filename-extension */
import express from 'express';
import { flatCategories, user, flat } from '../db/models';

const route = express.Router();

route.post('/add/:id', async (req, res) => {
  try {
    const newFlat = flat.create(
      {
        price: Number(req.body.Price),
        descriptions: req.body.Description,
        img: req.body.Image,
        coordinate: req.body.Adress,
        id_user: req.params.id,
        id_category: 2,
      },
    );
    res.json(newFlat);
  } catch (err) {
    console.error(err);
  }
});
route.get('/pulledit/:id', async (req, res) => {
  try {
    const findFlat = await flat.findAll({
      include: { model: user },
      where: { id: req.params.id },
    });
    console.log(findFlat);
  } catch (err) {
    console.error(err);
  }
});

route.put('/edit/:id', async (req, res) => {
  try {
    const newFlat = await flat.update(
      {
        price: req.body.price,
        descriptions: req.body.descriptions,
        img: req.body.img,
        coordinate: req.body.coordinate,
        id_user: req.body.id_user,
        id_category: req.body.id_category,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        where: { id: req.params.id },
      },
    );
    res.sendStatus(200);
  } catch (err) {
    console.error(err);
  }
});

export default route;
