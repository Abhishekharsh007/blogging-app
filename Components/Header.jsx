import React, { useState } from 'react'
import Image from 'next/image'
import { assets } from '@/Assets/assets';
import axios from 'axios';
import { toast } from 'react-toastify'
import Link from 'next/link'

const Header = () => {

    const [email, setEmail] = useState(""); 

    const onSubmitHandler = async(e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("email", email);
        const response = await axios.post('/api/email', formData);
        if(response.data.success) {
            toast.success(response.data.msg);
            setEmail("");
        }
        else {
            toast.error("Error")
        }
    }

  return (
    <div className='first'>
        <div className='second'>
            <Image src={assets.logo} width={180} alt='' className='secondone' />
            <Link href={'/admin/addProduct'}>
                <button className='secondtwo'> 
                    Add your Blogs <Image src={assets.arrow} />
                </button>
            </Link>
        </div>

        <div className='third'>
            <h1 className='thirdone'>Read Blogs</h1>
            <p className='thirdtwo'> 
                <b>This is a website platform where you can write your blogs which can be read by everyone. 
                But, if our admin group find that it is not appropriate or vulgarity which voilates human right then your blog will be deleted.</b>
            </p>
            <form onSubmit={onSubmitHandler} className='fourone' action="">
                <input onChange={(e)=> setEmail(e.target.value)} value={email} type="email" placeholder='Enter your email' className='pl-4 outline-none'/>
                <button type="submit" className='border-l border-black py-4 px-4 sm:px-8 active:bg-gray-600 active:text-white'> To Apply for Admin </button>
            </form>
        </div>
    </div>
  )
}

export default Header