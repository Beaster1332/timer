import React from "react";
import TimeButton from "./TimeButton/TimeButton.jsx";
import classes from './TimerItem.module.css';

const TimerItem = ({ hours, minutes, seconds }) => {

    const getPadTime = (time) => {
        return time.toString().padStart(2, '0');
    }

    const startTimer = () => {

    }
    
    const stopTimer = () => {

    }
    
    const resetTimer = () => {

    }

    return <div className={classes.timerItemBlock}>
        <div className={classes.timeBlock}>
            <span className={classes.timeItem}>{getPadTime(hours)}</span>
            <span className={classes.timeItem}>:</span>
            <span className={classes.timeItem}>{getPadTime(minutes)}</span>
            <span className={classes.timeItem}>:</span>
            <span className={classes.timeItem}>{getPadTime(seconds)}</span>
        </div>
        <div className={classes.buttonsBlock}>
            <TimeButton onFunc={startTimer} job={'Start'}/>
            <TimeButton onFunc={stopTimer} job={'Stop'}/>
            <TimeButton onFunc={resetTimer} job={'Reset'}/>
        </div>
    </div>
}

export default TimerItem;