"use client";
import React from 'react'
import TlogIdProduct from '@/Components/Front/TlogIdProduct';

const page = ({params}) => {    

    return (
        <>
            <TlogIdProduct pageid={params.id}/>
        </>
    )
}

export default page 
