import React from "react";
import { Button } from "@mui/material";

const TimeButton = ({onFunc, job}) => {
    return (
        <Button variant='outlined' onClick={onFunc}>{job}</Button>
    );
}

export default TimeButton;