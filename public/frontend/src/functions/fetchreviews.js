export const fetchReviews = async () => {
  const res = await fetch(`http://localhost:3000/ideavault/getreviews`);

  if (!res.ok) {
    console.log("ops error");
  }
  return res.json();
};
