import Link from "next/link";
import ThemeChanger from "./DarkSwitch";
import Image from "next/image";
import { Disclosure } from "@headlessui/react";

const Navbar = () => {
  const navigation = [
    { name: "Home", link: "#hero" },
    { name: "Features", link: "#features" },
    { name: "Services", link: "#services" },
    { name: "Gallery", link: "#gallery" },
    { name: "Contact Us", link: "#contact" },
  ];

  return (
    <div className="w-full sticky top-0 bg-white dark:bg-primary shadow-md z-50">
      <nav className="container relative flex flex-wrap items-center justify-between p-8 mx-auto lg:justify-between xl:px-0">
        {/* Logo  */}
        <Disclosure>
          {({ open }) => (
            <>
              <div className="flex flex-wrap items-center justify-between w-full lg:w-auto">
                <Link href="/">
                  <span className="flex items-center space-x-2 text-2xl font-medium text-indigo-500 dark:text-gray-50">
                    <span>
                      <Image
                        src="/img/logo.svg"
                        alt="logo"
                        width="32"
                        height="32"
                        className="w-8"
                      />
                    </span>
                    {/* <span>DIAMOND ROOFING</span> */}
                  </span>
                </Link>

                <Disclosure.Button
                  aria-label="Toggle Menu"
                  className="px-2 py-1 ml-auto text-gray-500 rounded-md lg:hidden hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none dark:text-gray-300 dark:focus:bg-trueGray-700"
                >
                  <svg
                    className="w-6 h-6 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    {open && (
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                      />
                    )}
                    {!open && (
                      <path
                        fillRule="evenodd"
                        d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                      />
                    )}
                  </svg>
                </Disclosure.Button>

                <Disclosure.Panel className="flex flex-wrap w-full my-5 lg:hidden">
                  <>
                    {navigation.map((item, index) => (
                      <Link
                        key={index}
                        href={item.link}
                        className="w-full px-4 py-2 -ml-4 text-primary rounded-md dark:text-gray-100 hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 dark:focus:bg-gray-800 focus:outline-none scroll-smooth"
                      >
                        {item.name}
                      </Link>
                    ))}
                    <div className="flex items-center mr-3 space-x-4 mt-2 lg:hidden">
                      <Link
                        href="tel:+977-98011122233"
                        className="px-6 py-2 text-white bg-indigo-600 dark:text-primary dark:bg-white dark:font-semibold rounded-md transition duration-300 ease-in-out hover:scale-110"
                      >
                        +977-98011122233
                      </Link>

                      <ThemeChanger />
                    </div>
                  </>
                </Disclosure.Panel>
              </div>
            </>
          )}
        </Disclosure>

        {/* menu  */}
        <div className="hidden text-center lg:flex lg:items-center">
          <ul className="items-center justify-end flex-1 pt-6 list-none lg:pt-0 lg:flex">
            {navigation.map((menu, index) => (
              <li className="mr-3 nav__item" key={index}>
                <Link
                  href={menu.link}
                  className="inline-block px-4 py-2 text-lg font-medium text-gray-900 no-underline rounded-md dark:text-white hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none dark:focus:bg-gray-800"
                >
                  {menu.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="hidden mr-3 space-x-4 lg:flex nav__item">
          <Link
            href="tel:+977-98011122233"
            className="px-6 py-2 text-white bg-indigo-600 dark:text-primary dark:bg-white dark:font-semibold rounded-md md:ml-5 transition duration-300 ease-in-out hover:scale-110"
          >
            +977-98011122233
          </Link>

          <ThemeChanger />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
