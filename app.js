const express = require("express");
var cors = require("cors");
const app = express();

app.use(cors());

const port = process.env.port || 3030;

let rooms = {
    ecsw: {
        1.123: "false",
        1.124: "false",
        1.125: "false",
        1.126: "false",
    },
};
app.get("/room", (req, res) => {
    console.log(req.query.occupied);
    rooms[req.query.building][req.query.room] = req.query.occupied;
    console.log(rooms);
    res.send(req.query.building + " " + req.query.room);
});

app.get("/room_status", (req, res) => {
    res.send(rooms);
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
