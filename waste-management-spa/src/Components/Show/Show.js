import React, { Children, memo } from "react";

export const Show = memo(props => {
    let when = null;
    let otherwise = null;

    Children.forEach(props?.children, children => {
        if (children?.props?.isTrue === undefined) {
            otherwise = children;
        } else if (!when && children?.props?.isTrue === true) {
            when = children;
        }
    });

    return when || otherwise;
})

Show.When = ({ isTrue, children }) => (isTrue && children) || <React.Fragment></React.Fragment >;
Show.Else = ({ render, children }) => render || children || <React.Fragment></React.Fragment>;