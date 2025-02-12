import React from 'react'
import { BackgroundBeamsWithCollision } from './ui/background-beams-with-collision';
// import { BackgroundLines } from './ui/background-lines';
import { useRef, useEffect, useState } from 'react';

const Services = () => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Stop observing once it is visible
        }
      },
      {
        threshold: 0.1, // Trigger when 10% of the component is visible
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  const data = [
    {
      "title": "Custom Web Development",
      "description": "We build high-performing, scalable, and secure websites and web applications tailored to your specific business needs. Our expertise spans the latest technologies, including React, Next.js, Node.js, and Python. From concept to launch, we handle every aspect of the development process."
    },
    {
      "title": "DIGITAL MARKETING",
      "description": "TechStudios is a digital marketing agency specializing in SEO, social media, content creation, and web development. We craft tailored strategies to enhance online visibility, drive engagement, and increase conversions for businesses of all sizes. Let's build your success story together."
    },
    {
      "title": "UI/UX Design",
      "description": "We prioritize user experience above all else. Our UI/UX design services focus on creating intuitive and seamless digital experiences that delight users and maximize engagement. We conduct thorough user research and testing to ensure optimal usability. We craft user journeys that are intuitive, achieve desired business outcomes."
    },
    {
      "title": "Meta Advertising",
      "description": "Reach your target audience across Facebook, Instagram, and other Meta platforms. We create and manage high-performing campaigns that drive results. Our expert team leverages data-driven insights to optimize ad spend and maximize your return on investment.We specialize in crafting compelling ad creatives." 
    }
  ];
  return (
    <div className='bg-slate-950'>



      <BackgroundBeamsWithCollision >
        <h2 className=" text-3xl relative z-20 md:text-4xl lg:text-7xl font-bold text-center text-black dark:text-white font-sans tracking-tight">
          Bespoke design solutions to fit {" "}
          <div className="relative mx-auto inline-block w-max [filter:drop-shadow(0px_1px_3px_rgba(27,_37,_80,_0.14))]">
            <div className="absolute left-0 top-[1px] bg-clip-text bg-no-repeat text-transparent bg-gradient-to-r py-4 from-purple-500 via-violet-500 to-pink-500 [text-shadow:0_0_rgba(0,0,0,0.1)]">
              <span className="">your brand identity</span>
            </div>
            <div className="relative bg-clip-text text-transparent bg-no-repeat bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 py-4">
              <span className="">your brand identity</span>
            </div>
          </div>
        </h2>
      </BackgroundBeamsWithCollision>

      <div className="w-full py-24 dark:bg-slate-950">
  <div className="flex flex-col w-full lg:w-11/12 2xl:w-3/4 mx-auto">
    <div className="w-full md:w-4/5 md:mx-auto text-center pt-3 px-4 md:!px-0">
      <h1 className="text-3xl  mt-2 md:text-4xl font-semibold text-gray-800 dark:text-gray-200">
        The <span className="text-indigo-600 dark:text-indigo-400">Feature</span> component
      </h1>
      <p className="text-xl font-medium mb-4 line-clamp-4 mt-4 md:line-clamp-none text-gray-300">
        Explore our comprehensive suite of services designed to elevate your brand and drive business growth. We partner closely with our clients, understanding their unique needs and crafting tailored solutions that deliver measurable results and long-term success.
      </p>
    </div>
    <div className="w-full flex flex-col md:flex-row py-6 gap-8">
      {data.map((item,index)=>(
    <div key={index} className="relative w-full md:w-1/4 flex flex-col justify-items-center shadow-md dark:shadow-lg border-b-4 border-indigo-400 dark:border-y group py-12 px-6 rounded-md overflow-hidden">
        <div className="absolute inset-0 bg-indigo-600 transition-all duration-500 transform translate-y-full group-hover:translate-y-0"></div>
        <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeWidth="1.5" width="56" height="56" className="text-emerald-600 group-hover:text-white relative z-10">
          <circle cx="2.45" cy="21.52" r="0.95"></circle>
          <circle cx="21.55" cy="21.52" r="0.95"></circle>
          <line x1="2.45" y1="20.57" x2="21.55" y2="20.57"></line>
          <path d="M16.38,20.57H7.7a3.35,3.35,0,0,1-3.34-3.34h0A3.34,3.34,0,0,1,7.7,13.89h.37a19.88,19.88,0,0,1,9.22,2.26h0a2.31,2.31,0,0,1,1.39,2.12h0A2.3,2.3,0,0,1,16.38,20.57Z"></path>
          <line x1="4.36" y1="6.25" x2="6.27" y2="13.89"></line>
          <path d="M1.5,5.3h0a3.25,3.25,0,0,0,2.3,1H8.18"></path>
          <line x1="18.68" y1="3.39" x2="18.68" y2="18.66"></line>
          <path d="M22.5.52h0a8.27,8.27,0,0,1-5.36,7.74l-2.28.85"></path>
          <line x1="20.59" y1="1.48" x2="15.82" y2="5.3"></line>
        </svg>
        <h1 className="text-2xl md:text-3xl mt-4 font-semibold text-white dark:text-white relative z-10 group-hover:text-black">
        {item.title}
        </h1>
        <p className="font-medium md:font-medium mb-4 line-clamp-4 mt-4 md:line-clamp-none text-gray-500 group-hover:text-white dark:group-hover:text -gray-200 relative z-10">
        {item.description} </p>
        <h4 className=" mt-2 font-semibold dark:text-gray-200 cursor-pointer relative z-10">
          Read more
        </h4>
      </div>
      ))}
      
    </div>
  </div>
</div>
    </div>
  )
}

export default Services
