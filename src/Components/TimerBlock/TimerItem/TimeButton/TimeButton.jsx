import React from "react";
import { Button } from "@mui/material";

const TimeButton = ({onFunc, calling}) => {
    return (
        <Button variant='outlined' onClick={onFunc}>{calling}</Button>
    );
}

export default TimeButton;