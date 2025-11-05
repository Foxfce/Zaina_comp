import type { LinkNav } from '@/constants/links';
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger
} from '@/components/ui/navigation-menu'
import { Link } from 'react-router-dom';

type Props = {
    links: LinkNav;
}

function NavMenu({ links }: Props) {
    return (
        <NavigationMenu className="hidden lg:flex">
            <NavigationMenuList className='cursor-pointer flex gap-3 h-full justify-center items-center align-middle transition-all'>
                {links.map((link, index) => (
                    <NavigationMenuItem key={index}>
                        {
                            link.modalList.length > 0 ? (
                                <>
                                    <NavigationMenuTrigger className='relative transition-all bg-transparent hover:text-primary  text-softperl-primary p-0 text-xl'>{link.name}</NavigationMenuTrigger>
                                    <NavigationMenuContent className='bg-softperl-accent-light p-4 w-fit'>
                                        <ul className="grid sm:w-[150px] md:w-[200px] md:grid-cols-1 lg:w-[300px]"
                                        >
                                            {link.modalList.map((component) => (
                                                <ListItem
                                                    key={component.title}
                                                    title={component.title}
                                                    href={component.path}
                                                >
                                                    {/* {component.description} */}
                                                </ListItem>
                                            ))}
                                        </ul>
                                    </NavigationMenuContent>
                                </>
                            ) : (
                                <NavigationMenuLink asChild className={`transition-all bg-transparent`}>
                                    <Link to={link.path} className='text-xl text-softperl-primary hover:text-primary'>{link.name}</Link>
                                </NavigationMenuLink>
                            )

                        }
                    </NavigationMenuItem>
                ))
                }
            </NavigationMenuList>
        </NavigationMenu>
    )
}

function ListItem({
    title,
    children,
    href,
    ...props
}: React.ComponentPropsWithoutRef<"li"> & { href: string }) {
    return (
        <li {...props}>
            <NavigationMenuLink asChild>
                <Link to={href} className='hover:text-white transition-all hover:bg-secondary active:bg-primary'>
                    <div className="leading-none text-xl">{title}</div>
                    <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
                        {children}
                    </p>
                </Link>
            </NavigationMenuLink>
        </li>
    )
}

export default NavMenu