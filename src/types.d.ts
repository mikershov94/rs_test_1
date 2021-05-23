type TMessage = {
    id: number,
    text: string
}

type TStateApp = {
    messages: Array<TMessage>
}

type TAddMessageAction = {
    type: string,
    payload?: TMessage
}

type TAddMessageCreator = (newMessage: TMessage) => TAddMessageAction

type TFormContainerProps = {
    onAddMessage: TAddMessageCreator
}


type TMessageListProps = {
    messages?: Array<TMessage>
}

type TMessageListState = {
    messages: Array<TMessage>
}

type TMessageListItemProps = {
    id?: number
    message?: TMessage
}