import React from 'react';

export const ButtonForwardRef = React.forwardRef((props, ref) => (
    <div ref={ref.div} className="button">
        <button ref={ref.button}><span>Button</span></button>
        <br />
    </div>
));
// ===========================================================
export const ButtonPropsRef = (props) => (
    <div ref={props.divRef} className="button">
        <button ref={props.buttonRef}><span>Button</span></button>
        <br />
    </div>
);