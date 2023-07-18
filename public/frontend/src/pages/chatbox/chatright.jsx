import { useQuery } from "@tanstack/react-query";
import ChatSideInfo from "./chatsideinfo.jsx";
import { getUserInfo } from "../../functions/user.js";

const ChatRight = ({ user, currSec, setcurrSec, isMobile }) => {
  let userData;
  if (user[0]) {
    const userDataRes = useQuery(
      ["getuserdata", user[0]?.other_user_id],
      getUserInfo
    );
    if (userDataRes.isLoading) {
      console.log("ops error");
    }
    userData = userDataRes?.data?.row[0];
  }
  console.log(userData);

  return (
    <div className={`  chatright_u h-100 w-25 b-white`}>
      {
        <div className="h-50">
        <div className="h-12_5 my-2">
          <h2 className="mx-4">
            {isMobile && (
              <button
                className="border-0 fs-3"
                onClick={() => {
                  setcurrSec("messages");
                }}
              >
                <i className="fa-solid fa-arrow-left"></i>
              </button>
            )}
            {`About ${user[0]?.other_user_name ?? ""}`}
          </h2>
        </div>
        <ChatSideInfo field={"Country"} value={userData?.country} />
        <ChatSideInfo field={"City"} value={userData?.city} />
        <ChatSideInfo field={"State"} value={userData?.state} />
        <ChatSideInfo field={"Profession"} value={userData?.profession} />
        <ChatSideInfo field={"Linked In"} value={userData?.linkedinlink} />
      </div> }
      <div className="h-49 overflow-y-auto"></div>
    </div>
  );
};

export default ChatRight;
