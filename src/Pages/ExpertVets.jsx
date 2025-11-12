import React from "react";

const vets = [
  {
    name: "Dr. Sarah Johnson",
    specialty: "Small Animals",
    photo: "https://via.placeholder.com/150",
  },
  {
    name: "Dr. Mark Thompson",
    specialty: "Exotic Pets",
    photo: "https://via.placeholder.com/150",
  },
  {
    name: "Dr. Emily Davis",
    specialty: "Surgery Specialist",
    photo: "https://via.placeholder.com/150",
  },
];

const ExpertVets = () => {
  return (
    <section className="bg-blue-50 py-12">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          Meet Our Expert Vets
        </h2>
        <p className="mt-4 text-gray-600 max-w-xl mx-auto">
          Our skilled veterinarians are here to provide the best care for your pets.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-4 md:px-12">
        {vets.map((vet, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md p-6 flex flex-col items-center transition-transform transform hover:scale-105"
          >
            <img
              src={vet.photo}
              alt={vet.name}
              className="w-32 h-32 rounded-full object-cover mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-800">{vet.name}</h3>
            <p className="text-gray-500">{vet.specialty}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExpertVets;
