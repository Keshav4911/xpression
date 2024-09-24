'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import useSWR from 'swr';

type Testimonial = {
  id: number;
  content: string;
  author: string;
  position: string;
};

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { data: testimonials, error } = useSWR<Testimonial[]>('/api/testimonials', fetcher);

  const nextTestimonial = () => {
    if (testimonials) {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }
  };

  const prevTestimonial = () => {
    if (testimonials) {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
    }
  };

  if (error) return <div>Failed to load testimonials</div>;
  if (!testimonials) return <div>Loading...</div>;

  return (
    <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">What Our Customers Say</h2>
        <div className="relative max-w-3xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="bg-white text-gray-800 p-8 rounded-lg shadow-md"
            >
              <p className="text-lg mb-4">{testimonials[currentIndex].content}</p>
              <p className="font-semibold text-purple-600">{testimonials[currentIndex].author}</p>
              <p className="text-gray-600">{testimonials[currentIndex].position}</p>
            </motion.div>
          </AnimatePresence>
          <div className="flex justify-between absolute inset-y-1/2 transform -translate-y-1/2 w-full px-4">
            <button
              onClick={prevTestimonial}
              className="bg-transparent text-purple-600 font-bold py-2 px-4 rounded-full  transition duration-300"
            >
              &#8592;
            </button>
            <button
              onClick={nextTestimonial}
              className="bg-transparent text-purple-600 font-bold py-2 px-4 rounded-full  transition duration-300"
            >
              &#8594;
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;