import { defineStore } from 'pinia'

export const useAuthStore = defineStore({
    id: 'auth',

    state: () => ({
        token: !!localStorage.getItem('token') || false,
    }),

    getters: {
        isAuthenticated: (state) => state.token,
    },

    actions: {
        setAuthentication() {
            this.token = !this.token;
        },
    },
});
