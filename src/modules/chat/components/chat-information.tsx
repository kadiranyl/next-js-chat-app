import Image from 'next/image';
import { Button } from '@core/lib/ui';
import { AiOutlinePhone } from 'react-icons/ai';

export function ChatInformation() {
    return (
        <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
                <Image
                    src="/img/user.png"
                    alt="Avatar"
                    width={48}
                    height={48}
                    objectFit="cover"
                    className="rounded-xl"
                />
                <div className="flex flex-col">
                    <span className="text-xl font-semibold">Joe doe</span>
                    <div className="flex items-center gap-1.5">
                        <div className="w-[10px] h-[10px] rounded-full bg-green-500"></div>
                        <span className="text-sm text-gray-500 font-medium">
                            Online
                        </span>
                    </div>
                </div>
            </div>
            <Button
                size="lg"
                className="gap-2">
                <AiOutlinePhone size={24} />
                <span className="text-lg">Call</span>
            </Button>
        </div>
    );
}
