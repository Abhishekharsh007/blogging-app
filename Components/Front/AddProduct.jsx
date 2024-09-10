"use client";
import React, { useState } from 'react'
import Image from 'next/image'
import { assets } from '@/Assets/assets'
import axios from 'axios'
import { toast } from 'react-toastify'

const AddProduct = () => {
    const [image, setImage] = useState(false)
    const [data, setData] = useState({
        title: "",
        description: "",
        category: "Startup",
        author: "Alex Bennett",
        authorImg: "/author_img.png"
    })

    const onChangeHandler = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setData(data => ({...data, [name]: value}));
        console.log(data);
    }

    const onSubmitHandler = async(e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('title', data.title);
        formData.append('description', data.description);
        formData.append('category', data.category);
        formData.append('author', data.author);
        formData.append('authorImg', data.authorImg);
        formData.append('image', image);
        const response = await axios.post('/api/blog', formData);
        if(response.data.success) {
            toast.success(response.data.msg)
            setImage(false)
            setData({
                title: "",
                description: "",
                category: "Startup",
                author: "Alex Bennett",
                authorImg: "/author_img.png"
            })
        }
        else {
            toast.error("Error");
        }
    }

    return (
        <>
            <form onSubmit={onSubmitHandler} className='apone'>
                <p className='aptwo'>
                    Upload thumbnail
                </p>
                <label htmlFor="image">
                    <Image className='apthr' src={!image ? assets.upload_area : URL.createObjectURL(image)} width={140} height={140} alt=''/>
                </label>
                <input onChange={(e)=>setImage(e.target.files[0])} type="file" id="image" hidden required/>
                <p className='apfour'>Blog title</p>
                <input name='title' onChange={onChangeHandler} value={data.title} className='apfive' type="text" placeholder="Type Here" required />
                <p className='text-xl mt-4'>Blog Description</p>
                <textarea name='description' onChange={onChangeHandler} value={data.description} className='apsix' type="text" placeholder="Write Content Here" rows={6} required />
                <p className='text-xl mt-4'>Blog Category</p>
                <select name="category" onChange={onChangeHandler} value={data.category} className="apsev">
                    <option value="Startup">Startup</option>
                    <option value="Technology">Technology</option>
                    <option value="Lifestyle">Lifestyle</option>
                </select>
                <br />
                <button type="submit" className='apeig'>ADD</button>
            </form>
        </>
    )
}

export default AddProduct
