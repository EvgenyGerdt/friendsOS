<template>
  <div class="user-page__container">
    <div class="user-page__wrapper">
      <div class="user-page__title">
        <span class="user-page__title-item">
          Профиль
        </span>
      </div>

      <div class="profile" v-if="profileStore.isUserExists">
        <span class="profile__info-name">
          {{ profileStore.personalData.firstName }} {{ profileStore.personalData.lastName }}
          <button v-if="!isOwner">
            <font-awesome-icon icon="user-plus"/>
            Добавить в друзья
          </button>
        </span>
        <div class="profile__info-birthday">
          День рождения: {{ profileStore.personalData.birthday.replaceAll('-', '.') }}
        </div>
        <div class="profile__info-contacts">
          Контакты:
          <div>
            Email: {{ profileStore.email }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {computed, defineComponent, onMounted} from "vue";
import { useRoute, onBeforeRouteUpdate } from "vue-router";
import { useProfileStore } from "../../stores/profile";
import useProfile from '../../hooks/component/useProfile';

export default defineComponent({
  name: "ProfileView",

  setup() {
    const route = useRoute();
    const isOwner = computed(() => localStorage.getItem('id') === route.params.id);
    const { loadCurrentProfile } = useProfile();
    const profileStore = useProfileStore();

    onMounted(() => loadCurrentProfile(route.params.id));

    onBeforeRouteUpdate((to, from) => {
      if (to.params.id !== from.params.id) {
        loadCurrentProfile(to.params.id);
      }
    });

    return {
      profileStore,
      isOwner,
    };
  },
});
</script>

<style lang="scss">
@import '../../styles/views/profile.scss';
@import '../../styles/views/user-page.scss';
</style>
