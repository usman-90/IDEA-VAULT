/* eslint-disable jsx-a11y/no-static-element-interactions */
import { useState } from "react";
const Chat = ({ image, name, last_msg, date, onChange }) => {
  const handleChange = () => {
    onChange(name);
    setisRead(true);
  };
  const [isRead, setisRead] = useState(false);
  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events
    <div
      className="w-100 chat_u d-flex b-red"
      onFocus={handleChange}
      onClick={handleChange}
    >
      <div className="w-25 d-flex justify-content-center align-items-center">
        <img className="rounded-circle w-75 h-75" src={image} alt="" />
      </div>
      <div className="mt-2 w-50 flex-grow-1 d-flex justify-content-center align-items-start flex-column">
        <h4 className="d-inline-block">{name}</h4>
        <p className={`${isRead ? "" : "fw-bold"} d-inline-block`}>
          {last_msg}
        </p>
      </div>
      <div className="w-25 d-flex flex-column justify-content-start align-items-center">
        <span className="my-2">{date}</span>
        <span className={`${isRead ? "d-none" : ""} msgread_u my-1`}></span>
      </div>
    </div>
  );
};

export default Chat;
