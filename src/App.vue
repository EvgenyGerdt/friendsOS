<template>
  <main-layout>
    <template #view>
      <router-view />
    </template>
  </main-layout>
</template>

<script>
import MainLayout from "./components/layouts/MainLayout.vue";

export default {
  name: "App",
  components: {MainLayout}
}
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
