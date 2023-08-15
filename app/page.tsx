"use client"
import Head from "next/head"
import { BsFillMoonStarsFill } from "react-icons/bs"

import { AiFillLinkedin, AiFillGithub, AiOutlineDownload } from "react-icons/ai"
import Image from "next/image"
import Myself from "../public/mePic.png"
import ticTac from "../public/tic_tac_toe.png"
import Acc from "../public/acc_logor.png"
import weatherApp from "../public/weather-app.png"
import chimeCandy from "../public/chime-candy.png"

import { useState } from "react"

export default function Home() {
  const [darkMode, setDarkMode] = useState(false)

  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Angel Barbosa Portfolio</title>
        <meta name="description" content="Generated by creat" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-white px-10 md:px-20 lg:px-100 dark:bg-gradient-to-r from-[#111827] to-[#1f2937]">
        <header className="">
          <nav className="pt-10 pb-2 mb-12 flex justify-between">
            <h1 className="text-xl font-burtons dark:text-purple-400">
              Angel Barbosa
            </h1>
            <ul className="flex items-center dark:text-gray-400">
              <li>
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className="hover:-translate-y-1 hover:scale-110 duration-300 cursor-pointer text-2xl dark:hover:fill-white"
                />
              </li>
              <li>
                <button className="bg-gradient-to-r  from-purple-800 to-purple-600  text-white px-4 py-2 rounded-md ml-8 inline-flex items-center hover:-translate-y-1 hover:scale-110 duration-300 hover:from-purple-500 hover:to-purple-400">
                  <svg
                    className="w-3 h-3 mr-2 fill-white"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
                  </svg>
                  <span> Resume</span>
                </button>
              </li>
            </ul>
          </nav>
        </header>

        <section className="flex flex-col lg:flex-row   items-center ">
          <div className="text-center p-10 ml-auto mr-auto">
            <h2 className="text-5xl py-2 text-purple-800 font-medium md:text-10xl dark:text-purple-700">
              Angel Barbosa
            </h2>
            <h3 className="text-2xl py-2 md:text-3xl dark:text-white ">
              Developer and designer.
            </h3>
            <p className="text-md py-5 leading-8 text-gray-800 md:text-xl max-w-xl mx-auto dark:text-gray-200">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. A fugiat
              soluta corporis quod quisquam quo sunt earum reiciendis rem
              explicabo eaque consequatur quasi vitae, perferendis temporibus,
              excepturi repellendus ipsum. Asperiores?
            </p>
            <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400">
              <a
                target={"_blank"}
                href="https://www.linkedin.com/in/angel-barbosa-5a30a8263/"
              >
                <AiFillLinkedin className="hover:-translate-y-1 hover:scale-110 duration-300 dark:hover:fill-white" />
              </a>
              <a target={"_blank"} href="https://github.com/angeelbarbosa">
                <AiFillGithub className="hover:-translate-y-1 hover:scale-110 duration-300 dark:hover:fill-white" />
              </a>
            </div>
          </div>
          <div className="hover:-translate-y-1 hover:scale-110 duration-300 relative mx-auto bg-gradient-to-b from-purple-400 rounded-full w-80 h-80 mt-20 mb-20 overflow-hidden md:h-96 md:w-96 ">
            <Image
              alt="main picture of myself"
              src={Myself}
              layout="fill"
              objectFit="cover"
            />
          </div>
        </section>

        <section>
        <h3 className="text-3xl  py-1 dark:text-white">Education</h3>
          <div className="flex mb-10" >
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              Achieved <span className="text-purple-500 font-bold">Associates Degree in Computer Programming</span>{" "}
              from Austin Community College, specializing in <span className="text-purple-500 font-bold">web development</span>. <br /> The curriculum included key courses such as Programming Fundamentals I & II, Web Design Tools focusing on HTML & CSS, Beginning of Web Programming covering JavaScript essentials, and Intermediate Web Programming emphasizing the integration of HTML, CSS, and JavaScript for dynamic and engaging web solutions.
            </p>
            {/* <Image
                className="block"
                alt=""
                src={Acc}

              /> */}
          </div>
  <section>
          <h3 className="text-3xl text-right py-1 dark:text-white">Experience</h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

            <div className="flex-col hover:-translate-y-1 hover:scale-105 duration-300  shadow-lg p-10 rounded-xl my-10 bg-purple-800 text-white dark:bg-gradient-to-r from-[#3b0764] to-[#1e293b] dark:text-zinc-400">
              <h3 className="" >Marco Polo (Freelance) - Queretaro, Mexico </h3>
              <div className="flex justify-between  ">
              <p className="font-thin text-sm">Front-end Web Developer</p>
              <p className=" text-sm">Mar 2021 – Dec 2022</p>
              </div>
              <p className="mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil saepe modi maxime in voluptas labore dolorum repellat cumque ipsum dolorem beatae nesciunt, perferendis reiciendis sed nobis perspiciatis officia blanditiis rem.</p>
            </div>
          </div>
        </section>

          <div className=" lg:flex gap-10 ">
            <div className=" min-w-0	 hover:-translate-y-1 hover:scale-110 duration-300 text-center shadow-lg p-10 rounded-xl my-10 dark:bg-gradient-to-r  from-[#3b0764] to-[#1e293b] dark:text-zinc-400">
              <Image
                className="w-full  "
                alt=""
                src={ticTac}
                // width={1000}
                // height={1000}
              />
              <h3 className="text-lg font-large pt-8 pb-2">TIC - TAC - TOE</h3>
              <p className="py-2">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam
                obcaecati
              </p>

              <div className=" flex gap-10 justify-center">
                <a
                  target={"_blank"}
                  href="https://angeelbarbosa.github.io/tic-tac-toe/"
                >
                  <button className=" hover:-translate-y-1 hover:scale-110 duration-300 h-12 px-6 m-2 text-lg text-indigo-100  bg-gradient-to-r from-purple-800 to-purple-600 rounded-md hover:from-purple-500 hover:to-purple-400">
                    LIVE VIEW
                  </button>
                </a>
                <button className=" hover:-translate-y-1 hover:scale-110 duration-300 h-12 px-6 m-2 text-lg text-indigo-100  bg-gradient-to-r from-purple-800 to-purple-600 rounded-md hover:from-purple-500 hover:to-purple-400">
                  VIEW CODE
                </button>
              </div>
              <h4 className="py-4 text-teal-600 dark:text-white">
               Skills used
              </h4>
              <div className="flex justify-center gap-10">
                <p className="text-gray-800 py-1 dark:text-gray-400 ">Figma</p>
                <p className="text-gray-800 py-1 dark:text-gray-400">Figma</p>
                <p className="text-gray-800 py-1 dark:text-gray-400">Figma</p>
                <p className="text-gray-800 py-1 dark:text-gray-400">
                  Photoshop
                </p>
                <p className="text-gray-800 py-1 dark:text-gray-400">
                  Illustrator
                </p>
              </div>
            </div>
            <div className=" min-w-0	 hover:-translate-y-1 hover:scale-110 duration-300 text-center shadow-lg p-10 rounded-xl my-10 dark:bg-gradient-to-r  from-[#3b0764] to-[#1e293b] dark:text-zinc-400">
              <Image
                className="w-full  "
                alt=""
                src={weatherApp}
    // width={1000}
    //             height={1000}

              />
              <h3 className="text-lg font-large pt-8 pb-2">WEATHER APP</h3>
              <p className="py-2">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam
                obcaecati
              </p>

              <div className=" flex gap-10 justify-center">
                <a
                  target={"_blank"}
                  href="https://angeelbarbosa.github.io/weather-app/"
                >
                  <button className=" hover:-translate-y-1 hover:scale-110 duration-300 h-12 px-6 m-2 text-lg text-indigo-100  bg-gradient-to-r from-purple-800 to-purple-600 rounded-md hover:from-purple-500 hover:to-purple-400">
                    LIVE VIEW
                  </button>
                </a>
                <button className=" hover:-translate-y-1 hover:scale-110 duration-300 h-12 px-6 m-2 text-lg text-indigo-100  bg-gradient-to-r from-purple-800 to-purple-600 rounded-md hover:from-purple-500 hover:to-purple-400">
                  VIEW CODE
                </button>
              </div>
              <h4 className="py-4 text-teal-600 dark:text-white">
               Skills used
              </h4>
              <div className="flex justify-center gap-10">
                <p className="text-gray-800 py-1 dark:text-gray-400">Figma</p>
                <p className="text-gray-800 py-1 dark:text-gray-400">Figma</p>
                <p className="text-gray-800 py-1 dark:text-gray-400">Figma</p>
                <p className="text-gray-800 py-1 dark:text-gray-400">
                  Photoshop
                </p>
                <p className="text-gray-800 py-1 dark:text-gray-400">
                  Illustrator
                </p>
              </div>
            </div>
            <div className=" min-w-0	hover:-translate-y-1 hover:scale-110 duration-300 text-center shadow-lg p-10 rounded-xl my-10 dark:bg-gradient-to-r  from-[#3b0764] to-[#1e293b] dark:text-zinc-400">
              <Image
                className="w-full "
                alt=""
                src={chimeCandy}
                // width={1000}
                // height={100}
              />
              <h3 className="text-lg font-large pt-8 pb-2">CHIME CANDY</h3>
              <p className="py-2">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam
                obcaecati
              </p>

              <div className=" flex gap-10 justify-center">
                 <a
                  target={"_blank"}
                  href="https://richard-hurley.itch.io/chimecandy"
                >
                  <button className=" hover:-translate-y-1 hover:scale-110 duration-300 h-12 px-6 m-2 text-lg text-indigo-100  bg-gradient-to-r from-purple-800 to-purple-600 rounded-md hover:from-purple-500 hover:to-purple-400">
                    LIVE VIEW
                  </button>
                </a>

              </div>
              <h4 className="py-4 text-teal-600 dark:text-white">
               Skills used
              </h4>
              <div className="flex justify-center gap-10">
                <p className="text-gray-800 py-1 dark:text-gray-400">Figma</p>
                <p className="text-gray-800 py-1 dark:text-gray-400">Figma</p>
                <p className="text-gray-800 py-1 dark:text-gray-400">Figma</p>
                <p className="text-gray-800 py-1 dark:text-gray-400">
                  Photoshop
                </p>
                <p className="text-gray-800 py-1 dark:text-gray-400">
                  Illustrator
                </p>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div>
            <h3 className="text-3xl py-1 dark:text-white">Portfolio</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui,
              necessitatibus. Inventore voluptatem impedit officiis alias nam,
              saepe rem magni <span className="text-teal-500">word</span>{" "}
              lksdlkdjfkldjfkld <span className="text-teal-500">word</span>{" "}
              jsndj
            </p>
          </div>

        </section>
      </main>
    </div>
  )
}
