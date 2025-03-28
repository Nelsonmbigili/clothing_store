import {useState} from 'react';
import  FormInput from '../form-input/form-input'
import Button from '../button/button'
import './sign-in.scss'
import {
     signInAuthWithEmailAndPassword,
     signInWithGooglePopup
    } from '../../utils/firebase/firebase'



const defaultformFields ={
    email: '',
    password: ''
}

const SignInForm = ()=>{
    const [formFields, setFormFields]= useState(defaultformFields);
    const {email ,password} = formFields;
    console.log(formFields);

    const resetFormFields=()=> {
        setFormFields(defaultformFields);
    }

    const signInWithGoogle= async()=>{
        const {user} = await signInWithGooglePopup();
        }

    const handleSubmit = async(event)=> {
        event.preventDefault();
        console.log("handleSubmit triggered");
    
        try{
            const respose = await signInAuthWithEmailAndPassword(email,password);
            console.log(respose);
            resetFormFields();
        }catch(error)
        {
            if(error.code==='auth/invalid-credential')
            {
                console.log(error);
                alert("Invalid credentials")

            }else if(error.code==='auth/wrong-password'){
                console.log(error);
                alert("Incorrect Password for that email")
            }
            else if(error.code==='auth/user-not-found'){
                console.log(error);
                alert("User does not exist!")
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
            <h1>Sign Up With Your Email and Password</h1>
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
                    <Button type='button' buttonType='google' onClick={signInWithGoogle}> Google sign in</Button>
                </div>
                
            </form>
        </div>
    )
}
export default SignInForm;