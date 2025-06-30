import { useState, useRef } from "react";
import { FaFileCsv } from "react-icons/fa";
import SectionHeader from "../../../Shared/SectionHeader/imdex";
import CustomBtn from "../../../Shared/CustomBtn";
import PartsListing from "../../PartsListing";

export default function CustomerListing() {
  const [autoGenerate, setAutoGenerate] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const fileInputRef = useRef(null);

  return (
    <div className="m-4 md:m-8 lg:mx-12">
      <SectionHeader
        title="Customer List"
        subtitle="View customer list"
      />
         <PartsListing/>
  
    </div>
  );
}
