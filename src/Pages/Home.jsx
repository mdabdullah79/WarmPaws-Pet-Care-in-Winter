import React from "react";
import Navbar from "../Components/layout/Navbar";
import { useLoaderData } from "react-router";
import Footer from "../Components/layout/Footer";
import Services from "./HomeServices";
import CareTips from "./CareTips";
import ExpertVets from "./ExpertVets";
import Banner from "../Components/Banner";
import toast, { Toaster } from "react-hot-toast";
import CatGallery from "../Components/Gallery";

const Home = () => {
  const data = useLoaderData();

  const notify = () => toast.success("Here is your toast.");
  return (
    <div>
      <Banner></Banner>
      <Services data={data}></Services>
      <CareTips></CareTips>
      <ExpertVets></ExpertVets>
      <CatGallery></CatGallery>
      <Toaster />
    </div>
  );
};

export default Home;
