import logo from '@/assets/logo.png';
import Image from 'next/image';
import { format } from "date-fns";
const Header = () => {
    return (
        <div className='text-center py-8 space-y-4'>
            <Image src={logo} alt="News Journal Logo" width={300} height={200} className='mx-auto'/>
            <p>Journalism Without Fear of Favour</p>
            <p>{format(new Date(), "EEE, MMM dd, yyyy")}</p>

        </div>
    );
};

export default Header;