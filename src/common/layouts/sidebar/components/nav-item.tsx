'use client';

import { ReactNode } from 'react';
import Link from 'next/link';
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from '@common/components/ui';

type Props = {
    link: string;
    icon: ReactNode;
    tooltip: string;
};

export function NavItem({ link, icon, tooltip }: Props) {
    return (
        <Link href={link}>
            <TooltipProvider>
                <Tooltip>
                    <TooltipTrigger>{icon}</TooltipTrigger>
                    <TooltipContent>
                        <p>{tooltip}</p>
                    </TooltipContent>
                </Tooltip>
            </TooltipProvider>
        </Link>
    );
}
