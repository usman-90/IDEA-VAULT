import { checkCookieExists } from "../helpers/cookies";
import { getCookie } from "../helpers/cookies";

export const saveMessages = async (data) => {
  console.log(data);
  if (checkCookieExists("logindata")) {
  
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${JSON.parse(getCookie("logindata")).token}`,
      },
      body: JSON.stringify({messages:data}),
    };

    const res = await fetch(
      `http://localhost:3000/ideavault/savemessages`,
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
