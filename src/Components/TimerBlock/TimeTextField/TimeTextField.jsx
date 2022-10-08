import React, { useState } from "react";
import { TextField } from "@mui/material";

const TimeTextField = ({type}) => {

    const [value, setValue] = useState(0)

    const handleChange = (e) => {
        setValue(e.target.value);
    }

    return (
        <TextField
            id="outlined-number"
            label={type}
            type="number"
            InputLabelProps={{
                shrink: true,
            }}
            value={value ? value : ''}
            onChange={handleChange}
        />
    )
}

export default TimeTextField;