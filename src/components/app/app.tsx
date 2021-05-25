import React from 'react';
import './app.sass';

import CommentsPage from '../comments-page';
import TimerPage from '../timer-page';

const App = () => {
    return (
        <div className="app-container">
            <TimerPage />
        </div>
    );
}

export default App;