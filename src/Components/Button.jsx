import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";


function Button({className, onCLick, outline, children}) {

    const classes = classNames(
        'button',
        className,
        {'button--outline' : outline}

    )

    return (

        <button onClick={onCLick}  className={classes}>
            {children}
        </button>
    )
}

Button.propTypes = {
    onClick: PropTypes.func
}


export default Button