const mongoose = require("mongoose");

mongoose
  .connect("mongodb://127.0.0.1:27017/examples")
  .then((x) =>
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  )
  .catch((err) => console.error("Error connecting to mongo", err));

// const Cat = mongoose.model("Cat", { name: String });
// const kitty = new Cat({ name: "IronKitty" });

// kitty
//   .save()
//   .then((createdRecord) => console.log(createdRecord))
//   .catch((err) => console.error(err));

// Cat.find().then((foundCats) => console.log(foundCats));
// Cat.findById("654e01ae46d26a874691e4d6").then((foundCat) =>
//   console.log(foundCat)
// );

// Cat.find().then((foundCats) => {
//   foundCats.forEach((cat) => console.log(cat));
// });

// async function addNewCat(catName) {
//   try {
//     const kitty = new Cat({ name: catName });
//     const createdKitty = await kitty.save();
//     console.log(createdKitty);
//   } catch (err) {
//     console.error(err);
//   }
// }

// function showCats() {
//   console.log("All the CATS!");
//   Cat.find()
//     .then((catsFromDB) => {
//       catsFromDB.forEach((oneCat) => console.log(` --> cat: ${oneCat.name}`));
//     })
//     .catch((err) =>
//       console.log(`Error occurred during getting cats from DB: ${err}`)
//     );
// }

// async function addTenCats() {
//   for (let i = 0; i < 10; i++) {
//     await addNewCat(`IronKitty ` + i);
//   }
// }

// addTenCats();

// setTimeout(showCats, 1500);

// Cat.find({}, (error, results) => {
//   if (error) {
//     console.log(`An error happened: ${error}`);
//     return;
//   }
//   console.log(`These are all found results: ${results}`);
// });

// const Student = mongoose.model("Student", { firstName: String });
// const City = mongoose.model("City", { name: String });

// const promise1 = Student.insertMany([
//   { firstName: "Alice" },
//   { firstName: "Bob" },
// ]);
// const promise2 = City.insertMany([
//   { name: "Madrid", age: 20 },
//   { name: "Barcelona" },
//   { name: "Paris" },
// ]);

// Promise.all([promise1, promise2]).then((createdRecords) => {
//   console.log(createdRecords);
// });

const Cat = require("./models/Cat.module");
// Cat.find().then((resp) => console.log(resp.length));

// Cat.create({ name: "kitty", age: 1, color: "transparent" }).then((resp) =>
//   console.log(resp)
// );

// const User = require("./models/User.module");

// User.create({ linkedinProfile: "https://www.linkedin.com/linkendin" });

// const User = require("./models/User.module");

// User.create({ name: "bob" }).then((createdUser) => console.log(createdUser));

const User = require("./models/User.module");

// const user = { name: "Alice", password: "ironhack2018", job: "Architect" };
// User.create(user)
//   .then((user) => console.log("The user is saved and its value is: ", user))
//   .catch((error) =>
//     console.log("An error happened while saving a new user:", error)
//   );

// User.find({ name: "Alice" }, { name: 1, _id: 0 }).then((foundUsers) =>
//   console.log(foundUsers)
// );

// const user = {
//   name: "Alice",
//   password: "ironhack2018",
//   job: "Architect",
//   age: 24,
// };
// User.create(user)
//   .then((user) => console.log("The user is saved and its value is: ", user))
//   .catch((error) =>
//     console.log("An error happened while saving a new user:", error)
//   );

// User.find({ name: /aLiCe/i, age: { $gte: 24 } }).then((foundUser) =>
//   console.log(foundUser)
// );

// User.find({ name: /bob/i }).then((foundUsers) => console.log(foundUsers));

// User.findOne({ name: /bob/i }).then((foundUser) => console.log(foundUser));

// User.findById("654e1749c7df49a5f4c36c1f").then((foundUser) =>
//   console.log(foundUser)
// );

// User.updateMany({ email: /@ironhack\.com/ }, { company: "Ironhack" })
//   .then((updatedUsers) => console.log(updatedUsers))
//   .catch((error) => console.error(error));

// User.updateOne({ name: "Alice" }, { job: "Developer" })
//   .then((updatedUsers) => console.log(updatedUsers))
//   .catch((error) => console.error(error));

// User.deleteOne({ name: "Bob" })
//   .then((resp) => console.log(resp))
//   .catch((err) => console.error(err));

// User.deleteMany({ name: "Alice" })
//   .then((resp) => console.log(resp))
//   .catch((err) => console.error(err));

User.findByIdAndDelete("654e17b38c9243ec6a6d5bc7")
  .then((resp) => console.log(resp))
  .catch((err) => console.error(err));
//
//
//
// create a new folder to hold the app
// create index.js
// run npm init -y in the terminal
// install express, mongoose, nodemon
// git init and add a file called .gitignore and add node_modules to it
// inside index.js require express mongoose
// inside index.js use mongoose to connect to the database :
// mongoose
//   .connect("mongodb://127.0.0.1:27017/examples")
//   .then((x) =>
//     console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
//   )
//   .catch((err) => console.error("Error connecting to mongo", err));
// create database Schema
// const bookSchema = new Schema({
//     name: String,
//     author: String,
//     totalPages: Number
// })
// create database model (collection)
// const Book = mongoose.model("Book", bookSchema);
// use the model to create a new record
