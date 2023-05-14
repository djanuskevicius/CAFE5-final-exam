import User from '../models/user.model.js';

export const createUser = async (req, res) => {
  try {
    const newUser = req.body;

    const validateNewUser = new User(newUser);

    const savedData = await validateNewUser.save();

    res.json(savedData);
  } catch (e) {
    console.log(e);
    res.json({ message: 'Error...' });
  }
};

export const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;

    await User.findByIdAndDelete(id);

    res.json({ message: 'User deleted successfully' });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Error...' });
  }
};

export const getUsers = async (_req, res) => {
  try {
    const users = await User.find();

    res.json(users);
  } catch (error) {
    console.log(error);
    res.json({ message: 'Error...' });
  }
};

export const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedUser = req.body;

    const user = await User.findByIdAndUpdate(id, updatedUser, {
      new: true,
    });

    res.json(user);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Error...' });
  }
};
