import React from 'react';
import './timer.sass';

const Timer = () => {
    return(
        <div className="timer">{new Date().toLocaleTimeString()}</div>
    );
};

export default Timer;