import { updateMessageList } from './message-list';

const initState: TStateApp = {
    messages: []
}

const reducer = (state: TStateApp = initState, action: TAddMessageAction) => {
    return {
        messages: updateMessageList(state, action)
    }
}

export default reducer;