import { Box } from "@mui/material";
import React, { ReactNode } from "react";

export type IconWrapperProps = {
    children: ReactNode;
    color?: string;
}

const IconWrapper = (props: IconWrapperProps) => {
    const { children, color } = props;
    return (<Box border={`1px solid ${color ?? " white"}`} borderRadius={1} p={1}>
        {children}
    </Box>)
}

export default IconWrapper;