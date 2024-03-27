import React from "react";

const Button = props => {
    const {
        label
    } = props

    return (
        <Button variant="contained">
            {label}
        </Button>
    )
}

Button.defaultProps = {
    type: "primary",
    color: "blue",
    onClick: () => { }
}

export default Button