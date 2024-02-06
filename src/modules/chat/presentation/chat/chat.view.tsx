'use client';

import {
    ChatInformation,
    ChatMessagesContainer,
    FormMessageSenderContainer,
} from '@modules/chat/components';

export function ChatView() {
    return (
        <>
            <div className="h-[80px] px-6 py-4 border-b border-gray-200">
                <ChatInformation />
            </div>
            <ChatMessagesContainer />
            <FormMessageSenderContainer />
        </>
    );
}
