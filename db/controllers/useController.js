import User from "../models/User.js";


export const Register = async (req, res) => {
  const { name, email, password, phone } = req.body;

  // create a new User object
  const newUser = new User({ name, email, password, phone });

  try {
    // save the user to the database
    await newUser.save();
    res.status(200).json({ message: "User registered successfully" });
  } catch (err) {
    console.error("Error registering user", err);
    res.status(500).json({ message: "Error registering the user!" });
  }
};




export const Login = async (req, res) => {

    const { email, password } = req.body;
  
    //check if the email and password are provided
    if (!email || !password) {
      return res
        .status(404)
        .json({ message: "Email and the password are required" });
    }
  
    //check for that user in the database
    User.findOne({ email })
      .then((user) => {
        if (!user) {
          //user not found
          return res.status(404).json({ message: "User not found" });
        }
  
        //compare the provided passwords with the password in the database
        if (user.password !== password) {
          return res.status(404).json({ message: "Invalid Password!" });
        }
  
        res.status(200).json({message:"Login successful"})
      })
      .catch((error) => {
        console.log("error in finding the user", error);
        res.status(500).json({ message: "Internal server Error!" });
      });
      
  }

