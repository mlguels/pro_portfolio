"use client";

import React, { useState } from "react";
import Image from "next/image";
import Testimonial, { TestimonialProps } from "./Testimonial";
import { useTheme } from "@/context/theme-context";

const TestimonialSlider: React.FC<{ testimonials: TestimonialProps[] }> = ({
  testimonials,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { theme } = useTheme();

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
      <button
        onClick={prevSlide}
        className="hover:scale-[1.15] active:scale-105 transition"
      >
        {theme === "light" ? (
          <Image
            src="/arrow-left.svg"
            width={35}
            height={25}
            alt="left arrow"
          />
        ) : (
          <Image
            src="/arrow-leftDark.svg"
            width={50}
            height={25}
            alt="left arrow"
          />
        )}
      </button>
      <div>
        <Testimonial {...testimonials[currentIndex]} />
      </div>
      <button
        onClick={nextSlide}
        className="hover:scale-[1.15] active:scale-105 transition"
      >
        {theme === "light" ? (
          <Image
            src="/arrow-right.svg"
            width={35}
            height={25}
            alt="left arrow"
          />
        ) : (
          <Image
            src="/arrow-rightDark.svg"
            width={50}
            height={25}
            alt="left arrow"
          />
        )}
      </button>
    </main>
  );
};

export default TestimonialSlider;
