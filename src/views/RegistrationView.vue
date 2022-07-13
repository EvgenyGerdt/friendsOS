<template>
  <div class="auth-view__container">
    <div class="auth-view__wrapper">
      <div class="auth-view__info">
        <header>
          <h4>FriendsOS</h4>
          <p>
            Данный проект создан исключительно
            для портфолио и не представляет
            из себя полноценную социальную сеть.
          </p>
        </header>
        <footer>
          Разработчик: <a href="https://github.com/EvgenyGerdt" target="_blank">Евгений Гердт</a>
        </footer>
      </div>
      <div class="auth-view__form">
        <main>
          <input
              v-model="registerState.email"
              type="email"
              placeholder="Почта"
          >
          <input
              v-model="registerState.password"
              type="password"
              placeholder="Пароль"
          >
          <input
              v-model="registerState.personalData.firstName"
              type="text"
              placeholder="Имя"
          >
          <input
              v-model="registerState.personalData.lastName"
              type="text"
              placeholder="Фамилия"
          >
          <input
              v-model="registerState.personalData.birthday"
              type="date"
          >
          <button @click="register(registerState)">Создать</button>
        </main>
        <footer>
          <router-link to="/">Назад</router-link>
        </footer>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";
import useAuth from "../hooks/useAuth";

export default defineComponent({
  name: "RegistrationView",

  setup() {
    const registerState = ref({
      email: '',
      password: '',
      personalData: {
        firstName: '',
        lastName: '',
        birthday: '',
      }
    });

    const { register, loading, authError } = useAuth('register');

    return {
      registerState,
      loading,
      authError,
      register,
    };
  },
});
</script>

<style lang="scss">
@import "../styles/auth.scss";
</style>
