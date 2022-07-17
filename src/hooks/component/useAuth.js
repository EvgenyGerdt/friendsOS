import { computed, ref } from 'vue';
import { useRouter } from "vue-router";
import jwtDecode from "jwt-decode";

import { useProfileStore } from "../../stores/profile";
import { useAuthStore } from "../../stores/auth";
import instance from "../../config/Api";

export default function useAuth () {
    const authStore = useAuthStore();
    const profileStore = useProfileStore();
    const router = useRouter();

    const loading = ref(false);
    const hasError = ref(false);

    const login = async (credentials) => {
        loading.value = true;
        try {
            const { token } = await instance.post('/auth/login', credentials)
                .then((res) => res.data);
            localStorage.setItem('token', token);

            const { user } = jwtDecode(token);
            profileStore.saveProfileData(user);
            authStore.setAuthentication();

            router.push(`/profile/${user.id}`);
        } catch (e) {
            hasError.value = true;
        } finally {
            loading.value = false;
        }
    };

    const register = async (candidate) => {
        loading.value = true;

        try {
            await instance.post('/auth/register', candidate);
        } catch (e) {
            hasError.value = true;
        } finally {
            loading.value = false;
        }
    };

    const logout = () => {
        localStorage.removeItem('token')

        authStore.setAuthentication();
        profileStore.clearProfileData();
        router.push('/');
    };

    return {
        loading,
        hasError,
        login,
        register,
        logout,
        isAuthenticated: computed(() => authStore.isAuthenticated),
    };
}
