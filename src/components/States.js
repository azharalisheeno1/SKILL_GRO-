import React from 'react'
import { FaUsers, FaChartBar, FaStar, FaSmile } from "react-icons/fa"
const States = () => {
  return (
    <>
    
    <div className="md:px-10  py-10">
      <div className="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-2 gap-x-6 gap-y-12 divide-x divide-gray-300">
        <div className="text-center">
         <FaUsers size={50} className="fill-blue-600  inline-block" />
         
          <h3 className="text-3xl font-extrabold  mt-5">400+</h3>
          <p className="text-base text-gray-800 font-semibold mt-3">Unique Visitors</p>
        </div>
        <div className="text-center">
        <FaChartBar size={50} className="fill-blue-600  inline-block" />
          <h3 className="text-3xl font-extrabold  mt-5">450+</h3>
          <p className="text-base text-gray-800 font-semibold mt-3">Total Sales</p>
        </div>
        <div className="text-center">
        <FaSmile size={50} className="fill-blue-600  inline-block" />
          <h3 className="text-3xl font-extrabold  mt-5">500+</h3>
          <p className="text-base text-gray-800 font-semibold mt-3">Customer Satisfaction</p>
        </div>
        <div className="text-center">
        <FaStar size={50} className="fill-blue-600  inline-block" />
          <h3 className="text-3xl font-extrabold  mt-5">600+</h3>
          <p className="text-base text-gray-800 font-semibold mt-3">System Uptime (in hours)</p>
        </div>
      </div>
    </div>
    </>
  )
}

export default States