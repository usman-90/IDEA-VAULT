/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import { useState } from "react";
const Chat = ({ image, name, id, last_msg, date, onChange, setcurrSec }) => {
  const formatTime = (t) => {
    const timestamp = t;

    const options = { hour: "numeric", minute: "2-digit" };
    const time = new Date(timestamp).toLocaleTimeString([], options);

    const currentDate = new Date().toLocaleDateString();
    const messageDate = new Date(timestamp).toLocaleDateString();

    let formattedTime;
    if (currentDate === messageDate) {
      formattedTime = time;
    } else {
      formattedTime = new Date(timestamp).toLocaleDateString();
    }
    return formattedTime;
  };

  const handleChange = () => {
    onChange(id);
    setcurrSec("messages");
  };
  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events

    <div
      className="w-100 chat_u d-flex b-white"
      onFocus={handleChange}
      onClick={handleChange}
    >
      <div className="w-25 d-flex justify-content-center align-items-center">
        <img className="rounded-circle w-75 h-75" src={image} alt="" />
      </div>
      <div className="mt-2 w-50 flex-grow-1 d-flex justify-content-center align-items-start flex-column">
        <h4 className="d-inline-block">{name}</h4>
        <p className={`${ "fw-bold"} d-inline-block`}>
          {last_msg}
        </p>
      </div>
      <div className="w-25 d-flex flex-column justify-content-start align-items-center">
        <span className="my-2">
          {isNaN(date) ?  formatTime(date) : "New!" }
        </span>
        <span className={`${"d-none" } msgread_u my-1`}></span>
      </div>
    </div>
  );
};

export default Chat;
