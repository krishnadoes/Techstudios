import React from "react";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
const BouncyCardsFeatures = () => {
  return (
    <div>
      <section className="mx-auto max-w-7xl px-4 py-12 text-slate-600">
      <div className="mb-8 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end md:px-8">
        <h2 className="max-w-lg text-4xl font-bold md:text-5xl">
          REASONS TO CHOOSE TECHSTUDIO 
          <span className="text-slate-200"> FOR YOUR NEXT DIGITAL JOURNEY</span>
        </h2>
        <motion.button 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="whitespace-nowrap rounded-lg bg-slate-900 px-4 py-2 font-medium text-white shadow-xl transition-colors hover:bg-slate-700"
        ><NavLink to="/Services">
          Learn more</NavLink>
        </motion.button>
      </div>
      <div className="mb-4 grid grid-cols-12 gap-4">
        <BounceCard className="col-span-12 md:col-span-4">
          <CardTitle>EXPERTISE IN CUTTING EDGE TECHNOLOGY</CardTitle>
          <div className="absolute bottom-0 left-4 right-4 top-32 translate-y-8 rounded-t-2xl bg-gradient-to-br from-violet-400 to-indigo-400 p-4 transition-transform duration-[250ms] group-hover:translate-y-4 group-hover:rotate-[2deg]">
            <span className="block text-center font-semibold text-indigo-50">
            Your success is TechStudio's priority. We prioritize understanding your unique business needs and goals, tailoring our strategies to achieve measurable results that align with your vision.
            </span>
          </div>
        </BounceCard>
        <BounceCard className="col-span-12 md:col-span-8">
          <CardTitle>PROVEN TRACK RECORD OF SUCCESS</CardTitle>
          <div className="absolute bottom-0 left-4 right-4 top-32 translate-y-8 rounded-t-2xl bg-gradient-to-br from-amber-400 to-orange-400 p-4 transition-transform duration-[250ms] group-hover:translate-y-4 group-hover:rotate-[2deg]">
            <span className="block text-center font-semibold text-orange-50">
            TechStudio doesn't just talk about results; we deliver them. With a history of successful campaigns across various industries, we have a proven track record of exceeding client expectations.
            </span>
          </div>
        </BounceCard>
      </div>
      <div className="grid grid-cols-12 gap-4">
        <BounceCard className="col-span-12 md:col-span-8">
          <CardTitle>CLIENT CENTRIC APPROACH</CardTitle>
          <div className="absolute bottom-0 left-4 right-4 top-32 translate-y-8 rounded-t-2xl bg-gradient-to-br from-green-400 to-emerald-400 p-4 transition-transform duration-[250ms] group-hover:translate-y-4 group-hover:rotate-[2deg]">
            <span className="block text-center font-semibold text-emerald-50">
            TechStudio stays ahead of the curve, leveraging the latest advancements in technology to deliver innovative and effective solutions for your business. Our team possesses deep expertise in the ever-evolving digital landscape.
            </span>
          </div>
        </BounceCard>
        <BounceCard className="col-span-12 md:col-span-4">
          <CardTitle>DEDICATED TEAM OF PROFESSIONALS </CardTitle>
          <div className="absolute bottom-0 left-4 right-4 top-32 translate-y-8 rounded-t-2xl bg-gradient-to-br from-pink-400 to-red-400 p-4 transition-transform duration-[250ms] group-hover:translate-y-4 group-hover:rotate-[2deg]">
            <span className="block text-center font-semibold text-red-50">
            TechStudio's team comprises highly skilled and experienced professionals who are passionate about digital marketing. We work collaboratively to provide exceptional service and ensure your complete satisfaction.
            </span>
          </div>
        </BounceCard>
      </div>
    </section>
    </div>
  )
}

export default BouncyCardsFeatures

const BounceCard = ({ className, children }) => {
  return (
    <motion.div
      whileHover={{ scale: 0.95, rotate: "-1deg" }}
      className={`group relative min-h-[300px] cursor-pointer overflow-hidden rounded-2xl bg-slate-100 p-8 ${className}`}
    >
      {children}
    </motion.div>
  );
};

const CardTitle = ({ children }) => {
  return (
    <h3 className="mx-auto text-center text-3xl font-semibold">{children}</h3>
  );
};