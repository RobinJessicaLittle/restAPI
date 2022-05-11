const bcrypt = require("bcryptjs");

exports.hashPass = async (req, res, next) => {
    try {
        req.body.pass = await bcrypt.hash(req.body.pass, 8);
        next();
    } catch (error) {
        console.log(error);
        res.status(500).send({ error: error.message});
    }
};

exports.unHash = async (req, res, next) => {
    try {
      req.user = await User.findOne({ username: req.body.username });
  
      if (
        req.user &&
        (await bcrypt.compare(req.body.password, req.user.password))
      ) {
        next();
      } else {
        throw new Error("Incorrect Password");
      }
    } catch (error) {
      console.log(error);
      res.status(500).send({ err: error.message });
    }
  };
  