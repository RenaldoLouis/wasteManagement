import React from "react";
import TextField from "@material-ui/core/TextField";

const Form = props => {
    const {
        id,
        value,
        label,
        placeholder,
        onChange,
        error,
        fullWidth,
        type
    } = props

    return (
        <TextField
            id={id}
            value={value}
            label={label}
            placeholder={placeholder}
            onChange={onChange}
            error={error}
            fullWidth={true}
            variant="filled"
            type={type}
        />
    )
}

export default Form