import React from 'react'
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
const Stats = () => {
    
      const { ref, inView } = useInView({
        threshold: 0.1, // Trigger when 10% of the component is visible
        triggerOnce: true, // Only trigger once
      });
  return (
    <div>
       <div className="py-2 sm:py-0  w-full bg-slate-950 flex justify-center items-center">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:py-24 lg:px-8" ref={ref}>
                  <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl dark:text-white flex place-content-center">Our service statistics</h2>
                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-4 mt-4">
                    <div className="bg-white overflow-hidden shadow sm:rounded-lg dark:bg-gray-900">
                      <div className="px-4 py-5 sm:p-6">
                        <dl>
                          <dt className="text-sm leading-5 font-medium text-gray-500 truncate dark:text-gray-400">Clients Served Successfully</dt>
                          <dd className="mt-1 text-3xl leading-9 font-semibold text-indigo-600 dark:text-indigo-400">
                            {inView ? <CountUp start={0} end={120} duration={2.5} separator="," /> : '0'}+
                          </dd>
                        </dl>
                      </div>
                    </div>
                    <div className="bg-white overflow-hidden shadow sm:rounded-lg dark:bg-gray-900">
                      <div className="px-4 py-5 sm:p-6">
                        <dl>
                          <dt className="text-sm leading-5 font-medium text-gray-500 truncate dark:text-gray-400">Projects Successfully Launched</dt>
                          <dd className="mt-1 text-3xl leading-9 font-semibold text-indigo-600 dark:text-indigo-400">
                            {inView ? <CountUp start={0} end={123} duration={2.5} separator="," /> : '0'}+
                          </dd>
                        </dl>
                      </div>
                    </div>
                    <div className="bg-white overflow-hidden shadow sm:rounded-lg dark:bg-gray-900">
                      <div className="px-4 py-5 sm:p-6">
                        <dl>
                          <dt className="text-sm leading-5 font-medium text-gray-500 truncate dark:text-gray-400">Happy Clients</dt>
                          <dd className="mt-1 text-3xl leading-9 font-semibold text-indigo-600 dark:text-indigo-400">
                            {inView ? <CountUp start={0} end={100} duration={2.5} separator="," /> : '0'}%
                          </dd>
                        </dl>
                      </div>
                    </div>
                    <div className="bg-white overflow-hidden shadow sm:rounded-lg dark:bg-gray-900">
                      <div className="px-4 py-5 sm:p-6">
                        <dl>
                          <dt className="text-sm leading-5 font-medium text-gray-500 truncate dark:text-gray-400">The Driving Force Behind Our Success</dt>
                          <dd className="mt-1 text-3xl leading-9 font-semibold text-indigo-600 dark:text-indigo-400">
                            {inView ? <CountUp start={0} end={6} duration={2.5} separator="," /> : '0'}+
                          </dd>
                        </dl>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
    </div>
  )
}

export default Stats
