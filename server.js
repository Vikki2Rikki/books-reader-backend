const mongoose = require("mongoose");

const app = require("./app");

const { DB_HOST, PORT = 3030 } = process.env;

// mongoose.set("strictQuery", true);

mongoose
  .connect(DB_HOST)
  .then(() => {
    console.log("Database connaction");
    app.listen(PORT);
  })
  .catch((error) => {
    console.log(error.message);
    process.exit(1);
  });
