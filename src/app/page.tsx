import { PageWrapper } from '@common/layouts';
import { ChatContainer } from '@modules/chat/presentation';
import { MessageListContainer } from '@modules/message-list/presentation';

export default function Home() {
    return (
        <PageWrapper>
            <MessageListContainer />
            <ChatContainer />
        </PageWrapper>
    );
}
