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
              placeholder="Email"
          >
          <input
              v-model="registerState.password"
              type="password"
              placeholder="Password"
          >
          <input
              v-model="registerState.personalData.firstName"
              type="text"
              placeholder="First Name"
          >
          <input
              v-model="registerState.personalData.lastName"
              type="text"
              placeholder="Last Name"
          >
          <input
              v-model="registerState.personalData.birthday"
              type="date"
          >
          <button>Sign up</button>
        </main>
        <footer>
          <router-link to="/">Back</router-link>
        </footer>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";

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

    return {
      registerState,
    };
  },
});
</script>
