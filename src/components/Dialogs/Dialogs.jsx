import React from "react";
import Styl from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import { Routes, Route } from "react-router-dom";

const Dialogs = (store) => {
  console.log(store);
  let dataWithUser = store.store.dataWithUser;
  let dataMessage = store.store;

  return (
    <div className={Styl.dialogs}>
      <DialogItem data={dataWithUser} />
      <Message data={dataMessage} addMessage={store.addMessage} />
    </div>
  );
};

export default Dialogs;
