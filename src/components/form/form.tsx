import React from 'react';
import './form.sass';

type FormProps = {};
type FormState = {
    text: string
};

class Form extends React.Component<FormProps, FormState> {


    render() {
        return(
            <div className="form">
                <input type="text" className="form__textfield" placeholder="Введите сообщение" />
                <button className="form__button">Отправить</button>
            </div>
        );
    }
}

export default Form;