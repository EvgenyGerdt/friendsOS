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
        <div class="error" v-if="hasError">
          Неверная почта или пароль. Попробуйте заново.
        </div>
        <main>
          <input
              v-model="authState.email"
              type="email"
              placeholder="Почта"
          >
          <input
              v-model="authState.password"
              type="password"
              placeholder="Пароль"
          >
          <router-link to="/reset-password">Забыли пароль?</router-link>
          <button @click="login(authState)">
            <span v-if="!loading">
              Войти
            </span>
            <font-awesome-icon
                v-else
                class="loading"
                icon="spinner"
            />
          </button>
        </main>
        <footer>
          <span>Еще нет аккаунта?</span>
          <router-link to="/register">Создайте!</router-link>
        </footer>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue';
import useAuth from "../hooks/component/useAuth";

export default defineComponent({
  setup() {
    const authState = ref({
      email: '',
      password: '',
    });

    const {
      login,
      loading,
      hasError,
    } = useAuth();

    return {
      authState,
      loading,
      login,
      hasError,
    };
  },
});
</script>

<style lang="scss">
@import "../styles/views/auth";
@import "../styles/components/ui/loading.scss";
</style>
