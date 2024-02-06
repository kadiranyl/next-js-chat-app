'use client';

import { Badge } from '@common/components/ui';
import Image from 'next/image';

type Props = {
    active?: boolean;
};

export function MessageListCard({ active }: Props) {
    return (
        <div
            className={`px-4 py-3 flex justify-between rounded-2xl hover:bg-indigo-50 transition-all cursor-pointer ${active ? 'bg-indigo-50' : ''}`}>
            <div className="flex gap-3">
                <div>
                    <Image
                        src="/img/user.png"
                        alt="Avatar"
                        width={48}
                        height={48}
                        objectFit="cover"
                        className="rounded-full"
                    />
                </div>
                <div className="flex flex-col">
                    <span className="font-medium">Joe doe</span>
                    <span className="text-sm text-gray-400">
                        Haha oh man 🔥
                    </span>
                    <div className="mt-2 flex items-center gap-2">
                        <Badge>Question</Badge>
                        <Badge>Bug</Badge>
                    </div>
                </div>
            </div>
            <span className="text-gray-400">12m</span>
        </div>
    );
}
