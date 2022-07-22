import { io } from "socket.io-client";

export default function useSocket() {
    const socket = io("http://localhost:3000", {
        extraHeaders: {
            "Access-Control-Allow-Origin": "*",
        },
        autoConnect: false,
        query: { id: localStorage.getItem('id') },
    });

    socket.on('session', ({ sessionID }) => {
       localStorage.setItem('sessionID', sessionID);
    });

    return {
        socket,
    };
}
