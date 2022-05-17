
const User = require("./userModel");

exports.addUser = async (req, res) => {
  try {
    const newUser = await User.create(req.body);
    res.status(200).send({ user: newUser.username });
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: error.message });
  }
};

exports.listUsers = async (req, res) => {
    try{
        const listUser = await User.find({});
        res.status(200).send({listUser});
    }catch (error) {
    console.log(error);
    res.status(500).send({error: error.message})
    }
};

exports.deleteUsers = async (req, res) => {
    try{
        const deleteUser = await User.deleteOne(req.body);
        res.status(200).send({deleteUser});
    }catch (error) {
    console.log(error);
    res.status(500).send({error: error.message})
    }
}



exports.updateUser = async (req, res) => {
    try {
        const userUpdate = await User.updateOne(
            { email: req.body.email },
            { $set: { username: req.body.username } }
        )
        res.status(200).send({ user: userUpdate })
    } catch (error) {
        console.log(error);
        res.status(500).send({ error: error.message })
    }
  }; 

  exports.login = async (req, res) => {
    try {
      const token = await jwt.sign({ _id: req.user._id }, process.env.SECRET);
      res.status(200).send({ user: req.user.username, token: token });
    } catch (error) {
      console.log(error);
      res.status(500).send({ err: error.message });
    }
  };