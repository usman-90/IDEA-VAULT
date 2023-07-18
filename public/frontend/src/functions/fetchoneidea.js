export const fetchOneIdea = async ({ queryKey }) => {
  console.log("in")
  const ideaid = queryKey[1];
  const res = await fetch(`http://localhost:3000/ideavault/getoneidea/${ideaid}`);
  if (!res.ok) {
    console.log("ops error");
  }

  return res.json();
};
