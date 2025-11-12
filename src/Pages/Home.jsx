import React from 'react';
import Navbar from '../Components/layout/Navbar';
import { useLoaderData } from 'react-router';
import Footer from '../Components/layout/Footer';
import Services from './HomeServices';
import CareTips from './CareTips';
import ExpertVets from './ExpertVets';
import Banner from '../Components/Banner';

const Home = () => {
    const data = useLoaderData()
    return (
        <div>
            <h1>This is Home</h1>
            <Banner></Banner>
            <Services data={data}></Services>
            <CareTips></CareTips>
            <ExpertVets></ExpertVets>
            
        </div>
    );
};

export default Home;