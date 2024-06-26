import React from "react";

import { SvgIcon } from "@material-ui/core";

const ListOfWaste = React.forwardRef((props, ref) => {
    return (
        <SvgIcon ref={ref} {...props}>
            <path d="M22,10v12H2V10l7-3v2l5-2l0,0l0,3H22z M17.2,8.5L18,2h3l0.8,6.5H17.2z M11,18h2v-4h-2V18z M7,18h2v-4H7V18z M17,14h-2v4h2 V14z" />
        </SvgIcon>
    )
})

export default ListOfWaste