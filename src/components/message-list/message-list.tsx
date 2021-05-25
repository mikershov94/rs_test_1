import React from 'react';
import MessageListItem from '../message-list__item';
import './message-list.sass';

class MessageList extends React.Component<TMessageListProps> {
    render() {
        return(
            <div className="message-list">
                {this.props.messages.map((message: TMessage, index: number) =>{
                    return(<MessageListItem key={index} message={message}/>)
                })}
            </div>
        )
    }
}

export default MessageList;