'use client';

import {
    ChatInformation,
    ChatMessagesContainer,
    FormMessageSenderContainer,
} from '@modules/chat/components';

export function ChatView() {
    return (
        <>
            <ChatInformation />
            <ChatMessagesContainer />
            <FormMessageSenderContainer />
        </>
    );
}
