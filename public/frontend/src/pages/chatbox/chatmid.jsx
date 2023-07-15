/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useState } from "react";
import Message from "./message.jsx";
import { useEffect } from "react";
import ScrollToBottom from "react-scroll-to-bottom";
import EmojiPicker from "emoji-picker-react";
import { getCookie } from "../../helpers/cookies.js";
const ChatMid = ({ messages, isMobile, setcurrSec, socket, openedChat }) => {
  const [message, setMessages] = useState([]);
  const [inputValue, setinputValue] = useState("");
  const [emojiOpened, setemojiOpened] = useState(false);
  useEffect(() => {
    setMessages([...messages]);
  }, [messages]);

  useEffect(() => {
    const recievemsg = async () => {
      await socket.on("recieve_message", (data) => {
        handleMessageRecieve(data);
        console.log("new message", data);
      });
    };

    recievemsg();
  }, [socket]);
  console.log("recieved", messages);

  const handleMessageRecieve = (newmsg) => {
    const updatedMessages = [...message];
    updatedMessages.push(newmsg);
    setMessages(updatedMessages);
  };

  const sendMessage = async () => {
    const id = JSON.parse(getCookie("logindata")).userId;
    const users = [id, openedChat].sort();
    const data = {
      messagebody: inputValue,
      messagestatus: "delivered",
      receiver: openedChat,
      room: parseInt(users.join("")),
      user1: users[0],
      user2: users[1],
      sender: id,
    };
    await socket.emit("send_message", data);
    setMessages([...message, data]);
    setinputValue("");
  };

  console.log("mesa", message);
  return (
    <div
      className={`  position-relative chatmain_u w-50 h-100 flex-grow-1 b-white`}
    >
      <div className="py-custom w-100 h-12_5  d-flex align-items-center justify-content-between b-white">
        <div className="d-flex justify-content-start align-items-center mx-4">
          {isMobile && (
            <div>
              <button
                className="me-3 border-0 bg-light"
                onClick={() => {
                  setcurrSec("chats");
                }}
              >
                <i className="fs-4 fa-solid fa-arrow-left"></i>
              </button>
            </div>
          )}
          <img className="rounded-circle upimage" src={``} alt="" />

          <div
            onClick={() => {
              setcurrSec("chatinfo");
            }}
            style={{ cursor: "pointer" }}
            className="d-flex flex-column justify-content-center align-items-start  mx-4"
          >
            <h4 className="d-inline-block m-0">{}</h4>
            <p className="d-inline-block mb-2">is Typing...</p>
          </div>
        </div>
        <div className="w-25 d-flex justify-content-center align-items-center"></div>
      </div>
      <div className="messages overflow-y-scroll">
        <ScrollToBottom className="message-container">
          {message.map((msg) => (
            <Message
              key={Math.random()}
              body={msg.messagebody}
              senderid={msg.sender}
            />
          ))}
        </ScrollToBottom>
      </div>
      <div className="messageinput h-12_5  w-100 position-absolute">
        <div className="d-flex m-3  rounded-pill bg-midnight-green">
          <input
            placeholder="Type here..."
            type="text"
            className="w-75 text-white"
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
            <button onClick={sendMessage} className="bg-transparent border-0">
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
