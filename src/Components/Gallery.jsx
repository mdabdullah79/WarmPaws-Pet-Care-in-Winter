import React from "react";

const catGallery = [
  {
    name: "Mittens",
    image:
      "/assets/micki.jpeg",
  },
  {
    name: "Luna",
    image:
      "/assets/miki2.jpeg",
  },
  {
    name: "Shadow",
    image:
      "/assets/miki4.jpeg",
  },
  {
    name: "Whiskers",
    image:
      "/assets/miki2.jpeg",
  },
  {
    name: "Cleo",
    image:
      "/assets/miki3.jpeg",
  },
  {
    name: "Tiger",
    image:
      "/assets/miki4.jpeg",
  },
];

const CatGallery = () => {
  return (
    <section className="bg-gray-50 py-16 px-4 md:px-20">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
        Cat Gallery
      </h2>

      <div className="grid grid-cols-2  lg:grid-cols-3 gap-6">
        {catGallery.map((cat, index) => (
          <div
            key={index}
            className="relative overflow-hidden rounded-xl shadow-lg group cursor-pointer"
          >
            <img
              src={cat.image}
              alt={cat.name}
              className="w-full h-48 object-cover transform transition duration-300 group-hover:scale-110"
            />
         
          </div>
        ))}
      </div>
    </section>
  );
};

export default CatGallery;
