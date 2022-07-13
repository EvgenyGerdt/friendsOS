import { ref } from 'vue';
import { useRouter } from "vue-router";
import useApi from "./useApi";

export default function useAuth (type = '', authCredentials = {}) {
    const { response: data, request, hasError: authError } = useApi('post', `/auth/${type}`, authCredentials);
    const loading = ref(false);
    const isAuthenticated = ref(!!localStorage.getItem('token'));

    const router = useRouter();

    const login = async (credentials) => {
        loading.value = true;
        try {
            await request(credentials);

            localStorage.setItem('token', data.value.token);
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

    const logout = () => localStorage.removeItem('token');

    return {
        loading,
        isAuthenticated,
        authError,
        login,
        register,
        logout,
    };
}
