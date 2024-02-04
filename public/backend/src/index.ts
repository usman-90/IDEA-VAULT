import server from "./server";

server.listen(3000, () => {
  console.log(`listenning on port: http://localhost:${process.env.PORT}`);
});
