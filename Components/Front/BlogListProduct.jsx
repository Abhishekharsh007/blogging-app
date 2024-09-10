"use client";
import BlogTableItem from '@/Components/AdminComponents/BlogTableItem'
import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { toast } from 'react-toastify'

const BlogListProduct = () => {

    const [blogs, setBlogs] = useState([]);

    const fetchBlogs = async() => {
        const response = await axios.get('/api/blog');
        setBlogs(response.data);
    }

    const deleteBlog = async (mongoId) => {
        const response = await axios.delete('/api/blog', {
            params: {
                id: mongoId 
            }
        })
        if(response.data.success) {
            toast.success(response.data.msg);
            fetchBlogs();
        }
        else {
            toast.error("Error");
        }
    }

    useEffect(() => {
        fetchBlogs();
    }, [])

    return (
        <div className='blprone'>
            <h1>All blogs</h1>
            <div className='blprtwo'>
                <table className='blprthr'>
                    <thead className='blprfour'>
                        <tr>
                            {/* <th scope='col' className='blprfive'>Author name</th> // */}
                            <th scope='col' className='blprsix'>Blog Title</th>
                            <th scope='col' className='blprsev'>Date</th>
                            {/* <th scope='col' className='blpreig'>Action</th> // */}
                        </tr>
                    </thead>
                    <tbody>
                        {blogs.map((item, index) => {
                            return <BlogTableItem key={index} mongoId={item._id} title={item.title} author={item.author} authorImg={item.authorImg} date={item.date} deleteBlog={deleteBlog}/> 
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default BlogListProduct
