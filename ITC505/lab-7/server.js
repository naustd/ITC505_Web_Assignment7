const express = require("express");
const logger = require("morgan");
const path = require("path");
const server = express();
server.use(express.urlencoded({ extended: true }));
server.use(logger("dev"));
// app.use(express.static("public"));
// Routes
server.get("/do_a_random", (req, res) => {
  res.send(`Your number is: ${Math.floor(Math.random() * 100) + 1}`);
});
server.get("/ITC505/lab-4", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});
// Setup static page serving for all the pages in "public"
const publicServedFilesPath = path.join(__dirname, "public");
server.use(express.static(publicServedFilesPath));
// The server uses port 80 by default unless you start it with the extra
// command line argument 'local' like this:
//       node server.js local
let port = 8080;
// if (process.argv[2] === "local") {
//   port = 8080;
// }
server.listen(port, () => console.log("Ready on localhost!"));
