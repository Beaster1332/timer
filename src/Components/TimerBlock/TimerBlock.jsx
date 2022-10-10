import { Container } from "@mui/material";
import React, { useState } from "react";
import TimeTextField from "./TimeTextField/TimeTextField.jsx";
import TimerItem from "./TimerItem/TimerItem.jsx";

const TimerBlock = () => {

    const [hoursValue, setHoursValue] = useState(0);
    const [minutesValue, setMinutesValue] = useState(0);
    const [secondsValue, setSecondsValue] = useState(0);

    return <Container>
        <Container
            sx={{
                display: 'flex',
                justifyContent: 'space-between'
            }}
        >
            <TimeTextField label={'Hours'} value={hoursValue} setValue={setHoursValue} />
            <TimeTextField label={'Minutes'} value={minutesValue} setValue={setMinutesValue} />
            <TimeTextField label={'Seconds'} value={secondsValue} setValue={setSecondsValue} />
        </Container>
        <div>
            <TimerItem hours={hoursValue} minutes={minutesValue} seconds={secondsValue} />
        </div>
    </Container>
}

export default TimerBlock;