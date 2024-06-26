import React from "react";

import { SvgIcon } from "@material-ui/core";

const ListOfSalesInvoiceIcon = React.forwardRef((props, ref) => {
    return (
        <SvgIcon ref={ref} {...props}>
            <path d="M19.5,3.5L18,2l-1.5,1.5L15,2l-1.5,1.5L12,2l-1.5,1.5L9,2L7.5,3.5L6,2v14H3v3c0,1.66,1.34,3,3,3h12c1.66,0,3-1.34,3-3V2 L19.5,3.5z M19,19c0,0.55-0.45,1-1,1s-1-0.45-1-1v-3H8V5h11V19z" />
        </SvgIcon>
    )
})

export default ListOfSalesInvoiceIcon