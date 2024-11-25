import { IoLogoStencil } from "react-icons/io5";
const Footer = () => {
  return (
    <>
      <footer className=" bg-gray-50  py-10 px-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="flex font-semibold text-lg md:text-3xl  gap-2   my-4">
            {/* logo */}
            <IoLogoStencil size={50} className="text-primary" />
            <h1>SKILLGRO </h1>
          </div>
          <div>
            <h4 className="text-primary font-semibold text-lg mb-6">
              Resources
            </h4>
            <ul className="space-y-5">
              <li className="  text-[15px] transition-all">Documentation</li>
              <li className="  text-[15px] transition-all">Tutorials</li>
              <li className="  text-[15px] transition-all">Support</li>
            </ul>
          </div>

          <div>
            <h4 className="text-primary font-semibold text-lg mb-6">
              Services
            </h4>
            <ul className="space-y-5">
              <li className="  text-[15px] transition-all">Web Development</li>
              <li className="  text-[15px] transition-all">
                Software Developmenet
              </li>
              <li className="  text-[15px] transition-all">
                Artifial Intelligence
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-primary font-semibold text-lg mb-6">
              Contact Us
            </h4>
            <ul className="space-y-5">
              <li className="  text-[15px] transition-all">
                skillsgro@gmail.com
              </li>
              <li className="  text-[15px] transition-all">+9231233333333</li>
              <li className="  text-[15px] transition-all">
                Islamabad, Pakistan
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t text-center border-[#6b5f5f] pt-8 mt-8">
          <p className=" text-[15px]">© SKILLSGRO. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
