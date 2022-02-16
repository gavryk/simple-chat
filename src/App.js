import React, { useEffect, useReducer } from 'react';
import { Chat, Join } from './components';
import reducer from './reducer';
import socket from './socket';



const App = () => {
  const [state, dispatch] = useReducer(reducer, {
    joined: false,
    roomId: null,
    userName: null
  });

  const onLogin = (obj) => {
    dispatch({
      type: "JOINED",
      payload: obj
    });
    socket.emit("ROOM:JOIN", obj);
  }

  useEffect(() => {
    socket.on("ROOM:JOINED", (users) => {
      console.log(users);
    });
  }, [])

  window.socket = socket;

  return (
    <div className="AppWrapper">
      {!state.joined ? <Join onLogin={onLogin} /> : <Chat />}
    </div>
  );
}

export default App;
