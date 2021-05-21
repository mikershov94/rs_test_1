const addMessage = (state: any, message: string) => {
    let messages: Array<string> = [];
    messages.push(message)
    console.log(messages)

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