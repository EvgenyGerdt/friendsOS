<template>
  <div class="user-page__container">
    <div class="user-page__wrapper">
      <div class="user-page__title">
        <span class="user-page__title-item">
          Профиль
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { useProfileStore } from "../../stores/profile";

export default defineComponent({
  name: "ProfileView",

  setup() {
    const { email, personalData } = useProfileStore();

    return {
      email,
      personalData,
    };
  },
});
</script>

<style lang="scss">
@import '../../styles/views/user-page.scss';
</style>
