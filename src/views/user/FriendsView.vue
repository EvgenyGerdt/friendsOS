<template>
  <div class="user-page__container">
    <div class="user-page__wrapper">
      <div class="user-page__title">
        <span class="user-page__title-item">
          Друзья
        </span>

        <icon-input
            class="user-page__title-input"
            v-model="searchValue"
            placeholder="Поиск пользователей"
            icon="magnifying-glass"
        />
      </div>

      <div class="friends" v-if="friendRequests.length !== 0">
        <div class="friends__list" v-if="!loading">
          <div
              class="friends__list-item"
              v-for="(request, index) in friendRequests"
              :key="`${request.id}__${index}`"
          >
            <div class="friends__list-item-inner">
              <router-link class="friends__list-item-inner-personal" :to="`/profile/${request.id}`">
                {{ request.personalData.firstName }} {{ request.personalData.lastName }}
              </router-link>
              <button @click="accept(request.id)">
                <font-awesome-icon icon="check" />
                <span>Принять заявку</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div
          class="friends"
          :class="{ empty: list.length === 0 }"
      >
        <div class="friends__list" v-if="!loading && list.length !== 0">
          <div
              class="friends__list-item"
              v-for="(user, index) in list"
              :key="`${user.id}__${index}`"
          >
            <div class="friends__list-item-inner">
              <router-link class="friends__list-item-inner-personal" :to="`/profile/${user.id}`">
                {{ user.personalData.firstName }} {{ user.personalData.lastName }}
              </router-link>
              <button @click="createRequest(user.id)" v-if="true">
                <font-awesome-icon icon="user-plus"/>
                <span>Добавить в друзья</span>
              </button>

              <button v-else>
                <font-awesome-icon icon="paper-plane" />
                <span>Сообщения</span>
              </button>
            </div>
          </div>
        </div>

        <div
            class="friends__list"
            :class="{ spinner: loading }"
            v-else-if="loading && list.length === 0"
            style="font-size: 36px"
        >
          <font-awesome-icon class="loading" icon="spinner"/>
        </div>

        <div
            class="friends__list-empty"
            v-else-if="!loading && list.length === 0"
        >
          <p>Список пуст</p>
          <button @click="getFriendList">Найти друзей</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, onMounted, watch } from "vue";
import useFriends from "../../hooks/component/useFriends";
import IconInput from "../../components/icon-input.vue";
import useDebouncedRef from "../../hooks/api/useDebouncedRef";

export default defineComponent({
  name: "FriendsView",
  components: { IconInput },
  setup() {
    const {
      list,
      friendRequests,
      loading,
      getFriendList,
      findUsers,
      createRequest,
      acceptRequest,
    } = useFriends();

    const searchValue = useDebouncedRef('', 1000);

    const accept = async (from) => {
      try {
        await acceptRequest(from);
      } finally {
        await getFriendList();
      }
    };

    const isFriend = (user) => !!list.value.find((item) => item.id === user.id);

    watch(searchValue, newSearchValue => findUsers(newSearchValue));

    onMounted(() => getFriendList());

    return {
      searchValue,
      list,
      friendRequests,
      loading,
      isFriend,
      getFriendList,
      createRequest,
      accept,
    };
  },
});
</script>

<style lang="scss">
@import '../../styles/views/user-page.scss';
@import '../../styles/views/friends-list.scss';
@import "../../styles/components/ui/loading.scss";
</style>
