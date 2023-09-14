const mongoose = require("mongoose");
const app = require("./app");

const DB_HOST =
  "mongodb+srv://Vikki2Rikki:SuTd1q3yM6cPM1iJ@cluster0.lm2gdxo.mongodb.net/books_reader?retryWrites=true&w=majority";

mongoose.set("strictQuery", true);

mongoose
  .connect(DB_HOST)
  .then(() => app.listen(3030))
  .catch((err) => {
    console.log(err.message);
    process.exit(1);
  });

// app.listen(3000, () => {
//   console.log("Server running. Use our API on port: 3000");
// });

// const mongoose = require("mongoose");

// const DB_HOST =
//   "mongodb+srv://Vikki2Rikki:SuTd1q3yM6cPM1iJ@cluster0.lm2gdxo.mongodb.net/books_reader?retryWrites=true&w=majority";

// mongoose
//   .connect(DB_HOST)
//   .then(() => console.log("Database connect success"))
//   .catch((err) => console.log(err.message));
