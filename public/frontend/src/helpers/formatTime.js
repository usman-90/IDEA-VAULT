export const formatTime = (t) => {
  const timestamp = t;

  const options = { hour: "numeric", minute: "2-digit" };
  const time = new Date(timestamp).toLocaleTimeString([], options);

  const currentDate = new Date().toLocaleDateString();
  const messageDate = new Date(timestamp).toLocaleDateString();

  let formattedTime;
  if (currentDate === messageDate) {
    formattedTime = time;
  } else {
    formattedTime = new Date(timestamp).toLocaleDateString();
  }
  return formattedTime;
};

