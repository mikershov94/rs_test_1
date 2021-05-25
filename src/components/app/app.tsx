import React from 'react';
import './app.sass';

import CommentsPage from '../comments-page';
import TimerPage from '../timer-page';
import { SwipeEventData, useSwipeable } from 'react-swipeable';

const App = ( ) => { 

    const handlers = useSwipeable({
        onSwipedLeft: (e: SwipeEventData) => {
            console.log('свайп')
        }
    })

    return(
        <div className="app-container" {...handlers} >
            <CommentsPage />
        </div>  
    );
}


export default App;