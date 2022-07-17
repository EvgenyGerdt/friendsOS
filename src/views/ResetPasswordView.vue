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
          <send-code-step />
        </main>
        <footer>
          <router-link to="/">Назад</router-link>
        </footer>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import SendCodeStep from "../components/SendCodeStep.vue";

export default defineComponent({
  name: "ResetPasswordView",
  components: { SendCodeStep },
  setup() {

  },
});
</script>
