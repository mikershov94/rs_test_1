import React from 'react';

import './form.sass';

class Form extends React.Component<TFormProps, TFormState> {
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
        const messageId = Math.floor(Math.random() * 100)
        this.props.onAddMessage({ id: messageId, text: this.state.text });
        this.setState({
            text: ''
        })
    }

    render() {

        return(
            <form className="form"
                  onSubmit={this.onSubmit}>
                <input onChange={this.onTextfieldChange}
                       type="text"
                       className="form__textfield"
                       placeholder="Введите сообщение"
                       value={this.state.text} />
                <button className="form__button">Отправить</button>
            </form>
        );
    }
}

export default Form;