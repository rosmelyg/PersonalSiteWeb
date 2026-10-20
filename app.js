import http from "http";
import serverHandler from "./routes/routes.js";

const server = http.createServer(serverHandler);

server.listen(8080);
console.log("Servidor escuchando en http://localhost:8080");