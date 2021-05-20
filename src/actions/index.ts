const addMessageToList = (newMessage: string) => {
    return {
        type: 'ADD_MESSAGE',
        payload: newMessage
    }
}

export {
    addMessageToList
}