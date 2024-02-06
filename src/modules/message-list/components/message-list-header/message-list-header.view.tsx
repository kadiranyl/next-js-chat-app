'use client';

import { AiOutlinePlus } from 'react-icons/ai';
import { Badge, Button } from '@core/lib/ui';

export function MessageListHeaderView() {
    return (
        <div className="h-full flex justify-between items-center gap-4">
            <div className="flex items-center gap-3">
                <h2 className="text-xl font-semibold">Messages</h2>
                <Badge variant="secondary">12</Badge>
            </div>
            <Button size="icon">
                <AiOutlinePlus className="w-6 h-6" />
            </Button>
        </div>
    );
}
