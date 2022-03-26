// src/lib/realtime.js
import ioClient from "socket.io-client";
const ENDPOINT = "http://0.0.0.0:3000";

const socket = ioClient(ENDPOINT)

export const io = socket