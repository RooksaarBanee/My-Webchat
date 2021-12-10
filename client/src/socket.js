import SocketIO from "socket.io-client";

const socket = SocketIO("http://localhost:3000");

export default socket;