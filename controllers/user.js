const User = require('../modals/User.js')

//All users Controller
exports.getUsers = (req, res) => {
  User.findAll()
    .then((users) => res.status(200).json(users))
    .catch((err) => res.status(400).send('Bad Request: ' + err.message))
}

//Single user Controller
exports.getUser = (req, res) => {
  User.findAll({
    where: {
      _id: req.params.id,
    },
  })
    .then((user) => res.status(200).json(user))
    .catch((err) => res.status(400).send('Bad Request: ' + err.message))
}

//Add new user controller

exports.createUser = (req, res) => {
  User.create({ ...req.body, picture: req.file.path })
    .then((user) => res.status(201).json(user))
    .catch((err) => res.status(400).send('Bad Request: ' + err.message))
}

//Update user

exports.updateUser = (req, res) => {
  User.update(
    { ...req.body, picture: req.file.path },
    {
      where: {
        _id: req.params.id,
      },
    }
  )
    .then((user) => res.status(200).json(user))
    .catch((err) => res.status(400).send('Bad Request: ' + err.message))
}

//Delete user

exports.deleteUser = (req, res) => {
  User.destroy({
    where: {
      _id: req.params.id,
    },
  })
    .then((user) => res.status(200).json(user))
    .catch((err) => res.status(400).send('Bad Request: ' + err.message))
}
