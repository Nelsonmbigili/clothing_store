import  {StandardButton,InvertedButton,GoogleButton} from './button.style.jsx'



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
    

const Button = ({children, buttonType, ...otherProps })=>{
    const UseButton = getButton(buttonType);
    return (
        <UseButton {...otherProps}>{children}</UseButton>
    )
}
export default Button;