import { useProfileStore } from "../../stores/profile";

export default function useProfile() {
    const profile = useProfileStore();

    const personalData = profile.personalData;
    const email = profile.email;
    const id = profile.id;

    return {
        personalData,
        id,
        email,
    };
}
