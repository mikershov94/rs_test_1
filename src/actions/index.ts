const addMessageToList = (newMessage: TMessage) => {
    return {
        type: 'ADD_MESSAGE',
        payload: newMessage
    }
}

const updateTime = () => {
    return {
        type: 'UPDATE_TIME'
    }
}

export {
    addMessageToList,
    updateTime
}