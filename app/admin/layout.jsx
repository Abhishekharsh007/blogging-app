import Sidebar from "@/Components/AdminComponents/Sidebar"
import Image from 'next/image'
import { assets } from '@/Assets/assets';
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export default function Layout({children}) {
    return (
        <>
            <div className="alpone">
                <ToastContainer theme='dark'/>
                <Sidebar />
                <div className='alptwo'>
                    <div className='alpthr'>
                        <h3 className='font-medium'>Admin Panel</h3>
                        <Image src={assets.profile_icon} width={40} alt='' />
                    </div>
                    { children }
                </div>
            </div>
        </>
    )
}