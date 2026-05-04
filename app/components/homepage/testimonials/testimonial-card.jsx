import * as React from 'react';
import Image from 'next/image';

function TestimonialCard({ testimonial }) {
  return (
    <div className="bg-[#2F2F2F] border-[#1b2c68a0] relative rounded-lg shadow-lg w-[500px] mx-2">
      <div className="flex flex-row">
        <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-pink-500 to-violet-600"></div>
        <div className="h-[1px] w-full bg-gradient-to-r from-violet-600 to-transparent"></div>
      </div>

      <div className="px-4 lg:px-8 py-6 flex flex-col items-center text-center gap-4">
        <p className="text-[#16f2b3] text-xl font-semibold">
          {testimonial.name}
        </p>

        <Image
          src={testimonial.image}
          alt={testimonial.name}
          width={380}
          height={260}
          className="rounded-lg object-cover"
        />

        <p className="text-gray-300 text-sm">
          {testimonial.message}
        </p>
      </div>
    </div>
  );
}

export default TestimonialCard;