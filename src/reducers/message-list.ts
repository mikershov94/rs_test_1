/// <reference path="../types.d.ts" />

const addMessage = (state: TStateApp, message: TMessage) => {;
    let messages: Array<TMessage> = state.messages
    messages.push(message)
    
    return messages;
}

const updateMessageList = (state: TStateApp, action: TAddMessageAction) => {
    if (state === undefined) {
        return []
    }
    
    switch (action.type) {
        case 'ADD_MESSAGE':
            return addMessage(state, action.payload)
    
        default:
            return state.messages;
    }
    
}

export {
    updateMessageList,
}