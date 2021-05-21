import React from 'react';
import MessageList from './message-list';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

const mapStateToProps = (state: any) => {
    return {
        messages: state.messages
    }
}

class MessageListContainer extends React.Component<any> {
    render() {
        return(<MessageList messages={this.props.messages}/>);
    }
}

export default connect(mapStateToProps)(MessageListContainer);