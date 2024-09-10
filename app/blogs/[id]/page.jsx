"use client";
import React, { useState, useEffect } from 'react';
import { assets, blog_data } from "@/Assets/assets";
import Image from 'next/image'
import Footer from "@/Components/Footer";
import Link from 'next/link';
import axios from 'axios';

const page = ({params}) => {
    const [data, setData] = useState(null);

    const fetchBlogData = async() => {
        const response = await axios.get('/api/blog', {
            params: {
                id: params.id
            }
        })
        console.log(response.data);
        setData(response.data)
    }

    useEffect(()=>{
        fetchBlogData();
    }, [])

    return (
        data ? <>
            <div className='tipone'>
                <div className='tiptwo'>
                    <Link href='/'>
                        <Image src={assets.logo} width={180} alt='' className='tipthr'/>
                    </Link>
                    <button className='tipfour'>
                        Get Started <Image src={assets.arrow} alt='' />
                    </button>
                </div>
                <div className='tipfive'>
                    <h1 className='tipsix'>{data.title}</h1>
                    {/* <Image src={data.author_img} width={60} height={60} alt='' className='mx-auto mt-6 border border-white rounded-full'/>
                    <p className='mt-1 pb-2 text-lg max-w-[740px] mx-auto'>{data.author}</p> */}
                </div>
            </div>
            <div className='tipnine'>
                <Image src={data.image} width={1280} height={720} alt='' className='tipten'/>

                <div className='blog-content' dangerouslySetInnerHTML={{__html: data.description}}></div>

                <div className='tipeve'>
                    <p className='tiptew'>Share this article on social media</p>
                    <div className='foo'>
                        <Image src={assets.facebook_icon} width={50} alt=''/>
                        <Image src={assets.twitter_icon} width={50} alt=''/>
                        <Image src={assets.googleplus_icon} width={50} alt=''/>
                    </div>
                </div>
            </div>
            <Footer />
        </> : <>
            <div>
            </div>
        </>
    )
}

export default page;
