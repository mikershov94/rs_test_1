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