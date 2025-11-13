import type { LinkItem } from '@/constants/links';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@radix-ui/react-collapsible'
import { ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

type Props = {
    link: LinkItem;
    handleShowMobileMenu: () => void;
}

export default function MobileCollaspMenu({ link, handleShowMobileMenu }: Props) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <Collapsible
            open={isOpen}
            onOpenChange={setIsOpen}
            className='group/collapsible w-full'
        >
            <CollapsibleTrigger
            className='bg-softperl-primary w-full border-none text-2xl font-bold relative flex justify-center items-center'
            >{link.name}
            <ChevronDown 
            className="absolute translate-x-30 transition-transform group-data-[state=open]/collapsible:rotate-180" 
            />
            </CollapsibleTrigger>
            <CollapsibleContent 
            className='flex flex-col items-center gap-2 border-y-2 border-softperl-accent-dark text-lg font-medium transition-all bg-softperl-accent-light'
            >
                {
                    link.modalList.map((item, index) =>
                        < Link
                            key={index}
                            onClick={handleShowMobileMenu}
                            to={`${link.path.replace("#", '')}/${item.path}`}
                            className="cursor-pointer hover:text-accent-dark hover:bg-softperl-secondary w-full py-2 inline-block transition-all text-2xl font-bold text-center "
                        >
                            {item.title}
                        </Link>
                    )
                }
            </CollapsibleContent>
        </Collapsible >
    )
}