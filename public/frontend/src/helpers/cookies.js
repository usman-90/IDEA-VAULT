// Function to set a cookie
export const setCookie = (name, value) => {
  const expires = new Date("9999-12-12");
  document.cookie = `${name}=${encodeURIComponent(
    value
  )};expires=${expires.toUTCString()};path=/`;
};

export const getCookie = (name) => {
  const cookies = document.cookie
    .split(";")
    .map((cookie) => cookie.trim().split("="))
    .reduce(
      (acc, [key, value]) => ({ ...acc, [key]: decodeURIComponent(value) }),
      {}
    );

  return cookies[name];
};

export const checkCookieExists = (cookieName) => {
  const cookies = document.cookie.split(";");
  for (let i = 0; i < cookies.length; i++) {
    const cookie = cookies[i].trim();
    if (cookie.startsWith(`${cookieName}=`)) {
      return true; // Cookie exists
    }
  }
  return false; // Cookie does not exist
};

export const destroyCookie = (name) => {
  document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
};
