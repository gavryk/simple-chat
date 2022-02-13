import React from "react";
import axios from "axios";
import { TextField, Button } from "@mui/material";
import socket from "../../socket";

import style from './Join.module.scss';

const Join = ({onLogin}) => {
  const [roomId, setRoomId] = React.useState("");
  const [userName, setUserName] = React.useState("");
  const [isLoading, setLoading] = React.useState(false);

//   const onEnter = async () => {
//     if (!roomId || !userName) {
//       return alert("Wrong data");
//     }
//     const obj = {
//       roomId,
//       userName,
//     };
//     setLoading(true);
//     await axios.post("/rooms", obj);
//     onLogin(obj);
//   };

  return (
    <div className={style.joinBlock}>
      <div className={style.joinForm}>
        <div className={style.joinTitle}>
          <h2>Join The Chat</h2>
        </div>
        <TextField
          id="outlined-room"
          label="Room ID"
          variant="outlined"
          value={roomId}
          // onChange={(e) => setRoomId(e.target.value)}
        />
        <TextField
          id="outlined-name"
          label="Your Name"
          variant="outlined"
          value={userName}
          // onChange={(e) => setUserName(e.target.value)}
        />
        <Button
          variant="contained"
          disabled={isLoading}
          size="large"
          // onClick={onEnter}
        >
          {isLoading ? "Entering..." : "Enter"}
        </Button>
      </div>
    </div>
  );
};

export default Join;