const addMessage = (state: any, message: string) => {
    const messages: Array<string> = state.mesages;
    messages.push(message);

    return { messages }
}

const updateMessageList = (state: any, action: any) => {
    
    switch (action.type) {
        case 'ADD_MESSAGE':
            return addMessage(state, action.payload)
    
        default:
            return state;
    }
    
}

export {
    updateMessageList,
}