import React from 'react';

export const withStuffClass = (Comp) => {
    class Stuff extends React.Component {
        addStuff = () => {}

        render() {
            return (
                <Comp
                    ref={this.props.innerRef}
                    addStuff={this.addStuff}
                    {...this.props}
                />
            );
        }
    }

    const hocComponent = React.forwardRef((props, ref) => {
        return (
            <Stuff
                innerRef={ref}
                {...props}
            />
        );
    });

    return hocComponent;
};
// ===========================================================
export const withStuffFunction = (Comp) => {
    const hocComponent = React.forwardRef((props, ref) => {
        return (
            <Comp
                ref={ref}
                addStuff={() => {}}
                {...props}
            />
        );
    });

    return hocComponent;
};