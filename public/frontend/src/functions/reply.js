import { checkCookieExists } from "../helpers/cookies";
import { getCookie } from "../helpers/cookies";

export const postReply = async (data) => {
    if (checkCookieExists("logindata")) {
        
        const body = {
          replyContent: data.replyContent,
          commentid:data.commentid
        };

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${JSON.parse(getCookie("logindata")).token}`,
      },
      body: JSON.stringify(body),
    };

    const res = await fetch(
      `http://localhost:3000/ideavault/postreply`,
      options
    );

    if (!res.ok) {
      console.log("ops");
    }

    const json = await res.json();

    return json;
  } else {
    return "cookie not found";
  }
}

export const likeComment = async (commentid) => {
    if (checkCookieExists("logindata")) {

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${JSON.parse(getCookie("logindata")).token}`,
      },
    };

    const res = await fetch(
      `http://localhost:3000/ideavault/likecomment/${commentid}`,
      options
    );

    if (!res.ok) {
      console.log("ops");
    }

    const json = await res.json();

    return json;
  } else {
    return "cookie not found";
  }
} 