"use client";
import SectionTitle from "../Common/SectionTitle";
import SingleFeature from "./SingleFeature";
import featuresData from "./featuresData";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/20/solid";

import Image from "next/image";

interface faqdata {
  heading: string;
  subheading: string;
}

const faqdata: faqdata[] = [
  {
    heading: "1. What is cryptocurrency?",
    subheading:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into",
  },
  {
    heading: "2. Can cryptocurrency be converted to cash?",
    subheading:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into",
  },
  {
    heading: "3. How long should you hold cryptocurrency?",
    subheading:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into",
  },

  {
    heading: "4. How long should you hold cryptocurrency?",
    subheading:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into",
  },


  
];





const Features = () => {
  return (
    <>
      <section id="features" className="py-10 md:py-20 lg:py-28">
        <div className="container">
          <SectionTitle
            title="Main Features"
            paragraph="There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form."
            center
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            <div className="">
              {faqdata.map((items, i) => (
                <div
                  className="border-[1px] border-gray-400 hover:border-blue-600  mx-auto mb-5 w-full max-w-5xl rounded-2xl px-6 py-8 shadow-md transition-colors"
                  key={i}
                >
                  <Disclosure>
                    {({ open }) => (
                      <>
                        <Disclosure.Button className="text-offwhite  flex w-full justify-between rounded-lg text-left font-medium sm:px-4 sm:py-2 md:text-2xl">
                          <span>{items.heading}</span>
                          <ChevronUpIcon
                            className={`${
                              open ? "rotate-180 transform" : ""
                            } h-5 w-5 text-blue-500`}
                          />
                        </Disclosure.Button>
                        <Disclosure.Panel className="text-bluish px-4 pb-2 pt-4 font-normal opacity-50 md:text-lg">
                          {items.subheading}
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>
                </div>
              ))}
            </div>

            <div className="">
              <Image
                src={"/images/questions/03.svg"}
                alt="faq-image"
                width={741}
                height={279}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
