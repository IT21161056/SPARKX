import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  roles: [
    {
      type: String,
      enum: ["user", "supplier", "electrician"], // Define your roles here
    },
  ],
});

export default mongoose.model("User", userSchema);
