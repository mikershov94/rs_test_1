import React from 'react';
import MessageListItem from '../message-list__item';
import './message-list.sass';

const MessageList = (props: any) => {
    const items = props.data.map((item: any) => {
        const { id } = item;
        return(<MessageListItem key={id} {...item} />);
    })

    return(
        <div className="message-list">
            {items}
        </div>
    );
}

export default MessageList