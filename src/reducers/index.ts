import { updateMessageList } from './message-list';

const reducer = (state: any, action: any) => {
    return {
        messages: updateMessageList(state, action)
    }
}