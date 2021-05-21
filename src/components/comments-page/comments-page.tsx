import React from 'react';
import './comments-page.sass';
import FormContainer from '../form/form__container';
import MessageListContainer from '../message-list/message-list__container';

const CommentsPage = () => {
    return(
        <div className="comments-page">
            <FormContainer />
            <MessageListContainer />
        </div>
    );
}

export default CommentsPage;