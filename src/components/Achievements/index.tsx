"use client";
import SectionTitle from "../Common/SectionTitle";

import Image from "next/image";

interface faqdata {
  heading: string;
  subheading: string;
}


const Atchievements = () => {
  return (
    <>
      <section id="features" className="py-10 md:py-20 lg:py-28">
        <div className="container">
          <SectionTitle
            title="Our Atchievements"
            paragraph="There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form."
            center
          />

          <div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 md:py-0 lg:px-8">

            <div className="mt-8 sm:mt-12">
              
              <dl className="grid grid-cols-1 gap-4 sm:grid-cols-3 sm:divide-x sm:divide-gray-100 dark:sm:divide-gray-800">
                <div className="flex flex-col px-4 py-8 text-center">
                  <dt className="order-last text-lg font-medium text-gray-500 dark:text-gray-400">
                    Total Sales
                  </dt>

                  <dd className="text-4xl font-extrabold text-blue-600 md:text-5xl">
                    $4.8m
                  </dd>
                </div>

                <div className="flex flex-col px-4 py-8 text-center">
                  <dt className="order-last text-lg font-medium text-gray-500 dark:text-gray-400">
                    Official Addons
                  </dt>

                  <dd className="text-4xl font-extrabold text-blue-600 md:text-5xl">
                    24
                  </dd>
                </div>

                <div className="flex flex-col px-4 py-8 text-center">
                  <dt className="order-last text-lg font-medium text-gray-500 dark:text-gray-400">
                    Total Addons
                  </dt>

                  <dd className="text-4xl font-extrabold text-blue-600 md:text-5xl">
                    86
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Atchievements;
