const express = require('express');
const usersController = express.Router();
const User = require('./user');

usersController.post('/', async (req, res, next) => {
  const user = await User.create(req.body);
  res.status(200).send(user);
});

usersController.put('/:id', async (req, res, next) => {
  const user = await User.findByIdAndUpdate(req.params.id, { $set: req.body }, { $upsert: true, new: true });
  res.status(200).send(user);
});

usersController.get('/', async (req, res, next) => {
  const users = await User.find();
  res.status(200).send(users);
});

usersController.get('/:id', async (req, res, next) => {
  const user = await User.findById(req.params.id);
  res.status(200).send(user);
});

usersController.delete('/:id', async (req, res, next) => {
  const user = await User.deleteOne({ _id: req.params.id });
  res.status(200).send(user);
});

module.exports = usersController;
