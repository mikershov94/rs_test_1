import { updateMessageList } from './message-list';

const defaultState = {
    messages: [
        {id: 9, text: 'орор'}
    ]
}

const reducer = (state: TStateApp = defaultState, action: TAddMessageAction) => {
    return {
        messages: updateMessageList(state, action)
    }
}

export default reducer;