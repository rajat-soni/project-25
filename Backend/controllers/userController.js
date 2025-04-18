const User = require('../models/user');

exports.createUser = async (req, res) => {
  const { name, email } = req.body;
  console.log("data get",req.body);

  try {
    const result = await User.createUser(name, email);
    res.status(201).json({
      message: 'User created successfully',
      userId: result.insertId,
    });
  } catch (err) {
    res.status(500).json({
      message: 'Error creating user',
      error: err.message,
    });
  }
};
