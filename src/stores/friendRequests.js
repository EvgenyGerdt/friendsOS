import { defineStore } from 'pinia'

export const useFriendRequests = defineStore({
    id: 'friendRequests',

    state: () => ({
        friendRequests: [],
    }),

    getters: {
        requests: (state) => state.friendRequests,
    },

    actions: {
        updateFriendRequests(payload) {
            this.friendRequests = payload;
        },
    },
});
