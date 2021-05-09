require("./src/models/User");
require("./src/models/Post");
require("./src/models/Comment");
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const userRoutes = require("./src/routes/userRoutes");
const postRoutes = require("./src/routes/postRoutes");
const commentRoutes = require("./src/routes/commentRoutes");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(userRoutes);
app.use(postRoutes);
app.use(commentRoutes);

const mongoUri =
  "mongodb+srv://akash:rootpassword@cluster0.ejfpn.mongodb.net/social?retryWrites=true&w=majority";
if (!mongoUri) {
  throw new Error(
    `MongoURI was not supplied.  Make sure you watch the video on setting up Mongo DB!`
  );
}

mongoose.connect(mongoUri, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});
mongoose.connection.on("connected", () => {
  console.log("Connected to mongo instance");
});
mongoose.connection.on("error", (err) => {
  console.error("Error connecting to mongo", err);
});

app.get("/", (req, res) => {
  res.send(`Welcome to social`);
});

app.listen(3000, () => {
  console.log("Listening on port 3000");
});
