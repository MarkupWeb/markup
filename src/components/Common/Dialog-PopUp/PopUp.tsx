import { Dialog } from "@headlessui/react";
import Image from "next/image";
import { useLocale } from "next-intl";
import { HiMiniShieldCheck } from "react-icons/hi2";


interface DialogProps {
  isOpen: boolean;
  onClose: () => void;
  data: {
    heading: string;
    heading2: string;
    imgSrc: string;
    content: {
      title: string;
      description: string;
    }[];
  } | null;
}

const DialogPopUp: React.FC<DialogProps> = ({ isOpen, onClose, data }) => {
  const locale = useLocale();
  const listItems = data?.content || [];
  const dir = locale === "ar" ? "rtl" : "ltr";

  // Define an array of background color classes
  const bgColors = [
    "bg-red-500",
    "bg-green-500",
    "bg-blue-500",
    "bg-gray-500",
    "bg-purple-500",
  ];

  return (
    <Dialog open={isOpen} onClose={onClose} className="relative z-[9999990]">
      {/* The backdrop, rendered as a fixed sibling to the panel container */}
      <div
        className="fixed inset-0 bg-black/30 dark:bg-white/30"
        aria-hidden="true"
      />

      {/* Full-screen scrollable container */}
      <div className="fixed inset-0 w-screen overflow-y-auto">
        {/* Container to center the panel */}
        <div className="flex min-h-full items-center justify-center p-4">
          {/* The actual dialog panel */}
          <Dialog.Panel className="mx-auto max-w-sm rounded bg-white dark:bg-[#1A1F2B]">
            <div className="bg-white dark:bg-[#1A1F2B] pt-2 mx-4 flex justify-end">
              <button
                aria-label="Close"
                className="text-center cursor-pointer rounded-lg w-[30px] h-[30px] hover:text-red-600"
                onClick={onClose}
              >
                X
              </button>
            </div>
            {data ? (
              <div dir={dir} className={`${locale === "ar" ? "__rtl_lang " : ""}`}>
                <div className="flex items-center gap-5 px-4 mb-4">
                  <div className="w-[70px] md:w-[80px] lg:w-[100px] rounded-full">
                    <Image
                      src={data.imgSrc}
                      alt={data.heading}
                      width={100}
                      height={100}
                      className="object-cover"
                      priority
                    />
                  </div>
                  <span className="h-8 border-[2px] border-blue-500 rounded-lg"></span>
                  <h3 className="dark:text-lightblack text-md font-bold">
                    {data.heading}
                  </h3>
                </div>

                <h4 className="text-lightblack flex items-center gap-3 text-sm font-normal mx-3 mb-3">
                  <span className="h-8 border-[2px] border-[#F6AA02] rounded-lg"></span>
                  {data.heading2}
                </h4>

                {/* List of titles and descriptions */}
                <div className="pt-2 pb-5">
                  {listItems.length > 0 ? (
                    listItems.map((item, index) => (
                      <div
                        key={index}
                        className={`mb-3 shadow-2xl md:px-3 py-2 rounded-md mx-2 px-5 ${
                          bgColors[index % bgColors.length] // Cycle through background colors
                        }`}
                      >
                        <h5 className="text-white text-[13px] flex items-center gap-1 font-semibold ">
                        <HiMiniShieldCheck className="text-[16px]" />
                          {item.title}
                        </h5>
                        <p className="text-gray-200 text-[10px] md:text-[10px] py-1 px-5">
                          {item.description}
                        </p>
                      </div>
                    ))
                  ) : (
                    <p className="text-lightblack">
                      No additional information available.
                    </p>
                  )}
                </div>
              </div>
            ) : (
              <p className="text-lightblack p-4">No data available.</p>
            )}
          </Dialog.Panel>
        </div>
      </div>
    </Dialog>
  );
};

export default DialogPopUp;
