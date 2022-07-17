import { ref } from "vue";
import { useProfileStore } from "../../stores/profile";
import instance from "../../config/Api";
import { User } from "../../models/User";

export default function useFriends() {
    const list = ref([]);
    const loading = ref(false);
    const hasError = ref(false);
    const profile = useProfileStore();

    const getFriendList = async () => {
        loading.value = true;

        try {
            list.value = await instance
                .get(`/friends/${profile.id}`)
                .then((res) => res.data.map((item) => new User(item)));
            console.log(list.value)
        } finally {
            loading.value = false;
        }
    };

    const findUsers = async (searchParam) => {
        loading.value = true;

        try {
            list.value = await instance
                .get('/friends/search/users', { params: { searchParam } })
                .then((res) => res.data.map((item) => new User(item)));
        } catch (e) {
            hasError.value = true;
        } finally {
            loading.value = false;
        }
    };

    return {
        findUsers,
        getFriendList,
        hasError,
        loading,
        list,
    };
}
