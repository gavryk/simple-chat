import React, { useReducer } from 'react';
import { Join } from './components';
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

  console.log(state);

  return (
    <div className="AppWrapper">
      {!state.joined && <Join onLogin={onLogin} />}
    </div>
  );
}

export default App;
