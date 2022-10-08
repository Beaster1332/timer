import { Container } from "@mui/material";
import React from "react";
import TimeTextField from "./TimeTextField/TimeTextField.jsx";

const TimerBlock = () => {
    return <Container
        sx={{
            display: 'flex',
            justifyContent: 'space-between'
        }}
    >
        <TimeTextField type={'Hours'} />
        <TimeTextField type={'Minutes'} />
        <TimeTextField type={'Seconds'} />
    </Container>
}

export default TimerBlock;