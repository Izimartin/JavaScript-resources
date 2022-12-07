export const Button = ({ color, size, text, ...props }) => {
    return (
        <button style={{
            padding: size === 'large' ? '32px' : '8px',
            fontSize: size === 'large' ? '32px' : '16px',
            background: color,
        }} {...props} >
            {text}
        </button>
    );
}

export const DangerButton = props => {
    return (
        <Button {...props} color="red"/>
    );
}

export const BigSuccessButton = props => {
    return (
        <Button {...props} color="green" size="large"/>
    );
}

// import {DangerButton, BigSuccessButton } from '';
// <DangerButton text="Don't do it" />