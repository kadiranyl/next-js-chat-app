'use client';

import Image from 'next/image';
import Link from 'next/link';
import {
    AiOutlineCalendar,
    AiOutlineHome,
    AiOutlineMessage,
    AiOutlineSearch,
    AiOutlineSetting,
} from 'react-icons/ai';

export function SidebarView() {
    return (
        <aside className="flex flex-col items-center justify-between p-4 pb-6 bg-white shadow-xl">
            <div className="flex flex-col gap-12">
                <Image
                    src="/img/logo.svg"
                    alt="Logo"
                    width={56}
                    height={56}
                />
                <nav className="flex flex-col items-center gap-8">
                    <Link href="">
                        <AiOutlineHome size="26px" />
                    </Link>
                    <Link href="">
                        <AiOutlineMessage size="26px" />
                    </Link>
                    <Link href="">
                        <AiOutlineSearch size="26px" />
                    </Link>
                    <Link href="">
                        <AiOutlineCalendar size="26px" />
                    </Link>
                </nav>
            </div>
            <Link href="">
                <AiOutlineSetting size="26px" />
            </Link>
        </aside>
    );
}
