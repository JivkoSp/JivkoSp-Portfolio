"use client";
import React, { useState, useTransition } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li><a href="https://www.w3schools.com/cs/" target="_blank" rel="noreferrer"> 
                    <Image src="https://raw.githubusercontent.com/devicons/devicon/master/icons/csharp/csharp-original.svg"
                          className="inline-block"
                          alt="csharp"
                          width={35} height={35}></Image>
            </a>
        </li>
        <li>.NET</li>
        <li>JavaScript</li>
        <li>PostgreSQL</li>
        <li>RabbitMq</li>
        <li>Git</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Technical University Varna</li>
        <li>Naval Academy &quot;Nikola Yonkov Vaptsarov&quot;</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section id="about" className="text-white">
      <div className="gap-8 items-center py-8 px-4 xl:gap-16 md:grid md:grid-cols-2 sm:py-16 xl:px-16">
        <Image src="/images/new.png" alt="aboutme" className="rounded-3xl hidden md:block" width={550} height={550} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-purple-200 mb-4 font-mono">About Me</h2>
          <p className="text-white text-base lg:text-lg font-mono">
            I am a full stack web developer with a passion for creating reliable,
            interactive and responsive web applications. I have experience
            working with C#, .NET, JavaScript, PostgreSQL, Elasticsearch, gRPC and Git. I am always looking to expand my knowledge and skill set.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              Skills
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              Education
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;