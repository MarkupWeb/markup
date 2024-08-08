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
    <Dialog open={isOpen} onClose={onClose} className="relative z-50">
      {/* The backdrop, rendered as a fixed sibling to the panel container */}
      <div className="fixed inset-0 bg-black/30 dark:bg-white/30" aria-hidden="true" />

      {/* Full-screen scrollable container */}
      <div className="fixed inset-0 w-screen overflow-y-auto">
        {/* Container to center the panel */}
        <div className="flex min-h-full items-center">
          {/* The actual dialog panel */}
          <Dialog.Panel className={`mx-auto max-w-md rounded bg-black text-white p-4 ${local === "ar" ? "__rtl_lang  " : ""}`}>
            <div className="py-1 mx-4 flex justify-end">
              <span
                className="text-center bg-[#7c7c7c] cursor-pointer rounded-lg w-[30px] h-[30px]"
                onClick={onClose}
              >
                X
              </span>
            </div>
            {data && (
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-white rounded-full">
                    <Image
                      src={data.imgSrc}
                      alt={data.heading}
                      width={50}
                      height={50}
                      className="m-auto inline-block"
                    />
                  </div>
                  <h3 className="text-white dark:text-lightblack text-lg font-semibold">
                    {data.heading}
                  </h3>
                </div>

                <h4 className="text-lightblack pt-2 text-lg font-normal opacity-50">
                  {data.heading2}
                </h4>
                

                {/* List of titles and descriptions */}
                <div className="pt-4">
                  {listItems.length > 0 ? (
                    listItems.map((item, index) => (
                      <div key={index} className="mb-2 bg-slate-500 px-5 py-2 rounded-md">
                        <h5 className="text-white font-semibold">{item.title}</h5>
                        <p className="text-lightblack">{item.description}</p>
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
