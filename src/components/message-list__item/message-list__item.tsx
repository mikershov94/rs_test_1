import React from 'react';

import './message-list__item.sass';

const MessageListItem = (props: TMessageListItemProps) => {
    return(
        <div className="message-list__item">
            <p>{props.message.text}</p>
        </div>
    );
}

export default MessageListItem;