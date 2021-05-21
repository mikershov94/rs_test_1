const addMessage = (state: any, message: string) => {;
    let messages: Array<string> = state.messages
    messages.push(message)
    
    return messages;
}

const updateMessageList = (state: any, action: any) => {
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