import React from 'react';
import io from 'socket.io-client';

const socket = io("http://localhost:9999/");

const App = () => {
  return (
    <div className="App">
      <h1>Hello</h1>
    </div>
  );
}

export default App;
