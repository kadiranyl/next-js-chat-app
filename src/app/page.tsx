import { PageWrapper } from '@common/layouts';
import { ChatContainer } from '@modules/chat/presentation';
import { MessageListContainer } from '@modules/message-list/presentation';

export default function Home() {
    return (
        <PageWrapper>
            <div className="h-full flex">
                <div className="w-[350px] border-r border-gray-200">
                    <MessageListContainer />
                </div>
                <div className="flex-1">
                    <ChatContainer />
                </div>
            </div>
        </PageWrapper>
    );
}
