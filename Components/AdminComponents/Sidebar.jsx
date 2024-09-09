import React from 'react'
import Image from 'next/image'
import { assets } from '@/Assets/assets';
import Link from 'next/link';

const Sidebar = () => {
    return (
        <div className='sione'>
            <Link href={'/'}>
                <div className='sitwo'>
                    <Image src={assets.logo} width={120} alt='' />
                </div>
            </Link>
            <div className='sioneone'>
                <div className='sionetwo'>
                    <Link href='/admin/addProduct' className='sioneoneone'>
                        <Image src={assets.add_icon} width={28} alt='' />
                        <p>
                            Add blogs
                        </p>
                    </Link>

                    <Link href='/admin/blogList' className='sioneonetwo'>
                        <Image src={assets.blog_icon} width={28} alt='' />
                        <p>
                            Blog Lists
                        </p>
                    </Link>

                    <Link href='/admin/subscriptions' className='sioneonethr'>
                        <Image src={assets.email_icon} width={28} alt='' />
                        <p>
                            Admin Emails
                        </p>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Sidebar