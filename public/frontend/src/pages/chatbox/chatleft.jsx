import Chat from "./chat.jsx";
const ChatLeftHeading = () => {
  return (
    <div className="py-3 d-flex w-100 justify-content-around align-items-center  b-white">
      <h1 className="fs-2">Messages</h1>
      <div className="icons">
        <i className="fa-solid px-2 fs-4 fa-pen-to-square"></i>
        <i className="fa-solid fs-4  px-2 fa-ellipsis-vertical"></i>
      </div>
    </div>
  );
};
const ChatSearch = () => {
  return (
    <div className=" b-white h-12_5">
      <input type="text" />
    </div>
  );
};
const ChatLeft = ({ row, setopenedChat, isMobile, setcurrSec }) => {


  return (
    <div className={` chatleft_u b-white h-100`}>
      <ChatLeftHeading />
      <ChatSearch />
      <div className="chats overflow-y-auto " style={{ height: "73%" }}>
        {row.map((user) => {
          return (
            <Chat
              isMobile={isMobile}
              onChange={setopenedChat}
              image={user[0].path}
              name={user.other_user_name}
              last_msg={user.messagebody}
              date={user.messagetime}
              key={user.messagetime}
              id={user.other_user_id}
              setcurrSec={setcurrSec}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ChatLeft;
