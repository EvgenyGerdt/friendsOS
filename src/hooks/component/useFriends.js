import { ref } from "vue";
import instance from "../../config/Api";
import { User } from "../../models/User";

export default function useFriends() {
    const list = ref([]);
    const friendRequests = ref([]);
    const loading = ref(false);
    const hasError = ref(false);

    const getFriendList = async () => {
        loading.value = true;

        try {
            await instance
                .get(`/friends/${localStorage.getItem('id')}`, {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('token')}`,
                    }
                })
                .then((res) => {
                    list.value = res.data.friendList.map((item) => new User(item));
                    friendRequests.value = res.data.friendRequests;
                });
        } finally {
            loading.value = false;
        }
    };

    const findUsers = async (searchParam) => {
        loading.value = true;

        try {
            list.value = await instance
                .get('/friends/search/users', {
                    params: { searchParam },
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('token')}`,
                    },
                })
                .then((res) => res.data.map((item) => new User(item)));
        } catch (e) {
            hasError.value = true;
        } finally {
            loading.value = false;
        }
    };

    const createRequest = async (to) => {
      try {
          await instance.post('/friends/request',
              { from: localStorage.getItem('id'), to },
              {
              headers: {
                  Authorization: `Bearer ${localStorage.getItem('token')}`,
              },
          });
      } catch (e) {
          hasError.value = true;
      }
    };

    const acceptRequest = async (from) => {
        try {
            await instance.post('/friends/accept',
                { to: localStorage.getItem('id'), from },
                {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`,
                },
            })
        } catch (e) {
            hasError.value = true;
        }
    };

    return {
        findUsers,
        getFriendList,
        createRequest,
        acceptRequest,
        hasError,
        loading,
        list,
        friendRequests,
    };
}
