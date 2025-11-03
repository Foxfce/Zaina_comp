import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

interface LinkItem {
  name: string;
  path: string;
}

interface Assets {
  cross_icon: string;
}

type Props = {
    showMobileMenuProp: boolean,
    handleShowMobileMenu:()=> void,
    links: LinkItem[],
    assets: Assets,
}

export default function MobileMenu({  showMobileMenuProp, handleShowMobileMenu, links, assets }: Props) {
    const [mounted, setMounted] = useState<boolean>(false);     // controls whether the DOM is present
    const [visible, setVisible] = useState<boolean>(false);     // controls CSS classes (open/closed)
    const timeoutRef = useRef<any>(null);

    // sync with external prop (or manage toggle internally)
    useEffect(() => {
        if (showMobileMenuProp) {
            // mount first so the element exists in the DOM
            setMounted(true);

            // wait for next paint so the transition can run from initial -> visible
            // requestAnimationFrame is reliable here
            requestAnimationFrame(() => {
                // another rAF to ensure styles applied — avoids race on some browsers
                requestAnimationFrame(() => {
                    setVisible(true);
                });
            });
        } else {
            // start closing animation
            setVisible(false);

            // after animation ends, unmount
            // match this duration to your CSS transition duration (300ms below)
            timeoutRef.current = setTimeout(() => {
                setMounted(false);
            }, 300);
        }

        return () => {
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
            }
        };
    }, [showMobileMenuProp]);

    // body scroll lock (safe)
    useEffect(() => {
        if (mounted && visible) {
            document.body.style.overflow = 'hidden';
            document.documentElement.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
            document.documentElement.style.overflow = 'auto';
        }

        return () => {
            document.body.style.overflow = 'auto';
            document.documentElement.style.overflow = 'auto';
        };
    }, [mounted, visible]);

    if (!mounted) return null;
    return (
        // overlay area (optional click to close)
        <div
            aria-hidden={!visible}
            className={`fixed inset-0 z-50 lg:hidden pointer-events-auto`}
        >
            {/* translucent backdrop */}
            <div
                onClick={handleShowMobileMenu}
                className={`absolute inset-0 transition-opacity duration-300 ${visible ? 'opacity-50' : 'opacity-0'} bg-black`}
            />

            {/* sliding drawer (from right) */}
            <div
                className={`
          absolute right-0 top-0 bottom-0 w-full
          transform transition-transform duration-300 ease-in-out
          ${visible ? 'translate-x-0' : 'translate-x-full'}
          bg-softperl-primary overflow-hidden
        `}
            >
                <div className="flex justify-end p-6 cursor-pointer">
                    <img
                        onClick={handleShowMobileMenu}
                        src={assets.cross_icon}
                        className="w-6"
                        alt="Close menu"
                    />
                </div>

                <nav className="flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium">
                    {links.map((link, index) => (
                        <Link
                            key={index}
                            onClick={handleShowMobileMenu}
                            to={link.path}
                            className="cursor-pointer hover:text-primary px-4 py-2 rounded-full inline-block transition-all text-2xl font-bold"
                        >
                            {link.name}
                        </Link>
                    ))}
                </nav>
            </div>
        </div>
    )
}