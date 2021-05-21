import React from 'react';

import './form.sass';

type FormProps = {
    onAddMessage: any
};
type FormState = {
    readonly text: string
};

class Form extends React.Component<FormProps, FormState> {
    state = {
        text: ''
    }

    onTextfieldChange = (e: React.FormEvent<HTMLInputElement>) => {
        this.setState({
            text: e.currentTarget.value
        })
    }

    onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        this.props.onAddMessage(this.state.text);
    }

    render() {

        return(
            <form className="form"
                  onSubmit={this.onSubmit}>
                <input onChange={this.onTextfieldChange}
                       type="text"
                       className="form__textfield"
                       placeholder="Введите сообщение" />
                <button className="form__button">Отправить</button>
            </form>
        );
    }
}

export default Form;