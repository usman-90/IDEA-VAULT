export const logout = async () => {
  const res = await fetch("http://localhost:3000/logout");
  const json = await res.json();
  return json;
};
