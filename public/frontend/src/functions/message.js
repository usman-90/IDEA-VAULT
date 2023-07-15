import { getCookie } from "../helpers/cookies";

export const fetchChat = async () => {
  const options = {
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${JSON.parse(getCookie("logindata")).token}`,
    },
  };
  const res = await fetch("http://localhost:3000/ideavault/chatbox", options);
  if (!res.ok) {
    console.log("ops error");
  }

  return res.json();
};

export const getMessages = async ( {queryKey} ) => {

  console.log(queryKey);
  const data = queryKey[1];
  console.log(data)
  const options = {
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${JSON.parse(getCookie("logindata")).token}`,
    },
  };
  const res = await fetch(
    `http://localhost:3000/ideavault/getmessages/${data.id}/${data.level}`,
    options
  );

  if (!res.ok) {
    console.log("ops error");
  }
  const json = await res.json();
  console.log(json);
  return json;
};
