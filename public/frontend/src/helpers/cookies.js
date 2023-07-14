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
