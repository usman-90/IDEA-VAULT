import { checkCookieExists, getCookie } from "../helpers/cookies";

export const getUserInfo = async ({ queryKey }) => {
  console.log(JSON.parse(getCookie("logindata")));
  const id = queryKey[1];
  const res = await fetch(`http://localhost:3000/ideavault/getuserinfo/${id}`);
  if (!res.ok) {
    console.log("ok");
  }
  return res.json();
};

export const updateuserinfo = async (data) => {
  console.log(data);
  if (checkCookieExists("logindata")) {
    const body = {
      country: data.country ?? "",
      city: data.city ?? "",
      state: data.state ?? "",
      contactNo: data.contactno ?? "",
      profession: data.profession ?? "",
      organizationType: data.organizationtype ?? "",
      bio: data.bio ?? "",
      name: data.name ?? "",
      lastName: data.lastname ?? "",
      facebookLink: data.facebooklink ?? "",
      twitterLink: data.twitterlink ?? "",
      linkedinLink: data.linkedinLink ?? "",
      instaLink: data.instalink ?? "",
      otherLink: "",
      type: "profile" ?? "",
      path: data.path ?? "",
    };

    const options = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${JSON.parse(getCookie("logindata")).token}`,
      },
      body: JSON.stringify(body),
    };

    const res = await fetch(
      `http://localhost:3000/ideavault/updateuserinfo`,
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
