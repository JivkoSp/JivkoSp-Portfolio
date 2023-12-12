"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

const HeroSection = () => {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-12 my-4">
      <div className="col-span-5 place-self-center mt-4 mb-5 lg:mt-0">
        <div className="lg:w-[400px] lg:h-[400px] w-[250px] h-[250px] rounded-full relative">
          <Image
            src="/images/me.png"
            alt="hero image"
            className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 rounded-3xl"
            width={320}
            height={320}
          />
        </div>
      </div>
      <div className="col-span-7 place-self-center place-items-center grid lg:place-items-start mt-2">
        <h1 className="text-white max-w-2xl mb-4 lg:text-6xl text-4xl font-extrabold">
          <span className="text-transparent font-mono text-6xl bg-clip-text bg-gradient-to-r from-purple-300 via-purple-400 to-purple-700">
            Hello, I'm{" "}
          </span>{" "}
          <br></br>
          <TypeAnimation className="text-purple-700 font-mono"
            sequence={[
              "Jivko Spasov",
              1000,
              "Web Developer",
              1000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
        </h1>
        <p className="text-[#ADB7BE] mb-6 text-base sm:text-lg lg:text-xl font-mono">
          I like <strong className="text-blue-300">solving</strong>  real-life problems with code. 
          I am currently finishing my master's degree in <strong className="text-blue-400">Cybersecurity</strong>.
        </p>
        <div>
          <button className="bg-gradient-to-br bg-purple-950 hover:bg-purple-800 text-white px-6 py-3 rounded-full mr-4 font-mono">
            Hire Me
          </button>
          <button className="m-4 bg-gradient-to-br from-blue-500 via-purple-600 to-purple-800 px-0.5 py-0.5  text-white rounded-full">
            <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2 font-mono">
              Download CV
            </span>
          </button>
        </div>
      </div>
      
    </section>
  );
};

export default HeroSection;