process.env.AMBIENTE = "desenvolvimento";
// process.env.AMBIENTE = "producao";

const express = require("express");
const path = require("path");
const port = process.env.AMBIENTE == "desenvolvimento" ? 3333 : 8080;

let initialPath = path.join(__dirname, "public");

let app = express();

app.use(express.static(initialPath));

app.get("/", (req, res) => {
    res.sendFile(path.join(initialPath, "index.html"));
})

app.listen(port, ()=> {
    console.log(`Server start up on port: http://localhost:${port} !`);
})