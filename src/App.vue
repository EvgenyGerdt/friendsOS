<template>
  <main-layout>
    <template #view>
      <router-view />
    </template>
  </main-layout>
</template>

<script>
import { defineComponent, onMounted, onBeforeUnmount } from "vue";
import { storeToRefs } from "pinia";
import { useAuthStore } from "./stores/auth";
import MainLayout from "./components/layouts/MainLayout.vue";
import useSocket from "./hooks/api/useSocket";
import useFriendsSocket from "./hooks/api/useFriendsSocket";

export default defineComponent({
  name: "App",
  components: { MainLayout },

  setup() {
    const authStore = useAuthStore();
    const { isAuthenticated } = storeToRefs(authStore);
    const { socket } = useSocket();
    const { fs } = useFriendsSocket();

    onMounted(() => {
      if (isAuthenticated) {
        socket.connect();
        fs.connect();
      }
    });

    onBeforeUnmount(() => {
      if (isAuthenticated) {
        socket.disconnect();
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
