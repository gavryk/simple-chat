import React from 'react';
import io from 'socket.io-client';
import { Join } from './components';

const App = () => {

  const connectSocket = () => {
    io("http://localhost:9999/");
  }

  return (
    <div className="AppWrapper">
        <Join />
    </div>
  );
}

export default App;
