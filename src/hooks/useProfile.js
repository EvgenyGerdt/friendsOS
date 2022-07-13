import { ref } from 'vue';
import useApi from "./useApi";

export default function useProfile(token) {
    const { response: profile, request, hasError } = useApi('get', '/user/profile');
    const loading = ref(false);

    return {
        profile,
        hasError,
        loading,
    };
}
