import React from 'react';
import { Container } from '@mui/material';
import TimerBlock from '../TimerBlock/TimerBlock';
import './App.module.css';

const App = () => {
    return <Container
        sx={{
            mt: '50px',
        }}
    >
        <TimerBlock />
    </Container>
}

export default App;
