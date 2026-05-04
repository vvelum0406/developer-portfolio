// @flow strict

import { personalData } from "@/utils/data/personal-data";
import Image from "next/image";
import Link from "next/link";
import { BsLinkedin } from "react-icons/bs";
import { RiContactsFill } from "react-icons/ri";

function HeroSection() {
  return (
    <section className="relative flex flex-col items-center justify-between py-4 lg:py-12">
      <Image
        src="/hero.svg"
        alt="Hero"
        width={1572}
        height={795}
        className="absolute -top-[98px] -z-10"
      />

      <div className="grid grid-cols-1 items-start lg:grid-cols-2 lg:gap-12 gap-y-8">
        {/* LEFT SIDE */}
        <div className="order-2 lg:order-1 flex flex-col items-start justify-center p-2 pb-20 md:pb-10 lg:pt-10 ">
          <h1 className="text-4xl font-bold leading-10 text-black md:font-extrabold lg:text-[2.6rem] lg:leading-[3.5rem]">
            Hey there, <br />
            I am{" "}
            <span className="text-[#054bad]">{personalData.name}.</span>
            <br />
            {`I `}
            <span className="text-[#008080]">
              {personalData.designation}.
            </span>
          </h1>

          {/* LinkedIn ONLY */}
          <div className="my-12 flex items-center gap-5">
            <Link
              href={personalData.linkedIn}
              target="_blank"
              className="transition-all text-[#0a66c2] hover:scale-125 duration-300"
            >
              <BsLinkedin size={30} />
            </Link>
          </div>

          {/* Buttons */}
          <div className="flex items-center gap-3">
            <Link
              href="#contact"
              className="bg-gradient-to-r to-pink-500 from-violet-600 p-[1px] rounded-full transition-all duration-300 hover:from-pink-500 hover:to-violet-600"
            >
              <button className="px-3 text-xs md:px-8 py-3 md:py-4 bg-[#054bad] rounded-full border-none text-center md:text-sm font-medium uppercase tracking-wider text-white transition-all duration-200 ease-out md:font-semibold flex items-center gap-1 hover:gap-3">
                <span>Contact me</span>
                <RiContactsFill size={16} />
              </button>
            </Link>
          </div>
        </div>

        {/* RIGHT SIDE CODE BLOCK */}
        <div className="order-1 lg:order-2 bg-[#2F2F2F] border-[#1b2c68a0] relative rounded-lg">
          <div className="flex flex-row">
            <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-pink-500 to-violet-600"></div>
            <div className="h-[1px] w-full bg-gradient-to-r from-violet-600 to-transparent"></div>
          </div>

          <div className="px-4 lg:px-8 py-5">
            <div className="flex flex-row space-x-2">
              <div className="h-3 w-3 rounded-full bg-red-400"></div>
              <div className="h-3 w-3 rounded-full bg-orange-400"></div>
              <div className="h-3 w-3 rounded-full bg-[#23950A]"></div>
            </div>
          </div>

          <div className="overflow-hidden border-t-[2px] border-indigo-900 px-4 lg:px-8 py-4 lg:py-8">
            <code className="font-mono text-xs md:text-sm lg:text-base">
              <div>
                <span className="text-pink-500">const</span>{" "}
                <span className="text-white">coder</span>{" "}
                <span className="text-pink-500">=</span>{" "}
                <span className="text-gray-400">{'{'}</span>
              </div>

              <div className="ml-4">
                <span className="text-white">name:</span>{" "}
                <span className="text-gray-400">&apos;</span>
                <span className="text-amber-300">Varsha Velumani</span>
                <span className="text-gray-400">&apos;,</span>
              </div>

              <div className="ml-4">
                <span className="text-white">skills:</span>{" "}
                <span className="text-gray-400">
                  {`['React', 'JavaScript', 'C++', 'Java', 'AWS', 'MySQL', 'Docker'],`}
                </span>
              </div>

              <div className="ml-4">
                <span className="text-white">hardWorker:</span>{" "}
                <span className="text-orange-400">true</span>,
              </div>

              <div className="ml-4">
                <span className="text-white">quickLearner:</span>{" "}
                <span className="text-orange-400">true</span>,
              </div>

              <div className="ml-4">
                <span className="text-white">problemSolver:</span>{" "}
                <span className="text-orange-400">true</span>,
              </div>

              <div className="ml-4">
                <span className="text-green-400">hireable:</span>{" "}
                <span className="text-orange-400">function</span>
                <span className="text-gray-400">() {'{'}</span>
              </div>

              <div className="ml-8">
                <span className="text-orange-400">return</span>{" "}
                <span className="text-gray-400">(</span>
              </div>

              <div className="ml-12 text-cyan-400">
                this.hardWorker && this.problemSolver && this.skills.length &gt;= 5
              </div>

              <div className="ml-8 text-gray-400">);</div>
              <div className="ml-4 text-gray-400">{'};'}</div>
              <div className="text-gray-400">{'};'}</div>
            </code>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;