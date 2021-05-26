import React, { useState } from 'react';
import './app.sass';

import CommentsPage from '../comments-page';
import TimerPage from '../timer-page';
import { SwipeEventData, useSwipeable } from 'react-swipeable';

const App = ( ) => { 

    const [page, setPage] = useState('comment-page');
    const handlers = useSwipeable({
        onSwipedLeft: (e: SwipeEventData) => {
            if (page == 'comment-page') {
                setPage('timer-page');
            }
        },

        onSwipedRight: (e: SwipeEventData) => {
            if (page == 'timer-page') {
                setPage('comment-page');
            }
        }
    })

    
    let pageComponent = <CommentsPage />
    if (page == 'timer-page') pageComponent = <TimerPage />  

    return(
        <div className="app-container" {...handlers} >
            {pageComponent}
        </div>  
    );
}


export default App;