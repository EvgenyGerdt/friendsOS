<template>
  <input v-model="email" placeholder="Почта">

  <button @click="startTimer">
    <span>
      Отправить код
    </span>
  </button>
</template>

<script>
import { defineComponent, ref } from "vue";
import useTimer from "../hooks/useTimer";

export default defineComponent({
  name: "SendCodeStep",

  setup() {
    const email = ref('');
    const { startTimer } = useTimer('3.min');

    return {
      email,
      startTimer,
    };
  },
})
</script>

<style lang="scss">
@import "../styles/views/auth.scss";
</style>
