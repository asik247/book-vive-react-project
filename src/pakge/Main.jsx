import React from 'react';
import Headder from '../components/Headder';
import { useLoaderData } from 'react-router';
import MainCard from './MainCard';

const Main = () => {
    const data = useLoaderData()
    // console.log(data)
    return (
        <div className='min-h-[calc(100vh-287px)] container'>
           <Headder></Headder>
            <h1 className='font-bold text-center mt-4'>Books Vive</h1>
           <div className='grid md:grid-cols-3 gap-5'>
            {
                data.map(singleData=><MainCard key={singleData.bookId} singleData={singleData}></MainCard>)
            }
           </div>
          
        </div>
    );
};

export default Main;