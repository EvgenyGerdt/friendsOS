<template>
  <button
      :class="{ disabled: isTimerStarted }"
      :disabled="isTimerStarted"
      @click="handleStart"
  >
    <span v-if="!isTimerStarted">
      {{ text }}
    </span>
    <span v-else>
      {{ currentTime }}
    </span>
  </button>
</template>

<script>
import { defineComponent } from "vue";
import useTimer from "../hooks/component/useTimer";

export default defineComponent({
  name: "timer-button",

  props: {
    text: String,
    time: String,
  },

  emits: ['start'],

  setup(props, { emit }) {
    const { isTimerStarted, currentTime, startTimer } = useTimer(props.time);

    const handleStart = () => {
      startTimer();
      emit('start');
    };

    return {
      currentTime,
      isTimerStarted,
      handleStart,
      startTimer,
    };
  },
});
</script>

<style lang="scss">
@import '../styles/components/timer-button.scss';
</style>
