import {signInWithGooglePopup,createUserDocumentFromAuth} from '../../utils/firebase/firebase'

const SignIn =() =>{
    const logGoogleUser = async()=>{
        try {
            const {user} = await signInWithGooglePopup();
            const userDocRef = await createUserDocumentFromAuth(user);
        } catch (error) {
            console.error("Error signing in: ", error);
        }
    }
    return (
        <div>
            <h1>Signing In Page</h1>
            <button onClick={logGoogleUser}>Sign in with Google Popup</button>
        </div>
    );
}
export default SignIn;