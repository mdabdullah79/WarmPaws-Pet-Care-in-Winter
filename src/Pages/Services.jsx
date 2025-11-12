import React from "react";
import { useLoaderData } from "react-router";
import Service from "./Service";

const Services = () => {
  const data = useLoaderData();
  return (
    <>
      <div className="mb-5">
        <div className="flex items-center justify-between mb-10 bg-blue-50 gap-10">
          <div className="flex flex-col items-start p-8">
            <h1 className="text-5xl font-bold mb-8 text-center">
              Our Services
            </h1>
            <p className="text-justify">
              Discover trusted winter care services to keep your furry friends
              warm, healthy, and happy. From cozy clothing and grooming to
              nutrition and health checkups — everything your pet needs this
              season is right here.
            </p>
          </div>
          <img
            className="w-[600px] rounded-l-2xl"
            src="/public/assets/cute-cat-spending-time-indoors_23-2150649172.avif"
            alt=""
          />
        </div>

        <div>
          <h1 className="text-4xl font-bold mb-8 text-center">
            All Pet Care Services
          </h1>

          <div className="grid grid-cols-3 gap-4 w-11/12 mx-auto mb-10">
            {data.map((s) => (
              <Service s={s}></Service>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
