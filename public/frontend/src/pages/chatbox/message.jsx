import { getCookie } from "../../helpers/cookies";
const Message = ({ body, senderid }) => {
  let userid = JSON.parse(getCookie("logindata")).userId;
  console.log(userid);
  console.log(senderid);
  return (
    <div
      className={`${
        userid == senderid ? "justify-content-end" : "justify-content-start"
      } w-100 message_u `}
    >
      <div
        className={`${
          userid == senderid ? `senderradius_u ` : "recieverradius_u"
        } message_u_div`}
      >
        <p>{body}</p>
      </div>
    </div>
  );
};

export default Message;
