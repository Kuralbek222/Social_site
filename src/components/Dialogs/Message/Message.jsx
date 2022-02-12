import React, { useState } from "react";

import Styl from "./Message.module.css";

export const Message = (props) => {
  const [state, setstate] = useState();
  const addMessage = () => {
    console.log(props);
    props.addMessage(state);
  };
  const Messages = (props) => {
    return <div className={Styl.dialog}>{props.message}</div>;
  };

  return (
    <div className={Styl.messages}>
      {props.data.dataMessage.map((obj) => {
        return <Messages message={obj.message} key={obj.id} />;
      })}
      <div>
        <textarea onChange={(e) => setstate(e.target.value)}></textarea>
        <button onClick={addMessage}>send message</button>
      </div>
    </div>
  );
};
export default Message;
