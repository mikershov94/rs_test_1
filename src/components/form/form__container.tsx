/// <reference path="../../types.d.ts" />

import React from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import { addMessageToList } from '../../actions';
import Form from './form';

const mapStateToProps = (state: TStateApp) => {
    return {}
}

const mapDispatchToProps = (dispatch: any) => {
    return bindActionCreators({
        onAddMessage: addMessageToList
    }, dispatch)
}

class FormContainer extends React.Component<TFormContainerProps, {}> {

    render() {
        
        return <Form onAddMessage={this.props.onAddMessage} />
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FormContainer)