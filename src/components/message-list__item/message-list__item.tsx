import React from 'react';

import './message-list__item.sass';

const MessageListItem = ({text}: any) => {
    return(
        <div className="message-list__item">
            <p>{text}</p>
        </div>
    );
}

export default MessageListItem;