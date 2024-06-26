import React from "react";

import { SvgIcon } from "@material-ui/core";

const DashboardIcon = React.forwardRef((props, ref) => {
    return (
        <SvgIcon ref={ref} {...props}>
            <path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z" />
        </SvgIcon>
    )
})

export default DashboardIcon