import React, { useState } from 'react';
import style from './Chat.module.scss';
import { Button } from "@mui/material";
import socket from '../../socket';

const Chat = ({users, messages, userName, roomId}) => {
  const [messageValue, setMessageValue] = useState('');

  const onSendMessage = () => {
    socket.emit('ROOM:NEW_MESSAGE', {
      userName,
      roomId,
      text: messageValue,
    });
    setMessageValue('');
  }

  return (
    <div className={style.chatWrapper}>
      <div className={style.chatSidebar}>
        <h4 style={{marginBottom: 20}} >Room: {roomId}</h4>
        <h4>Online ({users.length})</h4>
        <ul className={style.users}>
          {users.map((user, index) => {
            return <li key={`${user}_${index}`}>{user}</li>;
          })}
        </ul>
      </div>
      <div className={style.chatMessages}>
        <div className={style.messages}>
          {messages.map((message, index) => {
            return (
              <div
                key={`${message.userName}_${index}`}
                className={style.message}
              >
                <p>{message.text}</p>
                <div>
                  <span>{message.userName}</span>
                </div>
              </div>
            );
          })}
        </div>
        <form>
          <textarea
            value={messageValue}
            className="form-control"
            onChange={(e) => setMessageValue(e.target.value)}
            rows="3"
          ></textarea>
          <div className={style.sendBtn}>
            <Button variant="contained" size="large" onClick={onSendMessage}>
              Send
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Chat