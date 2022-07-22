<template>
  <div class="navbar__container">
    <div class="navbar__wrapper">
      <div class="navbar__menu">
        <font-awesome-icon class="navbar__icon" icon="message"/>
        <span class="navbar__title">FriendsOS</span>

        <router-link
            v-for="(item, index) in routes"
            class="navbar__menu-item"
            :class="{ active: route.path === item.path }"
            :to="item.path"
            :key="`${item}__${index}`"
        >
          {{ item.name }}
        </router-link>
      </div>

      <div class="navbar__settings">
        <button class="navbar__settings-item">
          <font-awesome-icon
              icon="bell"
          />
          <span class="navbar__settings-notif">3</span>
        </button>
        <router-link class="navbar__settings-item" to="/">
          <font-awesome-icon icon="cog"/>
        </router-link>
        <font-awesome-icon
            class="navbar__settings-item"
            icon="arrow-right-from-bracket"
            @click="logout"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { computed, defineComponent } from "vue";
import { useRoute } from "vue-router";
import useAuth from "../../hooks/component/useAuth";

export default defineComponent({
  name: "NavbarMenu",

  setup() {
    const route = useRoute();
    const { logout } = useAuth();

    const routes = computed(() => [
      {
        name: 'Профиль',
        path: '/profile',
      },
      {
        name: 'Друзья',
        path: '/friends',
      },
      {
        name: 'Сообщения',
        path: '/messages',
      },
      {
        name: 'Мероприятия',
        path: '/events',
      },
      {
        name: 'О проекте',
        path: '/about',
      },
    ]);

    return {
      routes,
      route,
      logout,
    };
  },
});
</script>

<style lang="scss">
@import '../src/styles/components/ui/navbar.scss';
</style>
