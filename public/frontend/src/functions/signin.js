export const signin = async (data) => {
  const option = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  };
  const result = await fetch("http://localhost:3000/login", option);
  if (!result.ok) {
    console.log("ops error");
    return;
  }
  return result.json();
};
