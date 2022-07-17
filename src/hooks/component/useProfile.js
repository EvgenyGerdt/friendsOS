import { useProfileStore } from "../../stores/profile";
import instance from "../../config/Api";

export default function useProfile() {
    const profile = useProfileStore();

    const personalData = profile.personalData;
    const email = profile.email;
    const id = profile.id;

    const loadCurrentProfile = async (id) => {
      const user = await instance
          .get(`/user/${id}`)
          .then((res) => res.data);

      profile.saveProfileData(user);
    };

    return {
        personalData,
        id,
        email,
        loadCurrentProfile,
    };
}
