// src/lib/realtime.js
import ioClient from "socket.io-client";
const ENDPOINT = "http://184.58.3.107:1000";

const socket = ioClient(ENDPOINT)

export const io = socket