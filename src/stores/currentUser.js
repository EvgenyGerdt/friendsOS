import { defineStore } from 'pinia'

export const useCurrentUser = defineStore({
    id: 'user',

    state: () => ({
        user: null,
    }),

    getters: {
        id: (state) => state.user?.id,
        email: (state) => state.user?.email,
        personalData: (state) => state.user?.personalData,
    },

    actions: {
        saveProfileData(payload) {
            this.user = payload;
        },

        clearProfileData() {
            this.user = null;
        },
    },
});
