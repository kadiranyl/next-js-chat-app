'use client';

import { Input } from '@common/components/ui';
import {
    MessageListCard,
    MessageListHeaderContainer,
} from '@modules/message-list/components';

export function MessageListView() {
    return (
        <div className="h-full overflow-y-auto max-h-full">
            <div className="sticky top-0 bg-white px-6 py-4 border-b border-gray-200">
                <MessageListHeaderContainer />
            </div>
            <div className="px-6 py-4">
                <Input
                    placeholder="Search"
                    className="bg-gray-100"
                />
            </div>
            <div className="px-6 pb-4 flex flex-col gap-2">
                <MessageListCard />
                <MessageListCard />
                <MessageListCard active={true} />
                <MessageListCard />
                <MessageListCard />
                <MessageListCard />
                <MessageListCard />
                <MessageListCard />
                <MessageListCard />
            </div>
        </div>
    );
}
