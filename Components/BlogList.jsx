import React, { useEffect, useState } from 'react'
import { blog_data } from "@/Assets/assets";
import BlogItem from './BlogItem';
import '../app/globals.css';
import axios from 'axios';

const BlogList = () => {
  const [menu, setMenu] = useState("All");
  const [blogs, setBlogs] = useState([]);

  const fetchBlogs = async() => {
    const response = await axios.get('/api/blog');
    setBlogs(response.data);
    console.log(response.data);
  }

  useEffect(()=> {
    fetchBlogs();
  }, [])

  return (
    <div>
      <div className='blone'>
        <button onClick={() => setMenu('All')} className={menu==='All'?'bg-black text-white py-1 px-4 rounded-sm':""}>All</button>
        <button onClick={() => setMenu('Technology')} className={menu==='Technology'?'bg-black text-white py-1 px-4 rounded-sm':""}>Technology</button>
        <button onClick={() => setMenu('Startup')} className={menu==='Startup'?'bg-black text-white py-1 px-4 rounded-sm':""}>Startup</button>
        <button onClick={() => setMenu('Lifestyle')} className={menu==='Lifestyle'?'bg-black text-white py-1 px-4 rounded-sm':""}>Lifestyle</button>
      </div>
      <div className='bltwo'> 
        {blogs?.filter((item)=> menu==="All"?true:item.category===menu).map( (item, index) => {
          return <BlogItem key={index} id={item._id} image={item.image} title={item.title} description={item.description} category={item.category}/>
        })}
      </div>
    </div>
  )
}

export default BlogList