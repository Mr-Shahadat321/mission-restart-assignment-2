import React from "react";

const Footer = () => {
  return (
    <div className="w-11/12 mx-auto mt-12">
        <footer className="bg-black text-gray-300">
          <div className="w-11/12 mx-auto py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10">
            <div className="lg:col-span-2 space-y-4">
              <h2 className="text-white text-xl font-semibold">
                CS — Ticket System
              </h2>
              <p className="text-sm leading-relaxed text-gray-400">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s.
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="text-white font-semibold">Company</h3>
              <ul className="space-y-2 text-sm">
                <li className="hover:text-white cursor-pointer">About Us</li>
                <li className="hover:text-white cursor-pointer">Our Mission</li>
                <li className="hover:text-white cursor-pointer">
                  Contact Sales
                </li>
              </ul>
            </div>

            <div className="space-y-3">
              <h3 className="text-white font-semibold">Services</h3>
              <ul className="space-y-2 text-sm">
                <li className="hover:text-white cursor-pointer">
                  Products & Services
                </li>
                <li className="hover:text-white cursor-pointer">
                  Customer Stories
                </li>
                <li className="hover:text-white cursor-pointer">
                  Download Apps
                </li>
              </ul>
            </div>

            <div className="space-y-3">
              <h3 className="text-white font-semibold">Information</h3>
              <ul className="space-y-2 text-sm">
                <li className="hover:text-white cursor-pointer">
                  Privacy Policy
                </li>
                <li className="hover:text-white cursor-pointer">
                  Terms & Conditions
                </li>
                <li className="hover:text-white cursor-pointer">Join Us</li>
              </ul>
            </div>

            <div className="space-y-3">
              <h3 className="text-white font-semibold">Social Links</h3>

              <ul className="space-y-3 text-sm">
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
                    <path d="M18.244 2H21l-6.59 7.53L22 22h-6.828l-5.35-6.993L3.73 22H1l7.05-8.051L2 2h6.828l4.83 6.346L18.244 2z" />
                  </svg>
                  @CS — Ticket System
                </li>

                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
                    <path d="M4.98 3.5C4.98 4.88 3.87 6 2.49 6 1.11 6 0 4.88 0 3.5 0 2.12 1.11 1 2.49 1c1.38 0 2.49 1.12 2.49 2.5zM.22 8h4.54v14H.22V8zm7.98 0h4.35v1.92h.06c.61-1.16 2.1-2.38 4.32-2.38 4.62 0 5.48 3.04 5.48 6.99V22h-4.54v-6.61c0-1.58-.03-3.61-2.2-3.61-2.2 0-2.54 1.72-2.54 3.5V22H8.2V8z" />
                  </svg>
                  @CS — Ticket System
                </li>

                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
                    <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 5 3.66 9.13 8.44 9.88v-6.99H8.08V12h2.36V9.8c0-2.33 1.39-3.62 3.52-3.62.99 0 2.02.18 2.02.18v2.22h-1.14c-1.12 0-1.47.69-1.47 1.4V12h2.5l-.4 2.89h-2.1v6.99C18.34 21.13 22 17 22 12z" />
                  </svg>
                  @CS — Ticket System
                </li>

                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
                    <path d="M2 4h20v16H2z" />
                  </svg>
                  support@cst.com
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800">
            <div className="w-11/12 mx-auto py-6 text-center text-sm text-gray-400">
              © 2025 CS — Ticket System. All rights reserved.
            </div>
          </div>
        </footer>
      </div>
  );
};

export default Footer;
