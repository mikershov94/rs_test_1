import { updateMessageList } from './message-list';

const initState: TStateApp = {
    messages: [],
    time: new Date()
}

const reducer = (state: TStateApp = initState, action: TAddMessageAction) => {
    return {
        messages: updateMessageList(state, action),
        time: updateTime(state, action)
    }
}

export default reducer;