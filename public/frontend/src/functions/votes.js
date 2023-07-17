import { getCookie } from "../helpers/cookies";

export const upvote = async (ideaid) => {
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${JSON.parse(getCookie("logindata")).token}`,
    },
  };

  const res = fetch(
    `http://localhost:3000/ideavault/upvote/${ideaid}`,
    options
  );
  if (!res.ok) {
    console.log("ops error");
  }
  const json = (await res).json();
  return json;
};

export const downvote = async (ideaid) => {
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${JSON.parse(getCookie("logindata")).token}`,
    },
  };

  const res = fetch(
    `http://localhost:3000/ideavault/downvote/${ideaid}`,
    options
  );
  if (!res.ok) {
    console.log("ops error");
  }
  const json = (await res).json();
  return json;
};

export const getVotes = async (ideaid) => {
  const res = fetch(`http://localhost:3000/ideavault/getvotes/${ideaid}`);
  if (!res.ok) {
    console.log("ops error");
  }
  const json = (await res).json();
  return json;
};

export const getIdeasByUserId = async ({ queryKey }) => {
  const userid = queryKey[1];

  const res = await fetch(
    `http://localhost:3000/ideavault/getideasbyuserid/${userid}`
  );
  if (!res.ok) {
    console.log("ops error");
  }

  return res.json();
};
