import { useState, useRef } from "react";
import { FaFileCsv } from "react-icons/fa";
import SectionHeader from "../../../Shared/SectionHeader/imdex";
import CustomBtn from "../../../Shared/CustomBtn";

export default function UploadCustomer() {
  const [autoGenerate, setAutoGenerate] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const fileInputRef = useRef(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedFile(file);
      console.log("Selected file:", file);
    }
  };

  const triggerFileInput = () => {
    fileInputRef.current.click();
  };

  return (
    <div className="m-4 md:m-8 lg:mx-12">
      <SectionHeader
        title="Upload Customers"
        subtitle="View 7-day scheduled tasks"
      />

      <div className="max-w-3xl mt-10 p-6 bg-white border border-[#E2E8F0] rounded-lg shadow-sm px-5 py-4 gap-1">
        <h2 className="font-dm-sans text-[24px] text-[#020817] mb-4">
          CSV File Upload
        </h2>

        <label className="font-oswald text-base text-black/90 mb-4">
          Select CSV File
        </label>

        {/* Upload Box */}
        <div
          className="border border-gray-300 border-dashed rounded-md p-6 mx-auto text-gray-500 cursor-pointer hover:border-teal-500 transition"
          onClick={triggerFileInput}
        >
          <div className="flex flex-col items-center justify-center space-y-2">
            <svg
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M33.1716 14.3107C33.0925 14.1298 32.9819 13.9645 32.845 13.8223L22.845 3.82232C22.7028 3.68537 22.5375 3.57476 22.3566 3.49565C22.3066 3.47232 22.2533 3.45898 22.2 3.44065C22.0605 3.39337 21.9153 3.36479 21.7683 3.35565C21.7333 3.35232 21.7016 3.33398 21.6666 3.33398H9.99996C8.16163 3.33398 6.66663 4.82898 6.66663 6.66732V33.334C6.66663 35.1723 8.16163 36.6673 9.99996 36.6673H30C31.8383 36.6673 33.3333 35.1723 33.3333 33.334V15.0007C33.3333 14.9657 33.315 14.934 33.3116 14.8973C33.3025 14.7503 33.2739 14.6052 33.2266 14.4657C33.2111 14.4123 33.1927 14.3607 33.1716 14.3107ZM27.6433 13.334H23.3333V9.02398L27.6433 13.334ZM9.99996 33.334V6.66732H20V15.0007C20 15.4427 20.1756 15.8666 20.4881 16.1792C20.8007 16.4917 21.2246 16.6673 21.6666 16.6673H30L30.0033 33.334H9.99996Z"
                fill="#1A7F8B"
              />
              <path
                d="M13.3334 20.0007H26.6667V23.334H13.3334V20.0007ZM13.3334 26.6673H26.6667V30.0007H13.3334V26.6673ZM13.3334 13.334H16.6667V16.6673H13.3334V13.334Z"
                fill="#1A7F8B"
              />
            </svg>

            <span className="font-dm-sans text-[14px] text-black/60 text-center">
              {selectedFile ? "Replace File" : "Drag & Drop or Choose File"}
            </span>

            {selectedFile && (
              <p className="text-sm text-teal-600 font-medium">
                {selectedFile.name}
              </p>
            )}
          </div>
        </div>

        <input
          type="file"
          accept=".csv"
          ref={fileInputRef}
          className="hidden"
          onChange={handleFileChange}
        />

        <p className="text-[14px] text-[#6B7280] mt-4">
          Only CSV files allowed. Max size: 5MB.
        </p>

        <div className="mt-4 flex items-center space-x-2">
          <input
            id="autoGenerate"
            type="checkbox"
            checked={autoGenerate}
            onChange={() => setAutoGenerate(!autoGenerate)}
            className="w-[18px] h-[18px] rounded-[2px] border-[2px] border-[#000000b3]"
          />
          <label htmlFor="autoGenerate" className="text-[14px] text-[#020817]">
            Auto-generate pseudo emails and Upload IDs
          </label>
        </div>

        <CustomBtn text="Upload & Process file" className="my-3" />
      </div>
    </div>
  );
}
