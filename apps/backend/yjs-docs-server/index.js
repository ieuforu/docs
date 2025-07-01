import {WebSocketServer} from "ws";
import { setupWSConnection } from "y-websocket/bin/utils";

const PORT = 3000

const wss = new WebSocketServer({
    port: PORT,
})

wss.on('connection', (ws) => {
    setupWSConnection(ws, wss)
})

console.log(`yjsServer running on port: ws://localhost:${PORT}`)