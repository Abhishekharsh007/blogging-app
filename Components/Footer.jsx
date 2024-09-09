import React from 'react';
import Image from 'next/image';
import { assets } from '@/Assets/assets'
import '../app/globals.css';

const Footer = () => {
    return (
        <div className='fone'>
            <Image src={assets.logo_light} alt='' width={120}/>
            <p className='ftwo'>All right reserved. Copyright@blogger</p>
            <div className='pic'>
                <Image src={assets.facebook_icon} alt='' width={40}/>
                <Image src={assets.twitter_icon} alt='' width={40}/>
                <Image src={assets.googleplus_icon} alt='' width={40}/>
            </div>
        </div>
    )
}

export default Footer