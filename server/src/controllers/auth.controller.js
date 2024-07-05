const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const UserModel = require('../models/users.model');
const createAccessToken = require('../utils/jwt');
const TOKEN_SECRET = require('../config/token.config');

const authController = {};

authController.register = async (req, res) => {
  const { username, email, password } = req.body;

  try {
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    const newUser = new UserModel({
      username,
      email,
      password: hashedPassword
    });
    await newUser.save();
    res.status(201).send({ message: 'User registered' });
  } catch (error) {
    res.status(500).send({ error: 'Error al registrar al usuario' });
  }
};

authController.login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const userFound = await UserModel.findOne({ email });

    if (!userFound) {
      return res.status(400).send({
        error: 'Email does not exist'
      });
    }

    const isMatch = bcrypt.compare(password, userFound.password);

    if (!isMatch) {
      return res.status(401).send({
        error: 'Invalid credentials'
      });
    }

    const token = await createAccessToken({
      id: userFound._id
    });

    return res.cookie('token', token).send({
      id: userFound._id,
      username: userFound.username,
      email: userFound.email
    });
  } catch (err) {
    return res.status(500).send({ error: err.message });
  }
};

authController.verifyToken = async (req, res) => {
  const { token } = req.cookies;

  if (!token) return res.status(401).send({ message: 'No token' });

  try {
    const user = jwt.verify(token, TOKEN_SECRET);

    if (!user) {
      return res.status(401).send({ message: 'Invalid Token' });
    }

    const userFound = await UserModel.findById(user.id);

    if (!userFound) {
      return res.status(404).send({ message: 'User not found' });
    }

    return res.status(200).send({
      id: userFound._id,
      username: userFound.username,
      email: userFound.email
    });
  } catch (err) {
    console.log(err);
    return res.status(500).send({ message: 'Internal server error' });
  }
};

module.exports = authController;
