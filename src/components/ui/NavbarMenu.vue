<template>
  <div class="navbar__container">
    <div class="navbar__wrapper">
      <div class="navbar__menu">
        <font-awesome-icon class="navbar__icon" icon="message"/>
        <span class="navbar__title">FriendsOS</span>

        <router-link class="navbar__menu-item" to="/profile">
          Профиль
        </router-link>
        <router-link class="navbar__menu-item" to="/friends">
          Друзья
        </router-link>
        <router-link class="navbar__menu-item" to="/messages">
          Сообщения
        </router-link>
        <router-link class="navbar__menu-item" to="/events">
          Мероприятия
        </router-link>
        <router-link class="navbar__menu-item" to="/about">
          О проекте
        </router-link>
      </div>

      <div class="navbar__settings">
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
import { defineComponent } from "vue";
import useAuth from "../../hooks/useAuth";

export default defineComponent({
  name: "NavbarMenu",

  setup() {
    const { logout } = useAuth();

    return {
      logout
    };
  },
});
</script>

<style lang="scss">
@import '../src/styles/components/ui/navbar.scss';
</style>
