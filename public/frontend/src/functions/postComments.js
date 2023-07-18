import { getCookie,checkCookieExists } from "../helpers/cookies";

export const postComment = async (data) => {
    if (checkCookieExists("logindata")) {
        
        const body = {
          content: data.content,
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
      `http://localhost:3000/ideavault/postcomment/${data.ideaid}`,
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
};
