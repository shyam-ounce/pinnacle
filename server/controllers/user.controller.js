import bcrypt from "bcryptjs";
import User from "../models/user.model.js";

const createUserController = async (req, res) => {
    console.log(req.body)
  const hashedPassword = await bcrypt.hash(req.body.password, 10);

  const newUser = await User.create({
    displayName: req.body.displayName,
    username: req.body.username,
    email: req.body.email,
    hashedPassword: hashedPassword,
  });

  if (newUser) {
    newUser.save();
    return res.json({ message: "hello from user route!" });
  } else {
    return res.json({ message: "Something went wrong!" });
  }
};

export { createUserController };
