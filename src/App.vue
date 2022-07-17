<template>
  <main-layout>
    <template #view>
      <router-view />
    </template>
  </main-layout>
</template>

<script>
import { defineComponent, onMounted } from "vue";
import { useProfileStore } from "./stores/profile";
import MainLayout from "./components/layouts/MainLayout.vue";
import jwtDecode from "jwt-decode";

export default defineComponent({
  name: "App",
  components: { MainLayout },

  setup() {
    const profile = useProfileStore();

    onMounted(() => {
      const token = localStorage.getItem('token');

      if (token) {
        const { user } = jwtDecode(token);

        profile.saveProfileData(user);
      }
    });
  },
})
</script>

<style>
body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Helvetica Neue", sans-serif;
}

button, a {
  cursor: pointer;
}

a {
  text-decoration: none;
  color: dodgerblue;
}

input {
  outline: none;
}
</style>
