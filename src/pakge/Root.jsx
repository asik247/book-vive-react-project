import React from 'react';
import Navbar from '../components/Navbar';
import { Outlet, useLoaderData } from 'react-router';
import Footer from '../components/Footer';



const Root = () => {
    const RootData = useLoaderData()
    // console.log(RootData)
    return (
        <div>
            <Navbar RootData={RootData}></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;