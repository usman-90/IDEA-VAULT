import { checkCookieExists } from "../helpers/cookies";
import { getCookie } from "../helpers/cookies";
export const setVisiblity = async (data) => {
  if (checkCookieExists("logindata")) {
    const body = {
      ideaId: data.ideaid,
      userId: data.userid,
    };
console.log(body)
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${JSON.parse(getCookie("logindata")).token}`,
      },
      body: JSON.stringify(body),
    };

    const res = await fetch(
      `http://localhost:3000/ideavault/setvisiblity`,
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



export const checkUserVisiblity = async ({ queryKey }) => {
  try{

    const userid = queryKey[1];
    const ideaid = queryKey[2];
    
    const res = await fetch(
      `http://localhost:3000/ideavault/checkspecificvisiblity/${userid}/${ideaid}`
      );
      return res;
    }
    catch (error) {
      console.error("Error:", error);
    }
};
