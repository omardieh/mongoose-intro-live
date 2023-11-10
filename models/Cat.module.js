const { Schema, model } = require("mongoose");

const catSchema = new Schema({
  name: {
    type: String,
    unique: true,
  },
  color: {
    type: String,
  },
  age: {
    type: Number,
  },
});

// const catSchema = new Schema({
//     name: String,
//     color: String,
//     age: Number,
//   });

const Cat = model("Cat", catSchema);

module.exports = Cat;
