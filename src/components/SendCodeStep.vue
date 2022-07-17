<template>
  <input v-model="email" placeholder="Почта">

  <timer-button
      text="Отправить код"
      time="1.min"
      @start="sendCode"
  />
</template>

<script>
import { defineComponent, ref } from "vue";
import useResetPassword from "../hooks/component/useResetPassword";
import TimerButton from "./timer-button.vue";

export default defineComponent({
  name: "SendCodeStep",
  components: { TimerButton },
  setup() {
    const email = ref('');
    const { sendCode } = useResetPassword();

    return {
      email,
      sendCode,
    };
  },
})
</script>

<style lang="scss">
@import "../styles/views/auth.scss";
</style>
