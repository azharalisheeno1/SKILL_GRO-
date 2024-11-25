"use client";
import Image from "next/image";
import pic from "../../public/asssets/MAIN-IMAGE.png";

function About() {
  return (
    <>
      <section id="about" className="bg-gray-200  py-24 ">
        <div className="w-full max-w-[1400px]  px-4 md:px-5 lg:px-5 mx-auto">
          <div className="w-full justify-start items-center  gap-8 flex flex-col md:flex-row-reverse ">
            <div className="w-full flex-col justify-start lg:items-start items-center gap-3 ">
              <div className="w-full flex-col justify-start lg:items-start items-center gap-4 flex">
                <h1 className="max-w-2xl  my-4 text-2xl font-extrabold   md:text-3xl xl:text-4xl dark:text-white">
                  Unlock Your <span className="text-primary">Potential,</span>{" "}
                  Anywhere, Anytime
                </h1>
                <p className="max-w-2xl mb-6 text-gray-600 font-light  lg:mb-8  lg:text-lg text-justify ">
                  Whether you're at home, traveling, or on the go, you can
                  continue growing your skills with online resources and
                  flexible learning options. With the freedom to learn from
                  anywhere, personal and professional development is always
                  within reach.
                </p>
              </div>

              <div className="flex flex-col gap-4">
                <div className="flex items-center ">
                  <input
                    id="default-checkbox"
                    type="checkbox"
                    value=""
                    className="w-4  h-4  "
                  />
                  <label
                    htmlFor="default-checkbox"
                    className="ms-2 text-md md:text-md font-semibold "
                  >
                    Pursuit of Excellencex
                  </label>
                </div>
                <div className="flex items-center ">
                  <input
                    id="default-checkbox"
                    type="checkbox"
                    value=""
                    className="w-4  h-4  "
                  />
                  <label
                    htmlFor="default-checkbox"
                    className="ms-2 text-md  font-semibold "
                  >
                    Creative Problem-Solving
                  </label>
                </div>
                <div className="flex items-center ">
                  <input
                    id="default-checkbox"
                    type="checkbox"
                    value=""
                    className="w-4  h-4  "
                  />
                  <label
                    htmlFor="default-checkbox"
                    className="ms-2 text-md  font-semibold "
                  >
                    Passion for Improvement
                  </label>
                </div>
                <div className="flex items-center ">
                  <input type="checkbox" className="w-4  h-4  " />
                  <label
                    htmlFor="default-checkbox"
                    className="ms-2 text-md  font-semibold "
                  >
                    Quality & Integrity
                  </label>
                </div>

                <button
                  type="button"
                  className="px-5 py-2.5 rounded-lg text-sm tracking-wider  border border-current outline-none bg-primary hover:bg-transparent w-fit font-semibold text-white hover:text-blue-700 transition-all duration-300"
                >
                  Read More
                </button>
              </div>
            </div>
            <Image
              width={600}
              height={400}
              className="lg:mx-0 mx-auto h-full rounded-3xl object-cover"
              src={pic}
              alt="about Us image"
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
