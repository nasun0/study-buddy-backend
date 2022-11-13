const express = require("express");
var cors = require("cors");
const app = express();

app.use(cors());

const port = process.env.port || 3030;

let rooms = [
    {
        buildings: "ECSW - Engineering And Computer Science West",
        floorRoom: "1.123",
        available: "true",
    },
    {
        buildings: "ECSW - Engineering And Computer Science West",
        floorRoom: "1.124",
        available: "true",
    },
    {
        buildings: "ECSW - Engineering And Computer Science West",
        floorRoom: "1.125",
        available: "true",
    },
    {
        buildings: "ECSW - Engineering And Computer Science West",
        floorRoom: "1.126",
        available: "true",
    },
];

app.get("/room", (req, res) => {
    console.log(req.query.occupied);
    let room = req.query.room;
    for (let i = 0; i < rooms.length; i++) {
        let curRoom = rooms[i];

        if (curRoom.floorRoom == room) {
            let string = req.query.occupied;
            let available = "";

            if (req.query.occupied == "true") available = "false";
            else available = "true";
            rooms[i].available = available;
        }
    }

    console.log(rooms);
    res.send(req.query.building + " " + req.query.room);
});

app.get("/room_status", (req, res) => {
    res.send(rooms);
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
