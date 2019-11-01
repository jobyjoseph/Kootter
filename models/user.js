const Joi = require('joi');
const mongoose = require('mongoose');

const User = mongoose.model('User', new mongoose.Schema({
  first_name: {
    type: String,
    required: true,
    maxlength: 50
  },
  last_name: {
    type: String,
    required: true,
    maxlength: 50
  },
  email: {
    type: String,
    required: true,
    maxlength: 255,
    unique: true
  },
  password: {
    type: String,
    required: true,
    maxlength: 1024
  }
}));

function validateUser(user) {
  const schema = {
    first_name: Joi.string().max(50).required(),
    last_name: Joi.string().max(50).required(),
    email: Joi.string().max(50).required().email(),
    password: Joi.string().max(255).required()
  };

  return Joi.validate(user, schema);
}

exports.User = User; 
exports.validate = validateUser;