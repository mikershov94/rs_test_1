import React from 'react';
import './app.sass';

import CommentsPage from '../comments-page';

const App = () => {
    return (
        <div className="app-container">
            <CommentsPage />
        </div>
    );
}

export default App;