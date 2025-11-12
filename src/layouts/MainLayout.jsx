import React, { use } from 'react';
import Navbar from '../Components/layout/Navbar';
import { Outlet } from 'react-router';
import Footer from '../Components/layout/Footer';
import { AuthContext } from '../Provider/AuthProvider';

const MainLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;