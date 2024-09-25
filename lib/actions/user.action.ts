import { signInWithEmailAndPassword } from "firebase/auth"
import { auth } from "../firebase";

export const logIn = async ({email, password} : signInProps) => {
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        return userCredential.user;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

export const getLoggedInUser = () => {
    try {
        const user = auth.currentUser;
        if (user) {
            return user;
        } else {
            return null;
        }
    } catch (error) {
        console.log(error);
        throw error;
    }
};

export const signOut = () => {
    try {
        return auth.signOut();
    } catch (error) {
        console.log(error);
        throw error;
    }
}
