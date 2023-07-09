/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useState } from "react";
import Message from "./message.jsx";
import { useRef, useEffect } from "react";
import EmojiPicker from "emoji-picker-react";
const ChatMid = ({ messages, currUser, isMobile }) => {
  const messageRef = useRef();
  const scrollToBottom = () => {
    messageRef.current.scrollTop = messageRef.current.scrollHeight;
  };
  useEffect(() => {
    scrollToBottom();
  }, []);
  const [inputValue, setinputValue] = useState("");
  const [emojiOpened, setemojiOpened] = useState(false);
  const [dropdownExpanded, setdropdownExpanded] = useState(false);
  return (
    <div
      className={`${
        isMobile && currUser ? "" : ""
      } position-relative chatmain_u w-50 h-100 flex-grow-1 b-red`}
    >
      <div className="py-custom w-100 h-12_5  d-flex align-items-center justify-content-between b-red">
        <div className="d-flex justify-content-start align-items-center mx-4">
          <img
            className="rounded-circle upimage"
            src={`${currUser.length != 0 ? `${currUser[0].img}` : ""}`}
            alt=""
          />
          <div className="d-flex flex-column justify-content-center align-items-start  mx-4">
            <h4 className="d-inline-block m-0">
              {currUser.length == 1 ? `${currUser[0].name}` : ""}
            </h4>
            <p className="d-inline-block mb-2">is Typing...</p>
          </div>
        </div>
        <div className="w-25 d-flex justify-content-center align-items-center">
          <div className="dropdown">
            <p
              className="btn btn-success "
              data-bs-toggle="dropdown"
              aria-expanded="false"
              onClick={() => {
                setdropdownExpanded(!dropdownExpanded);
              }}
            >
              <i className="fa-solid fs-4  px-2 fa-ellipsis-vertical"></i>
            </p>

            <ul
              className={`dropdown-menu ${
                dropdownExpanded ? "d-block" : "d-none"
              }`}
            >
              <li>
                <a className="dropdown-item" href="/">
                  Mark as unread
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="/">
                  Delete
                </a>
              </li>
              <li>
                <a className="dropdown-item text-danger" href="/">
                  Report
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div ref={messageRef} className="messages overflow-y-scroll">
        {messages.map((message) => {
          return (
            <Message
              key={Math.random()}
              body={message.body}
              senderid={message.senderid}
            />
          );
        })}
      </div>

      <div className="messageinput h-12_5  w-100 position-absolute">
        <div className="d-flex m-3  rounded-pill">
          <input
            placeholder="Type here..."
            type="text"
            className="w-75"
            value={inputValue}
            onChange={(e) => {
              setinputValue(e.target.value);
            }}
          />
          <div className="d-flex">
            <div className="wrapper mx-2">
              <input type="file" id="file-input" />
              <label htmlFor="file-input">
                <i className="fs-4 fa fa-paperclip fa-2x"></i>
                <span></span>
              </label>
              <i className="fa fa-times-circle remove"></i>
            </div>
            <button className="bg-transparent border-0">
              <i className="text-light mx-2 fs-4 cursor-pointer fa-solid fa-paper-plane"></i>
            </button>

            <i className="fs-4 mx-2 fa-regular fa-face-smile emojibutton text-light">
              <div
                className="em"
                onClick={() => {
                  setemojiOpened(!emojiOpened);
                }}
              ></div>
              <div className={`${emojiOpened ? "d-block" : "d-none"} emoji`}>
                <EmojiPicker
                  onEmojiClick={(emojiObject) => {
                    console.log(emojiObject);
                    setinputValue((prevValue) => prevValue + emojiObject.emoji);
                  }}
                />
              </div>
            </i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatMid;
