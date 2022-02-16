const express = require('express');

const app = express();
const server = require('http').createServer(app);
const io = require("socket.io")(server);

const PORT = process.env.PORT || 9999;

app.use(express.json());

const rooms = new Map();

app.get('/rooms', (req, res) => {
    res.json(rooms);
});

app.post("/rooms", (req, res) => {
  const { roomId, userName } = req.body;
  if (!rooms.has(roomId)) {
    rooms.set(
      roomId,
      new Map([
        ["users", new Map()],
        ["messages", []],
      ])
    );
  }
  res.send();
});

io.on("connection", (socket) => {
  socket.on("ROOM:JOIN", ({ roomId, userName }) => {
    socket.join(roomId);
    rooms.get(roomId).get("users").set(socket.id, userName);
    const users = [...rooms.get(roomId).get("users").values()];
    socket.broadcast.to(roomId).emit("ROOM:JOINED", users);
  });

  console.log("user connected", socket.id);
});

server.listen(PORT, (err) => {
    if (err) {
        throw Error(err);
    }
    console.log(`Server is Started ${PORT}`);
})