const reducer = (state: any = 0, action: any) => {

    switch (action.type) {
        case 'ADD_MESSAGE':
            return state.messages.push(action.message);

        default:
            return state;
    }

}