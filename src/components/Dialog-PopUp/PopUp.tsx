import { Dialog } from "@headlessui/react";
import Image from "next/image";
import { useState } from "react";
import { useLocale } from "next-intl";


interface DialogProps {
  isOpen: boolean;
  onClose: () => void;
  data: {
    heading: string;
    heading2: string;
    imgSrc: any;
    
    content: {
      title: string;
      description: string;
    }[];
  } | null;
}

const DialogPopUp: React.FC<DialogProps> = ({ isOpen, onClose, data }) => {
    const local = useLocale();
  const listItems = data?.content || []; // Default to an empty array if data or data.list is undefined

  return (
    <Dialog open={isOpen} onClose={onClose} className="relative z-[999999]">
      {/* The backdrop, rendered as a fixed sibling to the panel container */}
      <div className="fixed inset-0 bg-black/30 dark:bg-white/30" aria-hidden="true" />

      {/* Full-screen scrollable container */}
      <div className="fixed inset-0 w-screen overflow-y-auto">
        {/* Container to center the panel */}
        <div className="flex min-h-full items-center">
          {/* The actual dialog panel */}
          <Dialog.Panel className={`mx-auto max-w-md rounded bg-black   text-white px-3 py-4  ${local === "ar" ? "__rtl_lang  " : ""}`}>
            <div className="pt-1 mx-4 flex justify-end">
              <span
                className="text-center bg-slate-800 shadow-2xl hover:bg-slate-900  cursor-pointer rounded-lg w-[25px] h-[25px]"
                onClick={onClose}
              >
                X
              </span>
            </div>
            {data && (
              <div>
                <div className="flex items-center gap-3 mb-5">
                  <div className="bg-white rounded-full">
                    <Image
                      src={data.imgSrc}
                      alt={data.heading}
                      width={60}
                      height={60}
                      className="m-auto inline-block"
                    />
                  </div>
                  <h3 className="text-white dark:text-lightblack text-md font-semibold">
                    {data.heading}
                  </h3>
                </div>

                <h4 className="text-lightblack pt-1 text-md  font-normal opacity-50">
                  {data.heading2}
                </h4>
                

                {/* List of titles and descriptions */}
                <div className="pt-2">
                  {listItems.length > 0 ? (
                    listItems.map((item, index) => (
                      <div key={index} className="mb-2 bg-slate-800 shadow-2xl px-5 md:px-1 py-2 rounded-md">
                        <h5 className="text-white text-sm ">{item.title}</h5>
                        <p className="text-gray-400 text-[10px] md:text-[10px] py-1">
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis ullam.
                        </p>
                      </div>
                    ))
                  ) : (
                    <p className="text-lightblack">No additional information available.</p>
                  )}
                </div>
              </div>
            )}
          </Dialog.Panel>
        </div>
      </div>
    </Dialog>
  );
};

export default DialogPopUp;
