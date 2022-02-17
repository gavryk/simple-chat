import React from 'react';
import style from './Chat.module.scss';
import { Button } from "@mui/material";

const Chat = ({users, messages}) => {
  return (
    <div className={style.chatWrapper}>
      <div className={style.chatSidebar}>
        <h4>Online ({users.length})</h4>
        <ul className={style.users}>
          {
            users.map((user, index) => {
              return (
                <li key={`${user}_${index}`}>{user}</li>
              )
            })
          }
        </ul>
      </div>
      <div className={style.chatMessages}>
        <div className={style.messages}>
          {
            messages.map((message, index) => {
              return (
                <div key={`${message.userName}_${index}`} className={style.message}>
                  <p>{message.text}</p>
                  <div>
                    <span>{message.userName}</span>
                  </div>
                </div>
              )
            })
          }
        </div>
        <form>
          <textarea
            defaultValue="Message"
            className="form-control"
            rows="3"
          ></textarea>
          <div className={style.sendBtn}>
            <Button variant="contained" size="large">
              Send
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Chat