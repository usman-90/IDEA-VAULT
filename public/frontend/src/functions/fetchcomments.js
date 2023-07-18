export const fetchComments = async ({ queryKey }) => {
  const  ideaid  = queryKey[1];
  const res = await fetch(
    `http://localhost:3000/ideavault/getcommentsandreplies/${ideaid}`
  );
  if (!res.ok) {
    console.log("ops error");
  }
  return res.json();
};

export const fetchFaq = async ({ queryKey }) => {
  const  ideaid  = queryKey[1];
  console.log(ideaid);
  const res = await fetch(
    `http://localhost:3000/ideavault/getideafaqs/${ideaid}`
  );
  if (!res.ok) {
    console.log("ops error");
  }
  return res.json();
};

export const fetchIdeaUpdates = async ({ queryKey }) => {
  console.log("invoked", queryKey);
  const  ideaid  = queryKey[1];
  const res = await fetch(
    `http://localhost:3000/ideavault/getideaupdates/${ideaid}`
  );
  if (!res.ok) {
    console.log("ops error");
  }
  const data = await res.json();
  console.log(data);
  return data;
};
