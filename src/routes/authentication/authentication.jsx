import SignUpForm from '../../components/signup/signup';
import SignInForm from '../../components/sign-in/sign-in';
import './authetication.scss'

const Authentication =() =>{
    return (
        <div className='authetication-container'>
            <SignInForm/>
            <SignUpForm/>
        </div>
    );
}
export default Authentication;