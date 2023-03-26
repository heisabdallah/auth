// Models 
import User from "../models/User"
const { UserRegisterValidation, UserLoginValidation } = require("../validation/validation")
const bcrypt = require('bcrypt')
import jwt from "jsonwebtoken";
const SECRET = process.env.AUTH_SECRET

// Register User
const registerUser = async (req, res) => {
    try {

      // Validate user
      const { error } = UserRegisterValidation(req.body);
      if (error) return res.status(400).send(`${error}`)

      // Checking existing user 
      const emailExist = await User.findOne({ email: req.body.email })
      if (emailExist) return res.status(400).send('Email already exist');

      // Hash Password 
      const salt = await bcrypt.genSalt(10)
      const hashedPassword = await bcrypt.hash(req.body.password, salt)

      // Create a new user 
      const user = new User({
        fname: req.body.fname,
        lname: req.body.lname,
        email: req.body.email,
        password: hashedPassword,
        confirmpassword: req.body.confirmPassword,
      })
      const savedUser = await user.save()
        res.send(savedUser)

    } catch (error) {
        console.log(error)
    }
  };

  
  // Login user
const loginUser = async (req, res) => {
  try {
      // Validate user
      
      const { error } = UserLoginValidation(req.body);
      if (error) return res.status(400).send(`${error}`)

        // Checking if user exist
        const user = await User.findOne({ email: req.body.email })
        if (!user) return res.status(400).send('User not found');

        // checking if password is correct 
        const validPassword = await bcrypt.compare(req.body.password, user.password)
        if (!validPassword) return res.status(400).send("Invalid password")

        // Create and assign token 
        const token = jwt.sign({ UserID: user._id }, SECRET)
        const userInfo = { ID: user._id, firstName: user.fname, lastName: user.lname }
        
        res.setHeader("usertoken", token).send(userInfo)

  } catch (error) {
      console.log(error);
  }
};




export {
  registerUser,
  loginUser,
};

