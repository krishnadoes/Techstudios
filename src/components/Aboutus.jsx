import React from 'react'
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import Testimonials from './Testimonials';
import { BackgroundBeamsWithCollision } from './ui/background-beams-with-collision';



const Aboutus = () => {
  const { ref: ref1, inView: inView1 } = useInView({
    threshold: 0.1, // Trigger when 10% of the component is visible
    triggerOnce: true, // Only trigger once
  });

  const { ref: ref2, inView: inView2 } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const { ref: ref3, inView: inView3 } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const { ref, inView } = useInView({
    threshold: 0.1, // Trigger when 10% of the component is visible
    triggerOnce: true, // Only trigger once
  });
  return (

    <div className=''>
      <div className='bg-slate-950 relative'>


        <BackgroundBeamsWithCollision >
          
          <h2 className=" text-3xl relative z-20 md:text-4xl lg:text-7xl font-bold text-center text-black dark:text-white font-sans tracking-tight">
            What&apos;s set us apart is our?{" "}
            <div className="relative mx-auto inline-block w-max [filter:drop-shadow(0px_1px_3px_rgba(27,_37,_80,_0.14))]">
              <div className="absolute left-0 top-[1px] bg-clip-text bg-no-repeat text-transparent bg-gradient-to-r py-4 from-purple-500 via-violet-500 to-pink-500 [text-shadow:0_0_rgba(0,0,0,0.1)]">
                <span className="">results-driven methodology</span>
              </div>
              <div className="relative bg-clip-text text-transparent bg-no-repeat bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 py-4">
                <span className="">results-driven methodology</span>
              </div>
            </div>
          </h2>
        </BackgroundBeamsWithCollision>


        <section className="text-gray-600 body-font  bg-radial-slate-cyan container ">
          <div className="container px-5 py-24 mx-auto">
            <motion.div
              ref={ref1}
              initial={{ opacity: 0, y: 20 }} // Initial state
              animate={inView1 ? { opacity: 1, y: 0 } : {}} // Animate to this state when in view
              transition={{ duration: 0.5 }} // Animation duration
              className="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10  border-gray-200 sm:flex-row flex-col">
              <div className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-8 h-8">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 2a10 10 0 100 20 10 10 0 000-20zm0 4a6 6 0 100 12 6 6 0 000-12zm-1 1h2v2h-2V7zm0 4h2v6h-2v-6z" />
                </svg>
              </div>
              <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
                <h2 className="text-white text-lg title-font font-medium mb-2">OUR MISSION</h2>
                <p className="leading-relaxed text-base text-slate-200">Driven by a shared passion for innovation and a commitment to client success, our mission is to empower businesses to achieve their full potential in the digital landscape. We strive to provide cutting-edge solutions that deliver measurable results and exceed client expectations.</p>
                <a className="mt-3 text-indigo-500 inline-flex items-center">Learn More
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </motion.div>

            <motion.div
              ref={ref2}
              initial={{ opacity: 0, y: 20 }} // Initial state
              animate={inView2 ? { opacity: 1, y: 0 } : {}} // Animate to this state when in view
              transition={{ duration: 0.5 }} // Animation duration
              className="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
              <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
                <h2 className="text-white text-lg title-font font-medium mb-2">THE TEAM</h2>
                <p className="leading-relaxed text-base text-slate-200">We are a team of highly skilled and experienced professionals who are passionate about digital marketing. Our diverse backgrounds and expertise in areas such as SEO, social media marketing, content strategy, and web development enable us to provide comprehensive and effective solutions for your unique business needs.</p>
                <a className="mt-3 text-indigo-500 inline-flex items-center">Learn More
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
              <div className="sm:w-32 sm:order-none order-first sm:h-32 h-20 w-20 sm:ml-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-8 h-8">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12a9 9 0 0118 0M3 12l3 3m0-3l-3 3m18-3l-3 3m0-3l3 3M12 12l-3 3m3-3l3 3m-3-3l-3-3m3 3l3-3" />
                </svg>
              </div>
            </motion.div>

            <motion.div
              ref={ref3}
              initial={{ opacity: 0, y: 20 }} // Initial state
              animate={inView3 ? { opacity: 1, y: 0 } : {}} // Animate to this state when in view
              transition={{ duration: 0.5 }} // Animation duration
              className=" flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
              <div className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-8 h-8">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4" />
                </svg>
              </div>
              <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
                <h2 className="text-white text-lg title-font font-medium mb-2">OUR VALUES</h2>
                <p className="leading-relaxed text-base text-slate-200">Integrity, transparency, and client satisfaction are at the core of everything we do. We believe in building long-term partnerships based on trust and mutual respect. We are committed to continuous learning and adapting to the ever-evolving digital world to ensure we provide the most effective and innovative solutions for our clients.</p>
                <a className="mt-3 text-indigo-500 inline-flex items-center">Learn More
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </motion.div>
          </div>
        </section>





       

      </div>
    </div>
  )
}

export default Aboutus






