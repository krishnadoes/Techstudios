import React from 'react'
import Faqsection from './Faqsection';
import { useRef } from 'react';
import { LampContainer } from './ui/lamp';
import BouncyCardsFeatures from './ui/BouncyCardsFeatures';
import { motion, useMotionTemplate, useMotionValue, useSpring, } from "framer-motion";


const Content = () => {
  document.querySelectorAll('[id^="question"]').forEach(function (button, index) {
    button.addEventListener('click', function () {
      var answer = document.getElementById('answer' + (index + 1));
      var arrow = document.getElementById('arrow' + (index + 1));

      if (answer.style.display === 'none' || answer.style.display === '') {
        answer.style.display = 'block';
        arrow.style.transform = 'rotate(0deg)';
      } else {
        answer.style.display = 'none';
        arrow.style.transform = 'rotate(-180deg)';
      }
    });
  });

  const cardsData = [
    { id: 1, title: "WEB DEVELOPMENT", description: "Custom websites and design's for your business goals." },
    { id: 2, title: "DIGITAL MARKETING", description: "Reach your audience with effective digital strategies." },
    { id: 3, title: "PRODUCT DESIGN", description: "User-centered designs that are intuitive and engaging." },
    { id: 4, title: "APP DEVELOPMENT", description: "We offer full-spectrum digital marketing services." }
  ];


  return (
    <div>
      <div className='bg-slate-950'>
        <LampContainer>
          <motion.h1
            initial={{ opacity: 0.5, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.3,
              duration: 0.8,
              ease: "easeInOut",
            }}
            className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
          >
            Digital solution <br /> that drive success
          </motion.h1>
        </LampContainer>

        <BouncyCardsFeatures />


        <div class="max-w-7xl  container px-5 py-20 mx-auto bg-gradient-to-r from-slate-950 via-gray-900 to-slate-900 rounded-2xl" >
          <div class="flex flex-wrap w-full mb-20 ">
            <div class="max-w-7xl lg:w-1/2 w-full mb-6 lg:mb-0">
              <h1 class="sm:text-4xl text-3xl font-bold title-font mb-2 text-slate-300">What We Offer</h1>
              <div class="h-1 w-20 bg-indigo-700 rounded"></div>
            </div>
            <p class="lg:w-1/2 w-full leading-relaxed text-gray-300"> A comprehensive suite of digital marketing services designed to elevate your online presence, drive brand awareness, and achieve your business goals. We help you connect with your target audience, build meaningful relationships, and achieve sustainable growth.</p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 w-full bg-transparent px-4 py-12 text-slate-300">

            {cardsData.map((card) => (
              <TiltCard key={card.id} title={card.title} description={card.description} />
            ))}

          </div>
        </div>
        <Faqsection />

      </div>

    </div>


  )
}

export default Content
const ROTATION_RANGE = 32.5;
const HALF_ROTATION_RANGE = 32.5 / 2;

const TiltCard = ({ title, description }) => {
  const ref = useRef(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const xSpring = useSpring(x);
  const ySpring = useSpring(y);

  const transform = useMotionTemplate`rotateX(${xSpring}deg) rotateY(${ySpring}deg)`;

  const handleMouseMove = (e) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = (e.clientX - rect.left) * ROTATION_RANGE;
    const mouseY = (e.clientY - rect.top) * ROTATION_RANGE;

    const rX = (mouseY / height - HALF_ROTATION_RANGE) * -1;
    const rY = mouseX / width - HALF_ROTATION_RANGE;

    x.set(rX);
    y.set(rY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transformStyle: "preserve-3d",
        transform,
      }}
      className="relative h-96 w-72 rounded-xl bg-gradient-to-r from-indigo-400 via-indigo-500 to-indigo-600"
    >
      <div
        style={{
          transform: "translateZ(75px)",
          transformStyle: "preserve-3d",
        }}
        className="absolute inset-4 grid place-content-center rounded-xl  bg-slate-900 shadow-lg "
      >
        <p
          style={{
            transform: "translateZ(50px)",
          }}
          className="mx-9 rounded-xl border border-indigo-500 text-center text-lg text-slate-400"
        >
          {title} {/* Display the description passed as a prop */}
        </p>
        <p
          style={{
            transform: "translateZ(50px)",
          }}
          className="text-center text-2xl  text-white px-2 flex justify-center "
        >
          {description} {/* Display the title passed as a prop */}
        </p>

      </div>
    </motion.div>
  );
};

