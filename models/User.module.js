// const mongoose = require("mongoose");
const { Schema, model } = require("mongoose");

// const userSchema = new Schema({
//   linkedinProfile: {
//     type: String,
//     validate: {
//       validator: (text) => {
//         return text.indexOf("https://www.linkedin.com/") === 0;
//       },
//       message: "linkedinProfile must start with 'https://www.linkedin.com/'",
//     },
//   },
// });

// function capitalize(val) {
//   if (typeof val !== "string") val = "";
//   return val.charAt(0).toUpperCase() + val.substring(1);
// }

// const userSchema = new Schema({
//   name: {
//     type: String,
//     set: (val) => {
//       if (typeof val !== "string") val = "";
//       return val.charAt(0).toUpperCase() + val.substring(1);
//     }, // <= here we call the setter we defined earlier
//   },
// });

const userSchema = new Schema(
  {
    name: { type: String },
    password: { type: String },
    job: { type: String },
    age: { type: Number },
  },
  { timestamps: true }
);

const User = model("User", userSchema);

module.exports = User;
