/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useEffect, useState, useRef } from "react";
import ChatLeft from "./chatleft.jsx";
import ChatMid from "./chatmid.jsx";
import ChatRight from "./chatright.jsx";
import "./chatbox.css";
const users = [
  {
    id: 1,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-TYzQNtDoHWPJTpL7JqtG9rSWs3Aie7-ZU_TSvXhP&s",
    name: "usmanq",
    last_msg: "hello, how are you",
    date: `${new Date().getDay()}-${new Date().getMonth()}-${new Date().getFullYear()}`,
    title: "best idea ever",
  },
  {
    id: 2,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-TYzQNtDoHWPJTpL7JqtG9rSWs3Aie7-ZU_TSvXhP&s",
    name: "usmanw",
    last_msg: "hello, how are you",
    date: `${new Date().getDay()}-${new Date().getMonth()}-${new Date().getFullYear()}`,
    title: "best idea ever",
  },
  {
    id: 3,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-TYzQNtDoHWPJTpL7JqtG9rSWs3Aie7-ZU_TSvXhP&s",
    name: "usmane",
    last_msg: "hello, how are you",
    date: `${new Date().getDay()}-${new Date().getMonth()}-${new Date().getFullYear()}`,
    title: "best idea ever",
  },
  {
    id: 4,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-TYzQNtDoHWPJTpL7JqtG9rSWs3Aie7-ZU_TSvXhP&s",
    name: "usmanr",
    last_msg: "hello, how are you",
    date: `${new Date().getDay()}-${new Date().getMonth()}-${new Date().getFullYear()}`,
    title: "best idea ever",
  },
  {
    id: 5,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-TYzQNtDoHWPJTpL7JqtG9rSWs3Aie7-ZU_TSvXhP&s",
    name: "usmant",
    last_msg: "hello, how are you",
    date: `${new Date().getDay()}-${new Date().getMonth()}-${new Date().getFullYear()}`,
    title: "best idea ever",
  },
  {
    id: 6,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-TYzQNtDoHWPJTpL7JqtG9rSWs3Aie7-ZU_TSvXhP&s",
    name: "usmany",
    last_msg: "hello, how are you",
    date: `${new Date().getDay()}-${new Date().getMonth()}-${new Date().getFullYear()}`,
    title: "best idea ever",
  },
  {
    id: 7,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-TYzQNtDoHWPJTpL7JqtG9rSWs3Aie7-ZU_TSvXhP&s",
    name: "usmani",
    last_msg: "hello, how are you",
    date: `${new Date().getDay()}-${new Date().getMonth()}-${new Date().getFullYear()}`,
    title: "best idea ever",
  },
];
const messages = [
  {
    senderid: 1,
    recieverid: 2,
    body: "wassup ?",
  },
  {
    senderid: 1,
    recieverid: 2,
    body: "wassup ?",
  },
  {
    senderid: 1,
    recieverid: 2,
    body: "wassup ?",
  },
  {
    senderid: 2,
    recieverid: 1,
    body: "wassup ?",
  },
  {
    senderid: 1,
    recieverid: 2,
    body: "wassup ?",
  },
  {
    senderid: 2,
    recieverid: 1,
    body: "wassup ?",
  },
  {
    senderid: 2,
    recieverid: 1,
    body: "wassup ?",
  },
  {
    senderid: 2,
    recieverid: 1,
    body: "wassup ?",
  },
  {
    senderid: 1,
    recieverid: 2,
    body: "wassup ?",
  },
  {
    senderid: 1,
    recieverid: 2,
    body: "wassup ?",
  },
];

const Chatbox = () => {
  const chatcontRef = useRef(null);
  const [height, setheight] = useState(null);
  const [openedChat, setopenedChat] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const [currUser, setcurrUser] = useState([]);
  const [currSec, setcurrSec] = useState("chats");
  const handleheight = () => {
    setheight(window.innerHeight - chatcontRef.current.offsetTop - 10);
  };
  useEffect(() => {
    handleheight();
    window.addEventListener("resize", handleheight);
    return () => {
      window.removeEventListener("resize", handleheight);
    };
  }, []);
  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 600px)");

    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  useEffect(() => {
    chatcontRef.current.style.height = `${height}px`;
  }, [height]);

  useEffect(() => {
    let curr = users.filter((user) => {
      return user.name == openedChat;
    });
    setcurrUser(curr);
    console.log("currUser", currUser);
  }, [openedChat]);

  return (
    <div className="m-0  p-0 chatcont_u d-flex " ref={chatcontRef}>
      {(!isMobile || (isMobile && currSec == "chats")) && (
        <ChatLeft
          users={users}
          setopenedChat={setopenedChat}
          isMobile={isMobile}
          setcurrSec={setcurrSec}
        />
      )}
      {(!isMobile || (isMobile && currSec == "messages")) && (
        <ChatMid
          messages={messages}
          currUser={currUser}
          isMobile={isMobile}
          setcurrSec={setcurrSec}
        />
      )}
      {(!isMobile || (isMobile && currSec == "chatinfo")) && (
        <ChatRight currUser={currUser} setcurrSec={setcurrSec} isMobile={isMobile}/>
      )}
    </div>
  );
};

export default Chatbox;
