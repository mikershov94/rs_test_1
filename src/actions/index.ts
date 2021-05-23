const addMessageToList = (newMessage: TMessage) => {
    return {
        type: 'ADD_MESSAGE',
        payload: newMessage
    }
}

export {
    addMessageToList
}