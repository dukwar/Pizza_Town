import React from "react";
import classNames from "classnames";


function Button({className, onCLick, outline, children}) {

    const classes = classNames(
        'button',
        className,
        {'button--outline' : outline}

    )

    return (

        <button  className={classes}>
            {children}
        </button>





    )

}


export default Button