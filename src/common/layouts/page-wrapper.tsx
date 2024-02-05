'use client';

import { PropsWithChildren } from 'react';
import { SidebarContainer } from '@common/layouts';

export function PageWrapper({ children }: PropsWithChildren) {
    return (
        <>
            <div className="h-screen flex">
                <SidebarContainer />
                <main className="flex-1">{children}</main>
            </div>
        </>
    );
}
