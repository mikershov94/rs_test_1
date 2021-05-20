import React from 'react';
import './message-list.sass';

const MessageList = (props: any) => {
    const items = props.data.map((item: any) => {
        const { id } = item;
        return();
    })

    return(
        <div className="message-list">
        
        </div>
    );
}

export default MessageList