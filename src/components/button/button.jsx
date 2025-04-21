import  {StandardButton,InvertedButton,GoogleButton, ButtonSpinner} from './button.style.jsx'



export const Button_TYPE = {
    standard: 'standard',
    google: 'google-sign-in',
    inverted: 'inverted',
};

const getButton = (buttonType = Button_TYPE.standard) => (
    {
        [Button_TYPE.standard]: StandardButton,
        [Button_TYPE.google]: GoogleButton,
        [Button_TYPE.inverted]: InvertedButton,
    }[buttonType]
)
    

const Button = ({children, buttonType, isLoading, ...otherProps })=>{
    const UseButton = getButton(buttonType);
    return (
        <UseButton disabled={isLoading} {...otherProps}>
        {isLoading? <ButtonSpinner/> : children}
        </UseButton>
    )
}
export default Button;