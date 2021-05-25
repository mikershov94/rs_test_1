import React from 'react';
import './comments-page.sass';
import Form from '../form';
import MessageList from '../message-list';
import { bindActionCreators } from 'redux';
import { addMessageToList } from '../../actions';
import { connect } from 'react-redux'

const mapStateToProps = (state: TStateApp) => {
    return {
        messages: state.messages
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return bindActionCreators({
        onAddMessage: addMessageToList
    }, dispatch)
}

class CommentsPage extends React.Component<TCommentsPageProps, TCommentsPageState> {
    render() {
        return(
            <div className="comments-page">
                <Form onAddMessage={this.props.onAddMessage}/>
                <MessageList messages={this.props.messages}/>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CommentsPage);