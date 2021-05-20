import React from 'react';
import './form.sass';

type FormProps = {};
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

    render() {
        console.log(this.state.text);

        return(
            <form className="form">
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