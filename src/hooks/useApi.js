import { ref } from 'vue';
import instance from "../config/Api";

export default function useApi(method, path) {
    const response = ref();
    const hasError = ref(false);

    const request = async (options) => {
        response.value = await instance[method](path, options)
            .then((res) => res.data)
            .catch(() => {
                hasError.value = true;
            });
    };

    return {
        request,
        response,
        hasError,
    };
}
