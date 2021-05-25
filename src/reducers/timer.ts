const updateTime = (state: TStateApp, action: TUpdateTimeAction) => {
    if (state == undefined) {
        return new Date();
    };

    switch (action.type) {
        case 'UPDATE_TIME':
            
            return new Date();

        default:
            return state.time
    };
}

export {
    updateTime
}