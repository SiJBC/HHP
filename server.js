const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");
var path = require("path");
const users = require("./routes/api/users");
const Ailments = require("./routes/api/Ailments")
const app = express();

// Bodyparser middleware
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(bodyParser.json());

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}


// DB Config
const db = require("./config/keys").mongoURI;

// Connect to MongoDB
mongoose
  .connect(
    db,
    { useNewUrlParser: true }
  )
  .then(() => console.log("MongoDB successfully connected"))
  .catch(err => console.log(err));

// Passport middleware
app.use(passport.initialize());

// Passport config
require("./config/passport")(passport);

// Routes
app.use("/api/users", users);
app.use("/api/Ailments", Ailments );

app.get('*', (request, response) => {
	response.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});

// app.get('*', function (req, res) {
//   const index = path.join(__dirname, 'build', 'index.html');
//   res.sendFile(index);
// });

const port = process.env.PORT || 5000;

app.listen(port, () => 
console.log(`Server up and running on port ${port} !`));
