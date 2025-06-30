import { useState, useRef } from "react";
import { FaFileCsv } from "react-icons/fa";
import SectionHeader from "../../../Shared/SectionHeader/imdex";
import CustomBtn from "../../../Shared/CustomBtn";
import InfoBlock from "../../../Shared/InfoBlock/Index";

export default function CustomerDetail() {
 
  return (
    <div className="m-4 md:m-8 lg:mx-12">
      <SectionHeader
        title="Customer Details"
        subtitle="Mr. John Doe"
      />
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-6">
      <InfoBlock
        title="Personal Information"
        fields={[
          { label: "Upload ID", value: "250611-00001" },
          { label: "Customer ID", value: "CustomerId" },
          { label: "Date of Birth", value: "15-3-1985" },
          { label: "Salutation", value: "Mr." },
          { label: "First Name", value: "John" },
          { label: "Last Name", value: "Doe" },
        ]}
      />
      <InfoBlock
        title="Contact Information"
        fields={[
          { label: "Generated Email", value: "250611-00001@nexmail.info" },
          { label: "Phone Number", value: "+49 30 12345678" },
        ]}
      />
      <InfoBlock
        title="Address Information"
        fields={[
          { label: "Street", value: "Hauptstrabe" },
          { label: "House Number", value: "123" },
          { label: "Postal Code", value: "10115" },
          { label: "City", value: "Berlin" },
          {
            label: "Full Address",
            value: (
              <>
                Hauptstrabe 123 <br />
                10115 Berlin
              </>
            ),
          },
        ]}
      />
      <InfoBlock
        title="Validation Status"
        fields={[
          {
            label: "Record Status",
            value: (
              <span className="text-green-600 font-medium border border-green-500 rounded-full px-2 py-1 inline-block">
                Valid Record
              </span>
            ),
          },
          {
            label: "",
            value: "All required fields are present and valid.",
          },
        ]}
      />
    </div>
    </div>
  );
}
