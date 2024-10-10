import { useState } from "react";
import useShowToast from "./useShowToast";
import useAuthStore from "../store/authStore";
import { getDownloadURL, ref, uploadString } from "firebase/storage";
import { firestore, storage } from "../firebase/firebase";
import { doc, updateDoc } from "firebase/firestore";
import useUserProfileStore from "../store/userProfileStore";

const useEditProfile = () => {
    const [isLoading, setIsLoading] = useState(false);

    const authUser = useAuthStore((state) => state.user);
    const setAuthUser = useAuthStore((state) => state.setUser);
    const setUserProfile = useUserProfileStore((state) => state.setUserProfile);

    const showToast = useShowToast();

    const editProfile = async(inputs, selectedFile) => {
        if (isLoading || !authUser) {
            return;
        }
        setIsLoading(true);

        const storageRef = ref(storage, `profilePics/${authUser.uid}`);
        const userDocRef = doc(firestore, "users", authUser.uid);

        let URL = "";
        try {
            if (selectedFile) {
                await uploadString(storageRef, selectedFile, "data_url");
                URL = await getDownloadURL(storage, `profilePics/${authUser.uid}`);
            }

            const updatedUser = {
                ...authUser,
                fullName: inputs.fullName || authUser.fullName,
                username: inputs.username || authUser.username,
                bio: inputs.bio || authUser.bio,
                profilePictureURL: URL || authUser.profilePictureURL
            }

            await updateDoc(userDocRef, updatedUser);
            localStorage.setItem("user-info", JSON.stringify(updatedUser));
            setAuthUser(updatedUser);
            setUserProfile(updatedUser);
            setIsLoading(false);
            showToast("Success", "Profile updated successfully", "success");
        } catch (error) {
            showToast("Error", error.messsage, "error");
            setIsLoading(false);
        }
    };

    return { editProfile, isLoading };
};

export default useEditProfile