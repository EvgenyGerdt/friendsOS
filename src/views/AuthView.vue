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
              v-model="authState.email"
              type="email"
              placeholder="Email"
          >
          <input
              v-model="authState.password"
              type="password"
              placeholder="Password"
          >
          <router-link to="/">Forgot password?</router-link>
          <button @click="auth">
            <span v-if="!loading">
              Sign in
            </span>
            <font-awesome-icon
                v-else
                class="loading"
                icon="spinner"
            />
          </button>
        </main>
        <footer>
          <span>Don't have account?</span>
          <router-link to="/register">Create!</router-link>
        </footer>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue';
import Auth from "../api/Auth";

export default defineComponent({
  setup() {
    const authState = ref({
      email: '',
      password: '',
    });

    const loading = ref(false);

    const auth = async () => {
      loading.value = true;

      try {
        Auth.login(authState.value);
      } finally {
        loading.value = false;
      }
    };

    return {
      authState,
      loading,
      auth,
    };
  },
});
</script>

<style lang="scss">
.auth-view {
  &__container {
    height: 100vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  &__wrapper {
    width: 40%;
    height: 50%;

    display: flex;

    border: 1px solid darkgray;
    border-radius: 1em;
    overflow: hidden;
  }

  &__info, &__form {
    flex: 1;
    display: flex;
    justify-content: center;
    padding: 25px;
  }

  &__info {
    flex: 1;
    flex-direction: column;
    border-right: 1px solid darkgray;
    background-color: #f8f8f8;

    > header {
      > p, > h4 {
        width: 100%;
        text-align: left;
      }

      > h4 {
        font-size: 18px;
      }

      > p {
        font-size: 16px;
      }
    }

    > footer > * {
      width: 100%;
      text-align: left;
    }

    > footer {
      > a {
        margin-left: 5px;
      }
    }
  }

  &__form {
    flex: 1;
    flex-direction: column;

    & > main {
      & > input {
        border: 1px solid darkgray;
        padding: 0 10px;
        font-weight: bold;
        font-size: 16px;
        transition: 250ms ease;

        &:focus {
          border: 1px solid dodgerblue;
          transition: 250ms ease;
        }
      }

      > a {
        align-self: end;
      }

      > button {
        height: 20px;
        border: none;
        font-size: 16px;
        font-weight: bold;
        background-color: dodgerblue;
        color: white;

        &:hover {
          background-color: #4ca6ff;
        }
      }

      > input, a, button {
        margin: 5px 0;
      }

      > input, button {
        width: 100%;
        height: 40px;
        border-radius: 0.5em;
      }
    }

    & > footer {
      > a {
        margin-left: 5px;
      }
    }
  }
}

header, main {
  flex-direction: column;
}

header, main, footer {
  display: flex;
  justify-content: center;
  align-items: center;

  margin: 10px 0;
}

.loading {
  transition: 300ms ease-in-out;
  animation: load 1.4s infinite linear;
}

@keyframes load {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}
</style>
