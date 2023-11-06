import React from "react";
import { Tooltip } from "@nextui-org/react";
import Avatar from "@/img/ava.jpg";
import Image from "next/image";
import Link from "next/link";

const Sidebar = () => {
  return (
    <section className="hidden sm:block">
      <div className="bg-white text-black h-screen flex flex-col w-64 sticky top-0">
        <div className="p-2 text-center">
          <div className="relative">
            <div className="h-20 w-full bg-cover rounded-lg bg-center mb-1 bg-[url('../img/cover.png')]"></div>
            <div className="h-20 w-20 bg-white rounded-full mx-auto -mt-10 bg-cover bg-center border-2 border-grey overflow-hidden ease-in duration-300">
              <Image
                src={Avatar}
                alt="profile"
                width={80}
                height={80}
                className="w-full h-full object-cover transition duration-300 transform hover:scale-110"
              />
            </div>
            <h1 className="text-xl font-medium mt-4 text-black flex gap-1 justify-center items-center">
              Viki Flendiansyah
              <Tooltip showArrow={true} content="verified">
                <div>
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M21.56 10.74L20.2 9.16C19.94 8.86 19.73 8.3 19.73 7.9V6.2C19.73 5.14 18.86 4.27 17.8 4.27H16.1C15.71 4.27 15.14 4.06 14.84 3.8L13.26 2.44C12.57 1.85 11.44 1.85 10.74 2.44L9.17 3.81C8.87 4.06 8.3 4.27 7.91 4.27H6.18C5.12 4.27 4.25 5.14 4.25 6.2V7.91C4.25 8.3 4.04 8.86 3.79 9.16L2.44 10.75C1.86 11.44 1.86 12.56 2.44 13.25L3.79 14.84C4.04 15.14 4.25 15.7 4.25 16.09V17.8C4.25 18.86 5.12 19.73 6.18 19.73H7.91C8.3 19.73 8.87 19.94 9.17 20.2L10.75 21.56C11.44 22.15 12.57 22.15 13.27 21.56L14.85 20.2C15.15 19.94 15.71 19.73 16.11 19.73H17.81C18.87 19.73 19.74 18.86 19.74 17.8V16.1C19.74 15.71 19.95 15.14 20.21 14.84L21.57 13.26C22.15 12.57 22.15 11.43 21.56 10.74ZM16.16 10.11L11.33 14.94C11.19 15.08 11 15.16 10.8 15.16C10.6 15.16 10.41 15.08 10.27 14.94L7.85 12.52C7.56 12.23 7.56 11.75 7.85 11.46C8.14 11.17 8.62 11.17 8.91 11.46L10.8 13.35L15.1 9.05C15.39 8.76 15.87 8.76 16.16 9.05C16.45 9.34 16.45 9.82 16.16 10.11Z"
                      fill="#4163E7"
                    />
                  </svg>
                </div>
              </Tooltip>
            </h1>
            <p className=" text-gray-400 mt-1">@vfsyah</p>
            <div className="mt-2 border-b border-gray"></div>
          </div>
        </div>
        <ul className="p-2">
          <Link href={"/"}>
            <li className="flex gap-4 py-2 rounded-xl px-4 hover:bg-background hover:ease-in duration-300">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 18V15"
                  stroke="#292D32"
                  strokeWidth="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M10.0693 2.81985L3.13929 8.36985C2.35929 8.98985 1.85929 10.2998 2.02929 11.2798L3.35929 19.2398C3.59929 20.6598 4.95929 21.8098 6.39929 21.8098H17.5993C19.0293 21.8098 20.3993 20.6498 20.6393 19.2398L21.9693 11.2798C22.1293 10.2998 21.6293 8.98985 20.8593 8.36985L13.9293 2.82985C12.8593 1.96985 11.1293 1.96985 10.0693 2.81985Z"
                  stroke="#292D32"
                  strokeWidth="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              Home
            </li>
          </Link>
          <Link href={"/project"}>
            <li className="flex gap-4 py-2 rounded-xl px-4 hover:bg-background hover:ease-in duration-300">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11 22H16C19.5 22 21 20 21 17V7C21 4 19.5 2 16 2H8C4.5 2 3 4 3 7V14"
                  stroke="#292D32"
                  strokeWidth="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M14.5 4.5V6.5C14.5 7.6 15.4 8.5 16.5 8.5H18.5"
                  stroke="#292D32"
                  strokeWidth="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M4 17L2 19L4 21"
                  stroke="#292D32"
                  strokeWidth="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M7 17L9 19L7 21"
                  stroke="#292D32"
                  strokeWidth="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              Projects
            </li>
          </Link>
          <Link href={"/learn"}>
            <li className="flex gap-4 py-2 rounded-xl px-4 hover:bg-background hover:ease-in duration-300">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M22 16.7397V4.6697C22 3.4697 21.02 2.5797 19.83 2.6797H19.77C17.67 2.8597 14.48 3.9297 12.7 5.0497L12.53 5.1597C12.24 5.3397 11.76 5.3397 11.47 5.1597L11.22 5.0097C9.44 3.8997 6.26 2.8397 4.16 2.6697C2.97 2.5697 2 3.4697 2 4.6597V16.7397C2 17.6997 2.78 18.5997 3.74 18.7197L4.03 18.7597C6.2 19.0497 9.55 20.1497 11.47 21.1997L11.51 21.2197C11.78 21.3697 12.21 21.3697 12.47 21.2197C14.39 20.1597 17.75 19.0497 19.93 18.7597L20.26 18.7197C21.22 18.5997 22 17.6997 22 16.7397Z"
                  stroke="#292D32"
                  strokeWidth="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M12 5.49023V20.4902"
                  stroke="#292D32"
                  strokeWidth="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M7.75 8.49023H5.5"
                  stroke="#292D32"
                  strokeWidth="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M8.5 11.4902H5.5"
                  stroke="#292D32"
                  strokeWidth="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              Learn
            </li>
          </Link>
          <Link href={"/roadmap"}>
            <li className="flex gap-4 py-2 rounded-xl px-4 hover:bg-background hover:ease-in duration-300">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.07006 4.60086C2.87006 1.14086 8.08006 1.14086 8.87006 4.60086C9.34006 6.63086 8.05006 8.35086 6.93006 9.42086C6.11006 10.2009 4.82006 10.1909 4.00006 9.42086C2.89006 8.35086 1.60006 6.63086 2.07006 4.60086Z"
                  stroke="#292D32"
                  strokeWidth="1.5"
                />
                <path
                  d="M15.07 16.6009C15.87 13.1409 21.11 13.1409 21.91 16.6009C22.38 18.6309 21.09 20.3509 19.96 21.4209C19.14 22.2009 17.84 22.1909 17.02 21.4209C15.89 20.3509 14.6 18.6309 15.07 16.6009Z"
                  stroke="#292D32"
                  strokeWidth="1.5"
                />
                <path
                  d="M11.9997 5H14.6797C16.5297 5 17.3897 7.29 15.9997 8.51L8.0097 15.5C6.6197 16.71 7.4797 19 9.3197 19H11.9997"
                  stroke="#292D32"
                  strokeWidth="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M5.48573 5.5H5.49728"
                  stroke="#292D32"
                  strokeWidth="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M18.4857 17.5H18.4973"
                  stroke="#292D32"
                  strokeWidth="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              Roadmap
            </li>
          </Link>
          <Link href={"/about"}>
            <li className="flex gap-4 py-2 rounded-xl px-4 hover:bg-background hover:ease-in duration-300">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.1596 10.87C12.0596 10.86 11.9396 10.86 11.8296 10.87C9.44957 10.79 7.55957 8.84 7.55957 6.44C7.55957 3.99 9.53957 2 11.9996 2C14.4496 2 16.4396 3.99 16.4396 6.44C16.4296 8.84 14.5396 10.79 12.1596 10.87Z"
                  stroke="#292D32"
                  strokeWidth="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M7.15973 14.56C4.73973 16.18 4.73973 18.82 7.15973 20.43C9.90973 22.27 14.4197 22.27 17.1697 20.43C19.5897 18.81 19.5897 16.17 17.1697 14.56C14.4297 12.73 9.91973 12.73 7.15973 14.56Z"
                  stroke="#292D32"
                  strokeWidth="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              About
            </li>
          </Link>
          <Link href={"/contact"}>
            <li className="flex gap-4 py-2 rounded-xl px-4 hover:bg-background hover:ease-in duration-300">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M21.97 18.33C21.97 18.69 21.89 19.06 21.72 19.42C21.55 19.78 21.33 20.12 21.04 20.44C20.55 20.98 20.01 21.37 19.4 21.62C18.8 21.87 18.15 22 17.45 22C16.43 22 15.34 21.76 14.19 21.27C13.04 20.78 11.89 20.12 10.75 19.29C9.6 18.45 8.51 17.52 7.47 16.49C6.44 15.45 5.51 14.36 4.68 13.22C3.86 12.08 3.2 10.94 2.72 9.81C2.24 8.67 2 7.58 2 6.54C2 5.86 2.12 5.21 2.36 4.61C2.6 4 2.98 3.44 3.51 2.94C4.15 2.31 4.85 2 5.59 2C5.87 2 6.15 2.06 6.4 2.18C6.66 2.3 6.89 2.48 7.07 2.74L9.39 6.01C9.57 6.26 9.7 6.49 9.79 6.71C9.88 6.92 9.93 7.13 9.93 7.32C9.93 7.56 9.86 7.8 9.72 8.03C9.59 8.26 9.4 8.5 9.16 8.74L8.4 9.53C8.29 9.64 8.24 9.77 8.24 9.93C8.24 10.01 8.25 10.08 8.27 10.16C8.3 10.24 8.33 10.3 8.35 10.36C8.53 10.69 8.84 11.12 9.28 11.64C9.73 12.16 10.21 12.69 10.73 13.22C11.27 13.75 11.79 14.24 12.32 14.69C12.84 15.13 13.27 15.43 13.61 15.61C13.66 15.63 13.72 15.66 13.79 15.69C13.87 15.72 13.95 15.73 14.04 15.73C14.21 15.73 14.34 15.67 14.45 15.56L15.21 14.81C15.46 14.56 15.7 14.37 15.93 14.25C16.16 14.11 16.39 14.04 16.64 14.04C16.83 14.04 17.03 14.08 17.25 14.17C17.47 14.26 17.7 14.39 17.95 14.56L21.26 16.91C21.52 17.09 21.7 17.3 21.81 17.55C21.91 17.8 21.97 18.05 21.97 18.33Z"
                  stroke="#292D32"
                  strokeWidth="1.5"
                  stroke-miterlimit="10"
                />
              </svg>
              Contact
            </li>
          </Link>
          <Link href={"/dashboard"}>
            <li className="flex gap-4 py-2 rounded-xl px-4 hover:bg-background hover:ease-in duration-300">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M22 10.9V4.1C22 2.6 21.36 2 19.77 2H15.73C14.14 2 13.5 2.6 13.5 4.1V10.9C13.5 12.4 14.14 13 15.73 13H19.77C21.36 13 22 12.4 22 10.9Z"
                  stroke="#292D32"
                  strokeWidth="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M22 19.9V18.1C22 16.6 21.36 16 19.77 16H15.73C14.14 16 13.5 16.6 13.5 18.1V19.9C13.5 21.4 14.14 22 15.73 22H19.77C21.36 22 22 21.4 22 19.9Z"
                  stroke="#292D32"
                  strokeWidth="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M10.5 13.1V19.9C10.5 21.4 9.86 22 8.27 22H4.23C2.64 22 2 21.4 2 19.9V13.1C2 11.6 2.64 11 4.23 11H8.27C9.86 11 10.5 11.6 10.5 13.1Z"
                  stroke="#292D32"
                  strokeWidth="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M10.5 4.1V5.9C10.5 7.4 9.86 8 8.27 8H4.23C2.64 8 2 7.4 2 5.9V4.1C2 2.6 2.64 2 4.23 2H8.27C9.86 2 10.5 2.6 10.5 4.1Z"
                  stroke="#292D32"
                  strokeWidth="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              Dashboard
            </li>
          </Link>
        </ul>
        <div className="mt-1 border-b border-gray"></div>
        <p className="text-gray-400 text-sm text-center mt-4 flex">
          &copy;2023 with
          <div data-testid="love" className="text-red-500 animate-pulse">
            ❤
          </div>
          by vfsyah
        </p>
      </div>
    </section>
  );
};

export default Sidebar;
