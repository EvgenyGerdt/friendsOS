import { io } from "socket.io-client";
import { useFriendRequests } from "../../stores/friendRequests";

export default function useFriendsSocket() {
    const { updateFriendRequests } = useFriendRequests();

    const fs = io("http://localhost:3000/friends", {
        extraHeaders: {
            "Access-Control-Allow-Origin": "*",
        },
        autoConnect: false,
        query: { id: localStorage.getItem('id') },
    });

    fs.on('updateRequests', function (data) {
        updateFriendRequests(data);
    });

    return {
        fs,
    };
}
