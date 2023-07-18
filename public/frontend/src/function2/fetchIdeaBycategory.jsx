const fetchIdea = async ({queryKey} ) => {
  const id = queryKey[1] 
    const apiRes = await fetch(`http://localhost:3000/ideavault/getideabycategory/${id}`);
  
    if (!apiRes.ok) {
      throw new Error(`idea fetch not ok`);
    }
  
    return apiRes.json();
  };
  
  export default fetchIdea;