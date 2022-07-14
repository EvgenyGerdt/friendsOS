<template>
  <div class="main-layout__container">
    <navbar-menu v-if="isAuthenticated" />
    <slot name="view" />
  </div>
</template>

<script>
import { defineComponent } from "vue";
import NavbarMenu from "../ui/NavbarMenu.vue";

import useAuth from "../../hooks/useAuth";

export default defineComponent({
  name: "MainLayout",
  components: { NavbarMenu },

  setup() {
    const { isAuthenticated } = useAuth();

    return {
      isAuthenticated,
    };
  },
});
</script>
