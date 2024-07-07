"use client";

import React from "react";
import { companies } from "@/data";

const Clients = () => {
  return (
    <section id="testimonials" className="py-20">
      <h1 className="heading text-center mb-10">
        My
        <span className="text-purple"> Tech Stack</span>
      </h1>

      <div className="h-auto md:h-[30rem] rounded-md flex flex-col antialiased items-center justify-center relative overflow-hidden">
        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-16 max-lg:mt-10">
          {companies.map((company) => (
            <div 
              key={company.id} 
              className="flex justify-center items-center w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28"
            >
              <img
                src={company.img}
                alt={company.name}
                className="w-full h-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
