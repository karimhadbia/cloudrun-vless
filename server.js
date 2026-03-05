import http from "http";

const server = http.createServer((req, res) => {
  res.writeHead(200);
  res.end("Cloud Run Ready");
});

server.listen(process.env.PORT || 8080);
