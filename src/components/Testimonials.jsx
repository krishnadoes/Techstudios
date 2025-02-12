import React from 'react';
import { motion, useInView } from 'framer-motion';

const testimonials = [
  {
    id: 1,
    name: "Anuj Singh",
    role: "UI DEVELOPER",
    image: "testtimonial1.png",
    text: "Techstudio delivered an exceptional website for our business. Their team was professional, responsive, and exceeded our expectations. The website is not only visually stunning but also highly functional and user-friendly. We're thrilled with the results."
  },
  {
    id: 2,
    name: "Raj Shah",
    role: "DESIGNER",
    image: "testimonial3.jpg",
    text: "Techstudio has been instrumental in growing our online presence. Their data-driven marketing strategies have significantly increased our website traffic and generated valuable leads. We're impressed with their expertise and dedication to achieving our business goals."
  }
];

const Testimonials = () => {
  return (
    <section className="text-gray-600 body-font bg-slate-950">
      <div className="container px-5 py-24 mx-auto">
        <h1 className="text-3xl font-extrabold title-font text-white mb-12 text-center">Testimonials</h1>
        <div className="flex flex-wrap -m-4">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

const TestimonialCard = ({ testimonial }) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: false }); // Set once to false to allow re-triggering

  return (
    <motion.div
      ref={ref}
      className="p-4 md:w-1/2 w-full"
      initial={{ opacity: 0, y: 20 }} // Initial state
      animate={isInView ? { opacity: 1, y: 0 } : {}} // Animate to this state when in view
      transition={{ duration: 1 }} // Transition duration
    >
      <div className="h-full bg-white p-8 rounded">
        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="block w-5 h-5 text-gray-400 mb-4" viewBox="0 0 975.036 975.036">
          <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
        </svg>
        <p className="leading-relaxed mb-6">{testimonial.text}</p>
        <a className="inline-flex items-center">
          <img alt="testimonial" src={testimonial.image} className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center" />
          <span className="flex-grow flex flex-col pl-4">
            <span className="title-font font-medium text-indigo-600">{testimonial.name}</span>
            <span className="text-indigo-90000 text-sm">{testimonial.role}</span>
          </span>
        </a>
      </div>
    </motion.div>
  );
};

export default Testimonials;