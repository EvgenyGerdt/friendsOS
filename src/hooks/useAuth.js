import {computed, ref} from 'vue';
import { useRouter } from "vue-router";
import jwtDecode from "jwt-decode";

import { useProfileStore } from "../stores/profile";
import useApi from "./useApi";

export default function useAuth (type = '', authCredentials = {}) {
    const { response: data, request, hasError: authError } = useApi('post', `/auth/${type}`, authCredentials);
    const loading = ref(false);

    const profileStore = useProfileStore();
    const router = useRouter();

    const login = async (credentials) => {
        loading.value = true;
        try {
            await request(credentials);
            localStorage.setItem('token', data.value.token);

            const { user } = jwtDecode(data.value.token);
            profileStore.saveProfileData(user);
            profileStore.setAuthentication();

            router.push('/profile');
        } finally {
            loading.value = false;
        }
    };

    const register = async (candidate) => {
        loading.value = true;

        try {
            await request(candidate);
        } finally {
            loading.value = false;
        }
    };

    const logout = () => {
        localStorage.removeItem('token')

        profileStore.setAuthentication();
        profileStore.clearProfileData();
        router.push('/');
    };

    return {
        loading,
        authError,
        login,
        register,
        logout,
        isAuthenticated: computed(() => profileStore.isAuthenticated),
    };
}
