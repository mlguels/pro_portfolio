"use client";

import React, { useState } from "react";
import Image from "next/image";
import Testimonial, { TestimonialProps } from "./Testimonial";

const TestimonialSlider: React.FC<{ testimonials: TestimonialProps[] }> = ({
  testimonials,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <main className="flex gap-10 items-center justify-center">
      <button onClick={prevSlide}>
        <Image src="/arrow-left.svg" width={35} height={25} alt="left arrow" />
      </button>
      <div>
        <Testimonial {...testimonials[currentIndex]} />
      </div>
      <button onClick={nextSlide}>
        <Image
          src="/arrow-right.svg"
          width={35}
          height={25}
          alt="right arrow"
        />
      </button>
    </main>
  );
};

export default TestimonialSlider;
