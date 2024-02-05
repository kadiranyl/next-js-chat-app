'use client';

import {
    MessageListCard,
    MessageListHeaderContainer,
} from '@modules/message-list/components';

export function MessageListView() {
    return (
        <>
            <MessageListHeaderContainer />
            <MessageListCard />
            <MessageListCard />
            <MessageListCard />
        </>
    );
}
