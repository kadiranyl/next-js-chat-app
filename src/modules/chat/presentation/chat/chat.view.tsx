'use client';

import {
    ChatHeader,
    ChatMessagesContainer,
    FormMessageSenderContainer,
} from '@modules/chat/components';

export function ChatView() {
    return (
        <>
            <ChatHeader />
            <ChatMessagesContainer />
            <FormMessageSenderContainer />
        </>
    );
}
