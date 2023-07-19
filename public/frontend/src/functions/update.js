import { checkCookieExists } from "../helpers/cookies";
import { getCookie } from "../helpers/cookies";

export const postUpdate = async (data) => {
  if (checkCookieExists("logindata")) {
    const body = {
      updateDescription: data.description,
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
      `http://localhost:3000/ideavault/postideaupdates/${data.ideaid}`,
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
