import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
const Faqsection = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const questions = [
      {
        "question": "Can TechStudios redesign my existing website?",
        "answer": "Yes! We can analyze your current website, suggest improvements, and redesign it to enhance performance, aesthetics, and user experience."
      },
      {
        "question": "How long does it take to develop a website?",
        "answer": "The development timeline depends on the complexity and requirements of the project. A standard website usually takes 3-4 weeks, while complex projects may take longer."
      },{
      "question": "How do you approach digital marketing?",
      "answer": "We implement data-driven strategies to achieve measurable results and help businesses achieve their marketing goals."
     },
      {
        "question": "Do you offer website maintenance and support?",
        "answer": "Yes, we provide ongoing maintenance services to ensure your website remains updated, secure, and performs optimally over time."
      },
      {
        "question": "How can I get started with TechStudios?",
        "answer": "Simply reach out to us via our website, email, or phone, and our team will connect with you to discuss your project and create a tailored solution for your business."
      }
    ];

 

 
  
   
    const { ref, inView } = useInView({
      threshold: 0.4, // Trigger when 10% of the component is visible
      triggerOnce: true, // Only trigger once
    });
  
    const toggleAnswer = (index) => {
      setOpenIndex(openIndex === index ? null : index);
    };
    return (
        <motion.section
        className="py-10 bg-transparent sm:py-16 lg:py-24"
        ref={ref}
        initial={{ opacity: 0, y: 20 }} // Initial state for the entire section
        animate={inView ? { opacity: 1, y: 0 } : {}} // Animate to this state when in view
        transition={{ duration: 0.5 }} // Animation duration
      >
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold leading-tight text-slate-200 sm:text-4xl lg:text-5xl">
              Explore Common Questions
            </h2>
          </div>
          <div className="max-w-3xl mx-auto mt-8 space-y-4 md:mt-16">
            {questions.map((item, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 shadow-lg cursor-pointer hover:bg-gray-50"
              >
                <button
                  type="button"
                  onClick={() => toggleAnswer(index)}
                  className="flex items-center justify-between w-full px-4 py-5 sm:p-6"
                >
                  <span className="flex text-lg font-semibold text-black">{item.question}</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className={`w-6 h-6 text-gray-400 transform ${openIndex === index ? 'rotate-180' : ''}`}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </button>
                {openIndex === index && (
                  <div className="px-4 pb-5 sm:px-6 sm:pb-6">
                    <p>{item.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
          <p className="text-center text-slate-200 text-base mt-9">
            Still have questions?
            <span className="cursor-pointer font-medium text-tertiary transition-all duration-200 text-indigo-500 hover:text-tertiary focus:text-tertiary hover-underline"><NavLink to="/contact"> Contact our support</NavLink></span>
          </p>
        </div>
      </motion.section>
    );
};

export default Faqsection;