<template>
 <div class="icon-input__container">
   <input class="icon-input__input" :placeholder="placeholder" @input="updateValue" />
   <font-awesome-icon class="icon-input__icon" :icon="icon" />
 </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "icon-input",

  props: {
    modelValue: {
      type: String,
      default: '',
    },

    placeholder: {
      type: String,
      default: '',
    },

    icon: String,
  },

  setup(props, { emit }) {
    const updateValue = (event) => {
      emit('update:modelValue', event.target.value);
    };

    return { updateValue };
  },
});
</script>

<style lang="scss">
@import "../styles/components/icon-input.scss";
</style>
