<template>
  <router-view />
</template>

<script>
export default {
  name: "App"
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
