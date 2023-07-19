import { checkCookieExists, getCookie } from "../helpers/cookies";

export const postIdea = async ({ basicinfo, contentinfo, setting }) => {
  if (checkCookieExists("logindata")) {
    const data = {
      ideaTitle: basicinfo.title,
      requiredAmount: basicinfo.requiredAmount,
      ideaTagline: basicinfo.tagline,
      tags: basicinfo.tags,
      cardDescription: basicinfo.cardDescription ?? "",
      categoryName: basicinfo.category,
      visiblity: setting.visiblity,
      detailedDescription: contentinfo.description,
      youtubeId: contentinfo.videoid,
      faqs: contentinfo.faqs,
      images: [...contentinfo.images,...basicinfo.cardImage],
      facebookLink: setting.facebookLink,
      twitterLink: setting.twitterLink,
      instaLink: setting.instaLink,
      otherLink: basicinfo.otherLink ?? "",
    };
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${JSON.parse(getCookie("logindata")).token}`,
      },
      body: JSON.stringify(data),
    };

    const res = await fetch(
      `http://localhost:3000/ideavault/postidea`,
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
