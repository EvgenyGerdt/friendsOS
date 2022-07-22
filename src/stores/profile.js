import { defineStore } from 'pinia'

export const useProfileStore = defineStore({
  id: 'profile',

  state: () => ({
    user: null,
    isUserExists: false,
  }),

  getters: {
    id: (state) => state.user?.id,
    email: (state) => state.user?.email,
    personalData: (state) => state.user?.personalData,
    online: (state) => state.user?.online,
    isUserExists: (state) => !!state.user,
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
