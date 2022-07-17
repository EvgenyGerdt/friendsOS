<template>
  <div class="user-page__container">
    <div class="user-page__wrapper">
      <div class="user-page__title">
        <span class="user-page__title-item">
          Профиль
        </span>
      </div>

      <div class="profile">
        <span class="profile__info-name">
          {{ personalData.firstName }} {{ personalData.lastName }}
        </span>
        <div class="profile__info-birthday">
          День рождения: {{ personalData.birthday.replaceAll('-', '.') }}
        </div>
        <div class="profile__info-contacts">
          Контакты:
          <div>
            Email: {{ email }}
          </div>
        </div>
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
@import '../../styles/views/profile.scss';
@import '../../styles/views/user-page.scss';
</style>
