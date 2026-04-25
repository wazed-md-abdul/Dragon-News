import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { use } from 'react';

const NavLink = ({href, children, className}) => {
    const pathName = usePathname();
    const isActive = pathName === href;

    return (
            <Link href={href} className={isActive ? "border-b-2 border-red-500" : ''}>{children}</Link> 

    );
};

export default NavLink;