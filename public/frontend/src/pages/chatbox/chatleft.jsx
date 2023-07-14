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
    <div className= " b-white h-12_5">
      <form
        action=""
        className="px-3 py-2 search-bar d-flex justify-content-end"
      >
        <input type="search" name="search" pattern=".*\S.*" required />
        <button className="search-btn" type="submit">
          <span>Search</span>
        </button>
      </form>
    </div>
  );
};
const ChatLeft = ({ users, setopenedChat, isMobile, setcurrSec }) => {
  console.log(isMobile);
  return (
    <div className={` chatleft_u b-white h-100`}>
      <ChatLeftHeading />
      <ChatSearch />
      <div className="chats overflow-y-auto " style={{ height: "73%" }}>
        {users.map((user) => {
          return (
            <Chat
              isMobile={isMobile}
              onChange={setopenedChat}
              image={user.img}
              name={user.name}
              last_msg={user.last_msg}
              date={user.date}
              key={user.name}
              setcurrSec={setcurrSec}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ChatLeft;
