import http from "http";

const port = process.env.PORT || 8080;

const server = http.createServer((req, res) => {
  res.end("Cloud Run Ready");
});

server.listen(port);
