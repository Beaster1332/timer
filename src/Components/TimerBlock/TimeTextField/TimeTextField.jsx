import React from "react";
import { TextField } from "@mui/material";

const TimeTextField = ({label, value, setValue}) => {

    const handleChange = (e) => {
        setValue(e.target.value);
    }

    return (
        <TextField
            id="outlined-number"
            label={label}
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