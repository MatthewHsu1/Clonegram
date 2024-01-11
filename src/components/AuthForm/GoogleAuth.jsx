import { Flex, Image, Text } from "@chakra-ui/react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { auth, firestore } from "../../firebase/firebase";
import useShowToast from "../../hooks/useShowToast";
import useAuthStore from "../../store/authStore";
import { doc, setDoc } from "firebase/firestore";


const GoogleAuth = ({loginOrSignUp}) => {
    const [signInWithGoogle, , , error] = useSignInWithGoogle(auth);
    const showToast = useShowToast;
    const loginUser = useAuthStore( (state) => state.login);
    const handleGoogleAuth = async() => {
        try{
            const user = await signInWithGoogle();
            if(!user && error){
                showToast("Error", error.message, "error");
                return;
            }

            if(user){
                const userDoc ={
                    uid: user.user.uid,
                    email: user.user.email,
                    username: user.user.email.split("@")[0],
                    fullName: user.user.displayName,
                    bio: "",
                    profilePictureURL: user.user.photoURL,
                    followers: [],
                    following: [],
                    posts: [],
                    createdAt: Date.now()
                }
                await setDoc(doc(firestore, "users", user.user.uid), userDoc);
                localStorage.setItem("user-info", JSON.stringify(userDoc));
                loginUser(userDoc)
            }
        } catch(error){
            showToast("Error", error.message, "error");
        }
    }

    return (
        <>
            {/**Log in with Google */}
            <Flex alignItems={"center"} justifyContent={"center"} cursor={"pointer"} onClick={handleGoogleAuth}>
                <Image src="google.png" width={5} alt="Google image"/> 
                <Text marginX={2} color={"blue.500"}>
                    {loginOrSignUp} with Google
                </Text>   
            </Flex>
        </>
    )
}

export default GoogleAuth