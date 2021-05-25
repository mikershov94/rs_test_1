type TMessage = {
    id: number,
    text: string
}

type TStateApp = {
    messages: TMessage[],
    time: Date
}

type TAddMessageAction = {
    type: string,
    payload?: TMessage
}

type TUpdateTimeAction = {
    type: string
}

type TAddMessageCreator = (newMessage: TMessage) => TAddMessageAction
type TUpdateTimeCreator = () => TUpdateTimeAction


type TMessageListProps = {
    messages?: TMessage[]
}

type TMessageListState = {
    messages?: TMessage[]
}

type TMessageListItemProps = {
    id?: number
    message?: TMessage
}

type TFormProps = {
    onAddMessage: TAddMessageCreator
};
type TFormState = {
    readonly text: string
};

type TCommentsPageProps = {
    onAddMessage?: TAddMessageCreator,
    messages?: TMessage[]
}

type TCommentsPageState = {
    messages: TMessage[]
}

type TTimerProps = {
    time?: Date
    updateTime?: TUpdateTimeCreator
}