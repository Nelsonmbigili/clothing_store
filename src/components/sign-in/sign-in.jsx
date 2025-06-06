import {useState} from 'react';
import  FormInput from '../form-input/form-input'
import Button, {Button_TYPE} from '../button/button'
import './sign-in.scss';
import { useDispatch } from 'react-redux';
import { googleSignInStart, emailSignInStart } from '../../store/user/user.action';

const defaultformFields ={
    email: '',
    password: ''
}

const SignInForm = ()=>{
    const dispatch = useDispatch();
    const [formFields, setFormFields]= useState(defaultformFields);
    const {email ,password} = formFields;
    console.log(formFields);

    const resetFormFields=()=> {
        setFormFields(defaultformFields);
    }

    const signInWithGoogle= async()=>{
        dispatch(googleSignInStart());
        }

    const handleSubmit = async(event)=> {
        event.preventDefault();
        console.log("handleSubmit triggered");
    
        try{
            
            dispatch(emailSignInStart(email, password))
            resetFormFields();
        }catch(error)
        {
            if(error.code==='auth/invalid-credential')
            {
                console.log(error);
                alert("Invalid credentials")
                resetFormFields();

            }else if(error.code==='auth/wrong-password'){
                console.log(error);
                alert("Incorrect Password for that email")
                resetFormFields();
            }
            else if(error.code==='auth/user-not-found'){
                console.log(error);
                alert("User does not exist!");
                resetFormFields();
            }else{
                console.log(error);
            }
           
        }
    };

    const handleChange = (event)=>{
        const {name, value} = event.target;
        setFormFields({...formFields,[name]:value})
    };

    return(
        <div className='sign-up-container'>
          <h2>Already have an account?</h2>
            <h1>Sign In With Your Email and Password</h1>
            <form onSubmit={handleSubmit}>
                
                <FormInput  
                label="Email"
                type ="email" 
                required 
                onChange={handleChange} 
                name="email"
                value={email}
                />

                <FormInput  
                label="Password"
                type ="password" 
                required  
                onChange={handleChange} 
                name="password"
                value={password}
                />
                <div className='buttons-container'>
                    <Button type='submit'> Sign In</Button>
                    <h1 className='none'>Sign In With Your Google Account</h1>
                    <Button type='button' buttonType={Button_TYPE.google} onClick={signInWithGoogle}>Google sign in</Button>
                </div>
                
            </form>
        </div>
    )
}
export default SignInForm;