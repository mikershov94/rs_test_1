import React from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import { addMessageToList } from '../../actions';
import Form from './form';

const mapStateToProps = (state: any) => {
    return {
        messages: state.messages
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return bindActionCreators({
        onAddMessage: addMessageToList
    }, dispatch)
}

class FormContainer extends React.Component<{onAddMessage: any}, {}> {

    render() {

        return <Form />
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FormContainer)