import React from 'react';
import MessageListItem from '../message-list__item';
import './message-list.sass';
import { connect } from 'react-redux';

const mapStateToProps = (state: TStateApp) => {
    return {
        messages: state.messages
    }
}

class MessageList extends React.Component<TMessageListProps, TMessageListState> {
    state = {
        messages: this.props.messages
    }

    componentDidUpdate() {
        this.setState({
            messages: this.props.messages
        })
    }

    render() {
        const items = this.state.messages.map((message: TMessage) => {
            const { id } = message;
            return(<MessageListItem key={id} message={message} />)
        })
        return(
            <div className="message-list">
                {items}
            </div>
        )
    }
}

export default connect(mapStateToProps)(MessageList)