const timestamp = "2023-07-13T07:43:45.262Z";

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

console.log(formattedTime);
