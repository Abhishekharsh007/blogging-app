'use client'
import React from 'react'
import Image from 'next/image'
import { assets } from '@/Assets/assets'

const BlogTableItem = ({authorImg, title, author, date, deleteBlog, mongoId}) => {

    const BlogDate = new Date(date);
    console.log(BlogDate);

  return (
    <tr className='btione'>
        <td scope='row' className='btitwo'>
            <Image width={40} height={40} src={authorImg?authorImg:assets.profile_icon} alt='' />
            <p>{author?author:"No Author"}</p>
        </td>
        <td className='btithr'>
            {title?title:"no title"}
        </td>
        <td className='btifour'>
            {BlogDate.toDateString()}
        </td>
        {/* <td onClick={()=>deleteBlog(mongoId)} className='btifive'>
            x
        </td> */}
    </tr>
  )
}

export default BlogTableItem