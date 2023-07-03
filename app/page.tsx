"use client"
import Head from "next/head"
import { BsFillMoonStarsFill } from "react-icons/bs"
import { BsDownload } from "react-icons/bs"
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai"
import Image from "next/image"
import myself from "../public/mePic.png"
import design from "../public/design.png"
import code from "../public/code.png"
import consulting from "../public/consulting.png"
import web1 from "../public/web1.png"
import ticTac from "../public/tic_tac_toe.png"
import spotify from "../public/spotify_project.png"
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

      <main className="bg-white px-10 md:px-20 lg:px-100 dark:bg-gradient-to-b from-gray-900 to-gray-400">
        <header>
          <nav className="py-10 mb-12 flex justify-between">
            <h1 className="text-xl font-burtons dark:text-gray-400">
              Angel Barbosa
            </h1>
            <ul className="flex items-center dark:text-gray-400">
              <li>
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className="cursor-pointer text-2xl"
                />
              </li>
              <li>
                <a
                  className="bg-gradient-to-r  from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8"
                  href="#"
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
        </header>

        <section className="flex flex-col lg:flex-row  min-h-screen items-center">
          <div className="text-center p-10 ml-auto mr-auto">
            <h2 className="text-5xl py-2 text-teal-600 font-medium md:text-10xl dark:text-teal-400">
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
                <AiFillLinkedin />
              </a>
              <a target={"_blank"} href="https://github.com/angeelbarbosa">
                <AiFillGithub />
              </a>
            </div>
          </div>
          <div className="relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 mb-20 overflow-hidden md:h-96 md:w-96 ">
            <Image
              alt="main picture of myself"
              src={myself}
              layout="fill"
              objectFit="cover"
            />
          </div>
        </section>
        <section>
          <div>
            <h3 className="text-3xl py-1">insert text here later</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui,
              necessitatibus. Inventore voluptatem impedit officiis alias nam,
              saepe rem magni <span className="text-teal-500">word</span>{" "}
              lksdlkdjfkldjfkld <span className="text-teal-500">word</span>{" "}
              jsndj
            </p>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui,
              necessitatibus. Inventore voluptatem impedit officiis alias nam,
              saepe rem magn
            </p>
          </div>
          <div className="lg:flex gap-10">
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white">
              <Image
                className="w-full h-50"
                alt=""
                src={ticTac}
                width={100}
                height={100}
              />
              <h3 className="text-lg font-medium pt-8 pb-2">nice designs</h3>
              <p className="py-2">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam
                obcaecati
              </p>
              <h4 className="py-4 text-teal-600">Design tools I use</h4>
              <p className="text-gray-800 py-1">Figma</p>
              <p className="text-gray-800 py-1">Photoshop</p>
              <p className="text-gray-800 py-1">Illustrator</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white">
              <Image
                className="w-full h-40"
                alt=""
                src={code}
                width={100}
                height={100}
              />
              <h3 className="text-lg font-medium pt-8 pb-2">nice designs</h3>
              <p className="py-2">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam
                obcaecati
              </p>
              <h4 className="py-4 text-teal-600">Design tools I use</h4>
              <p className="text-gray-800 py-1">Figma</p>
              <p className="text-gray-800 py-1">Photoshop</p>
              <p className="text-gray-800 py-1">Illustrator</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white">
              <Image
                className="w-full"
                alt=""
                src={consulting}
                width={100}
                height={100}
              />
              <h3 className="text-lg font-medium pt-8 pb-2">nice designs</h3>
              <p className="py-2">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam
                obcaecati
              </p>
              <h4 className="py-4 text-teal-600">Design tools I use</h4>
              <button className="text-white py-1 bg-gradient-to-r from-cyan-500 to-teal-500">
                Figma
              </button>
              <p className="text-gray-800 py-1">Photoshop</p>
              <p className="text-gray-800 py-1">Illustrator</p>
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
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            <div className="relative basis-1/3 flex-1">
              <Image
                className="w-full rounded-lg object-cover"
                alt=""
                src={ticTac}
                // width={"100%"}
                // height={"100%"}
                layout="responsive"
              />
              <button className="absolute  bottom-0 bg-gradient-to-r  from-cyan-500 to-teal-500 text-white p-2 rounded hover:bg-blue-800 m-2">
                LIVE VIEW
              </button>
              <button className="absolute  bottom-0 right-0 bg-gradient-to-r  from-cyan-500 to-teal-500 text-white p-2 rounded hover:bg-blue-800 m-2">
                CODE
              </button>
            </div>
            <div className=" bg basis-1/3 flex-1">
              <a
                target={"_blank"}
                href="https://angeelbarbosa.github.io/my-own-spotify-player/"
              >
                <Image
                  alt=""
                  src={spotify}
                  className="rounded-lg object-cover"
                  // width={"100%"}
                  // height={"100%"}
                  layout="responsive"
                />
              </a>
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                alt=""
                src={web1}
                className="rounded-lg object-cover"
                // width={"100%"}
                // height={"100%"}
                layout="responsive"
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
