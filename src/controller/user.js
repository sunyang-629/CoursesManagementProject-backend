const User = require('./../models/user');

async function addUser(req, res) {
    const { username, password } = req.body;
    const existingUser = await User.findOne({ username }).exec();
    if (existingUser) {
        return res.status(404).json("User already exist");
    }
    const user = new User({ username, password });
    await user.save();
    return res.json(user);
}

module.exports = {
    addUser
}