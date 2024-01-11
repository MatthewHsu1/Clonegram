import { auth, firestore } from "../firebase/firebase";
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { collection, doc, getDocs, query, setDoc, where } from "firebase/firestore"; 
import useShowToast from "./useShowToast";
import useAuthStore from "../store/authStore";

const useSignUpWithEmailAndPassword = () =>{

    const [createUserWithEmailAndPassword, , loading, error] = useCreateUserWithEmailAndPassword(auth);
    const showToast = useShowToast();
    const loginUser = useAuthStore(state => state.login)

    const signup = async (inputs) => {
        if( !inputs.email || !inputs.password || !inputs.username || !inputs.fullName){
            showToast("Error", "Please fill all fields", "error");
            return;
        }

        {/**calling data base user collection*/}
        const usersRef = collection(firestore, "users");
        {/**Initilaize query request the username from the users collection*/}
        const q = query(usersRef, where("username", "==", inputs.username));
        {/**Return the query result*/}
        const querySnapshot = await getDocs(q);

        if(!querySnapshot.empty){
            showToast("Error", "Usaername already exists", "error");
            return;
        }

        try{
            const newUser = await createUserWithEmailAndPassword(inputs.email, inputs.password)
            if(!newUser && error){
                showToast("Error", error.message, "error");
                return;
            }
            if(newUser){
                const userDoc ={
                    uid:newUser.user.uid,
                    email: inputs.email,
                    username: inputs.username,
                    fullName: inputs.fullName,
                    bio: "",
                    profilePictureURL: "",
                    followers: [],
                    following: [],
                    posts: [],
                    createdAt: Date.now()
                }
                await setDoc(doc(firestore, "users", newUser.user.uid), userDoc);
                localStorage.setItem("user-info", JSON.stringify(userDoc));
                loginUser(userDoc)
            }
        } catch (error){
            showToast("Error", error.message, "error");
        }
    }

    return (
        {loading, error, signup}
    )
}

export default useSignUpWithEmailAndPassword;