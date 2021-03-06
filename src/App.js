import axios from "axios";
import React, { useEffect, useReducer } from "react";
import { Chat, Join } from "./components";
import reducer from "./reducer";
import socket from "./socket";

const App = () => {
  const [state, dispatch] = useReducer(reducer, {
    joined: false,
    roomId: null,
    userName: null,
    users: [],
    messages: [],
  });

  const setUsers = (users) => {
    dispatch({
      type: "SET_USERS",
      payload: users,
    });
  };

  const setAddMessage = (message) => {
    dispatch({
      type: "NEW_MESSAGE",
      payload: message,
    });
  };

  const onLogin = async (obj) => {
    dispatch({
      type: "JOINED",
      payload: obj,
    });
    socket.emit("ROOM:JOIN", obj);
    const { data } = await axios.get(`/rooms/${obj.roomId}`);
    dispatch({
      type: "SET_DATA",
      payload: data
    })
  };

  useEffect(() => {
    socket.on("ROOM:SET_USERS", setUsers);
    socket.on("ROOM:NEW_MESSAGE", setAddMessage);
  }, []);

  window.socket = socket;

  return (
    <div className="AppWrapper">
      {!state.joined ? <Join onLogin={onLogin} /> : <Chat {...state} onAddMessage={setAddMessage}/>}
    </div>
  );
};

export default App;
