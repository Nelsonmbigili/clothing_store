import './button.scss'

const Button_TYPE ={
    google: 'google-sign-in',
    inverted: 'inverted',
}

const Button = ({children, buttonType, ...otherProps })=>{
    return (
        <button className={`button-container ${Button_TYPE[buttonType]}`} {...otherProps}>{children}</button>
    )
}
export default Button;