"use client";
import { useState } from "react";
import data from "@/data/dataset";
import Image from "next/image";

const Courses = () => {
  const [activeTab, setActiveTab] = useState(3);

  return (
    <>
      <div id="course" className="py-24   max-w-7xl mx-auto px-4 md:px-6">
        {/* Heading Section */}
        <div className="text-center  mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold  mb-4">
            Explore <span className="text-primary">Our</span> Courses
          </h1>
          <p className=" text-md ">
            Learn at your own pace with a diverse range of engaging content.
            Explore videos, podcasts, and in-depth courses tailored to suit your
            learning style. Whether you're a beginner or looking to advance,
            there's something for everyone. Start your journey to knowledge and
            growth today!.
          </p>
        </div>

        {/* Tabs Section */}

        <div className="text-md font-medium   mx-auto  ">
          <ul className="flex md:flex-row flex-col gap-2 md:gap-5 justify-around ">
            <li
              onClick={() => setActiveTab(3)}
              className={`cursor-pointer text-lg  px-4 py-2 ${
                activeTab === 3
                  ? " border-b-2 border-primary rounded-xl font-semibold"
                  : "hover:text-blue-700 font-semibold "
              }`}
            >
              Artifial Intelligence
            </li>
            <li
              onClick={() => setActiveTab(1)}
              className={`cursor-pointer px-4 py-2 text-lg ${
                activeTab === 1
                  ? "border-b-2 border-primary rounded-xl font-semibold"
                  : "hover:text-blue-700 font-semibold"
              }`}
            >
              Web Development
            </li>
            <li
              onClick={() => setActiveTab(2)}
              className={`cursor-pointer px-4 py-2 text-lg  ${
                activeTab === 2
                  ? "border-b-2 border-primary rounded-xl font-semibold"
                  : "hover:text-blue-700 font-semibold"
              }`}
            >
              Software Development
            </li>
          </ul>
        </div>

        {/* Content Section */}
        <div className="flex flex-wrap gap-8   justify-center mt-6 ">
          {activeTab === 1 &&
            data.webDevelopment.map((web) => (
              <div
                key={web.id}
                className="max-w-sm rounded-lg shadow-md overflow-hidden bg-white"
              >
                <Image
                  src={web.image}
                  alt="loading"
                  width={300}
                  height={300}
                  className="w-full h-48 object-cover"
                />
                {/* <img src={web.image} alt="loading"  className="w-full h-48 object-cover" /> */}
                <div className="p-4">
                  <h2 className="text-lg font-semibold text-gray-800">
                    {web.name}
                  </h2>
                  <p className="mt-2 text-gray-600">{web.description}</p>
                  <div className="flex items-center justify-between mt-4">
                    <div className="flex items-center text-gray-500">
                      <span className="ml-1">Enrolled {web.likes}</span>
                    </div>
                    <div className="flex items-center text-gray-500">
                      <button
                        type="button"
                        className="px-5 py-2.5 rounded-lg text-sm tracking-wider  border border-current outline-none bg-primary hover:bg-transparent font-semibold text-white hover:text-blue-700 transition-all duration-300"
                      >
                        Enroll Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}

          {activeTab === 2 &&
            data.softwareDevelopment.map((soft) => (
              <div
                key={soft.id}
                className="max-w-sm rounded-lg shadow-md overflow-hidden bg-white"
              >
                <Image
                  src={soft.image}
                  alt="loading"
                  width={300}
                  height={300}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h2 className="text-lg font-semibold text-gray-800">
                    {soft.name}
                  </h2>
                  <p className="mt-2 text-gray-600">{soft.description}</p>
                  <div className="flex items-center justify-between mt-4">
                    <div className="flex items-center text-gray-500">
                      <span className="ml-1">Enrolled {soft.likes}</span>
                    </div>
                    <div className="flex items-center text-gray-500">
                      <button
                        type="button"
                        className="px-5 py-2.5 rounded-lg text-sm tracking-wider  border border-current outline-none bg-primary hover:bg-transparent font-semibold text-white hover:text-blue-700 transition-all duration-300"
                      >
                        Enroll Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          {activeTab === 3 &&
            data.artificialIntelligence.map((ai) => (
              <div
                key={ai.id}
                className="max-w-sm rounded-lg shadow-md overflow-hidden bg-white"
              >
                <Image
                  src={ai.image}
                  alt="loading"
                  width={300}
                  height={300}
                  className="w-full h-48 object-cover"
                />
                {/* <img src={web.image} alt="loading"  className="w-full h-48 object-cover" /> */}
                <div className="p-4">
                  <h2 className="text-lg font-semibold text-gray-800">
                    {ai.name}
                  </h2>
                  <p className="mt-2 text-gray-600">{ai.description}</p>
                  <div className="flex items-center justify-between mt-4">
                    <div className="flex items-center text-gray-500">
                      <span className="ml-1">Enrolled {ai.likes}</span>
                    </div>
                    <div className="flex items-center text-gray-500">
                      <button
                        type="button"
                        className="px-5 py-2.5 rounded-lg text-sm tracking-wider  border border-current outline-none bg-primary hover:bg-transparent font-semibold text-white hover:text-blue-700 transition-all duration-300"
                      >
                        Enroll Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
        </div>
    
    </>
  );
};

export default Courses;
