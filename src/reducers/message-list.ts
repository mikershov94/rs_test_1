/// <reference path="../types.d.ts" />

const addMessage = (state: TStateApp, message: TMessage) => {
    return [
        ...state.messages,
        message
    ]
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