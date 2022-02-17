import React from 'react';
import style from './Chat.module.scss';
import { Button } from "@mui/material";

const Chat = ({users}) => {
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
          <div className={style.message}>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere,
              pariatur amet minus possimus tempore itaque omnis veritatis
              reprehenderit quae est blanditiis atque perspiciatis deleniti fuga
              inventore saepe beatae! Distinctio, tempora?
            </p>
            <div>
              <span>Oleg</span>
            </div>
          </div>
          <div className={style.message}>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere,
              pariatur amet minus possimus tempore itaque omnis veritatis
              reprehenderit quae est blanditiis atque perspiciatis deleniti fuga
              inventore saepe beatae! Distinctio, tempora?
            </p>
            <div>
              <span>Oleg</span>
            </div>
          </div>
          <div className={style.message}>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere,
              pariatur amet minus possimus tempore itaque omnis veritatis
              reprehenderit quae est blanditiis atque perspiciatis deleniti fuga
              inventore saepe beatae! Distinctio, tempora?
            </p>
            <div>
              <span>Oleg</span>
            </div>
          </div>
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