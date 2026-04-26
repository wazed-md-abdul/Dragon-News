import logo from '@/assets/logo.png';
import Image from 'next/image';
import { format } from "date-fns";

const Header = () => {
    return (
        <div className='container mx-auto px-4 py-10 text-center sm:py-12'>
            <div className='reveal-up space-y-4'>
                <Image
                  src={logo}
                  alt="News Journal Logo"
                  width={300}
                  height={200}
                  className='mx-auto drop-shadow-[0_24px_40px_rgba(15,23,42,0.12)] transition duration-500 hover:scale-[1.01]'
                />
                <p className='section-kicker justify-center'>Independent Digital Paper</p>
                <h1 className='editorial-heading text-3xl font-black text-slate-900 sm:text-4xl'>
                    Journalism Without Fear of Favour
                </h1>
                <p className='mx-auto max-w-2xl text-sm leading-7 text-slate-600 sm:text-base'>
                    Clear reporting, smart context, and a cleaner way to scan the day.
                </p>
                <p className='inline-flex items-center rounded-full border border-white/70 bg-white/80 px-4 py-2 text-sm font-semibold text-slate-600 shadow-[0_12px_32px_rgba(15,23,42,0.08)]'>
                    {format(new Date(), "EEE, MMM dd, yyyy")}
                </p>
            </div>
        </div>
    );
};

export default Header;
