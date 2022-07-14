import { defineStore } from 'pinia'

export const useProfileStore = defineStore({
  id: 'profile',

  state: () => ({
    user: null,
    token: !!localStorage.getItem('token') || false,
  }),

  getters: {
    id: (state) => state.user?.id,
    email: (state) => state.user?.email,
    personalData: (state) => state.user?.personalData,
    isAuthenticated: (state) => state.token,
  },

  actions: {
    saveProfileData(payload) {
      this.user = payload;
    },

    clearProfileData() {
      this.user = null;
    },

    setAuthentication() {
      this.token = !this.token;
    },
  },
});
