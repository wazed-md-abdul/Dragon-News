import Link from 'next/link';
import { usePathname } from 'next/navigation';

const NavLink = ({ href, children, className = "" }) => {
    const pathName = usePathname();
    const isActive = pathName === href;

    return (
            <Link
              href={href}
              className={`inline-flex items-center rounded-full px-4 py-2 text-sm font-medium transition duration-300 ${
                isActive
                  ? "bg-slate-900 text-white shadow-[0_14px_30px_rgba(15,23,42,0.18)]"
                  : "text-slate-600 hover:bg-white/80 hover:text-slate-900"
              } ${className}`.trim()}
            >
              {children}
            </Link>

    );
};

export default NavLink;
