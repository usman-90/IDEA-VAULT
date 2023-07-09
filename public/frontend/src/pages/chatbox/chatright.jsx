import ChatSideInfo from "./chatsideinfo.jsx";
import IdeaSideCard from "./ideasidecard.jsx";

const ChatRight =({currUser})=> {
    return (
        <div className="chatright_u h-100 w-25 b-red">
        <div className="h-50">
          <div className="h-12_5 my-2">
            <h2 className="mx-4"> {currUser.length != 0 ? `About ${currUser[0].name}` : ""}</h2>
          </div>
          <ChatSideInfo field={"From"} value={"Pakistan"} />
          <ChatSideInfo field={"From"} value={"Pakistan"} />
          <ChatSideInfo field={"Data"} value={"Blah"} />
          <ChatSideInfo field={"Some Other Data"} value={"Blah Blah "} />
          <ChatSideInfo field={"Laugh"} value={"Hahahahha"} />
        </div>
        <div className="h-49 overflow-y-auto">
          {currUser.map((user) => {
            return (
              <IdeaSideCard
                image={user.img}
                title={user.title}
                username={user.name}
                key={user.id}
              />
            );
          })}
        </div>
      </div>
    )
}

export default ChatRight;