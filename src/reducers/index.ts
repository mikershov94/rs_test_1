import { updateMessageList } from './message-list';
import { updateTime } from './timer';

const reducer = (state: TStateApp, action: TAddMessageAction) => {
    return {
        messages: updateMessageList(state, action),
        time: updateTime(state, action)
    }
}

export default reducer;