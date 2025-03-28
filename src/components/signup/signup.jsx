import {useState} from 'react';
import {createAuthUserWithEmailAndPassword, createUserDocumentFromAuth} from '../../utils/firebase/firebase'
import  FormInput from '../form-input/form-input'
import Button from '../button/button'
import './signup.scss'


const defaultformFields ={
    displayName: '',
    email: '',
    password: '',
    confirmPassword:''
}

const SignUpForm = ()=>{
    const [formFields, setFormFields]= useState(defaultformFields);
    const {displayName, email ,password,confirmPassword} = formFields;
    console.log(formFields);

    const resetFormFields=()=> {
        setFormFields(defaultformFields);
    }

    const handleSubmit = async(event)=> {
        event.preventDefault();
        console.log("handleSubmit triggered");
        if(password!==confirmPassword){
            alert("Passwords do not match");
            return;
        }
        try{
            const {user} = await createAuthUserWithEmailAndPassword(email,password);
            await createUserDocumentFromAuth(user,{displayName});
            console.log("User created successfully, resetting form fields.");
            resetFormFields();
        }catch(error)
        {
            if(error.code==='auth/email-already-in-use'){
                alert("Can not create user, Email Already in use")
                return;
            }
            console.log("User creation encountered an error: ", error)
        }
    };


    const handleChange = (event)=>{
        const {name, value} = event.target;
        setFormFields({...formFields,[name]:value})
    };

    return(
        <div className='sign-up-container'>
          <h2>Don't have an account yet?</h2>
            <h1>Sign Up With Your Email and Password</h1>
            <form onSubmit={handleSubmit}>
                <FormInput 
                label = "Display Name" 
                type ="text" 
                required 
                onChange={handleChange} 
                name="displayName" 
                value={displayName}/>

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

                <FormInput  
                label="Confirm Password"
                type ="password" 
                required onChange={handleChange} 
                name="confirmPassword"
                value={confirmPassword}
                />
                <Button type='submit'> Sign Up</Button>
            </form>
        </div>
    )
}
export default SignUpForm;