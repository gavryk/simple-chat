import React from 'react';
import style from './Chat.module.scss';
import { Button } from "@mui/material";

const Chat = () => {
  return (
    <div className={style.chatWrapper}>
      <div className={style.chatSidebar}>
        <h4>Online (10)</h4>
        <ul className={style.users}>
          <li>Oleg</li>
          <li>Oleg</li>
          <li>Oleg</li>
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
            value="Message"
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