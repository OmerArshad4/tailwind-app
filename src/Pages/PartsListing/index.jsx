import React, { useState } from "react";
import { FiEye, FiEdit } from "react-icons/fi";
import DataTable from "../../Shared/DataTable"; // Assuming you're using this
import ExpandedCarDetails from "../../Shared/ExpandedCarDetails";
import { useNavigate } from "react-router-dom";

const PartsListing = () => {
  const [rowsPerPage, setRowsPerPage] = useState(10); // default
  const [currentPage, setCurrentPage] = useState(1);
  const [totalRows, setTotalRows] = useState(0);
  const navigate = useNavigate();
  const handleCustomerDetail = () => {
    navigate("/admin/customerDetail");
  };
  const [partsData] = useState([
    {
      recordId: 3,
      contact: "86797867...",
      firstName: "Mr. John",
      lastName: "Doe",
      kundennummer: "250528-...",
      salutation: "+49 123...",
      street: "5",
      postalCode: "23442",
      city: "Austin",
      dob: "1980-03...",
      phone2: "(303) 5...",
      email2: "tim.jenni...",
      uploadId: "345365...",
    },
    {
      recordId: 3,
      contact: "86797867...",
      firstName: "Mr. John",
      lastName: "Doe",
      kundennummer: "250528-...",
      salutation: "+49 123...",
      street: "5",
      postalCode: "23442",
      city: "Austin",
      dob: "1980-03...",
      phone2: "(303) 5...",
      email2: "tim.jenni...",
      uploadId: "345365...",
    },
    {
      recordId: 3,
      contact: "86797867...",
      firstName: "Mr. John",
      lastName: "Doe",
      kundennummer: "250528-...",
      salutation: "+49 123...",
      street: "5",
      postalCode: "23442",
      city: "Austin",
      dob: "1980-03...",
      phone2: "(303) 5...",
      email2: "tim.jenni...",
      uploadId: "345365...",
    },
    {
      recordId: 3,
      contact: "86797867...",
      firstName: "Mr. John",
      lastName: "Doe",
      kundennummer: "250528-...",
      salutation: "+49 123...",
      street: "5",
      postalCode: "23442",
      city: "Austin",
      dob: "1980-03...",
      phone2: "(303) 5...",
      email2: "tim.jenni...",
      uploadId: "345365...",
    },
    {
      recordId: 3,
      contact: "86797867...",
      firstName: "Mr. John",
      lastName: "Doe",
      kundennummer: "250528-...",
      salutation: "+49 123...",
      street: "5",
      postalCode: "23442",
      city: "Austin",
      dob: "1980-03...",
      phone2: "(303) 5...",
      email2: "tim.jenni...",
      uploadId: "345365...",
    },
  ]);

  const partsListingTableHeadings = [
    // {
    //   name: "Record ID",
    //   selector: (row) => row.recordId,
    //   sortable: true,
    // },
    {
      name: "Contact",
      selector: (row) => row.contact,
      sortable: true,
    },
    {
      name: "First Name",
      selector: (row) => row.firstName,
      sortable: true,
    },
    {
      name: "Last Name",
      selector: (row) => row.lastName,
      sortable: true,
    },
    {
      name: "Kundennummer",
      selector: (row) => row.kundennummer,
      sortable: true,
    },
    {
      name: "Salutation",
      selector: (row) => row.salutation,
      sortable: true,
    },
    {
      name: "Street",
      selector: (row) => row.street,
      sortable: true,
    },
    {
      name: "Postal Code",
      selector: (row) => row.postalCode,
      sortable: true,
    },
    {
      name: "City",
      selector: (row) => row.city,
      sortable: true,
    },
    {
      name: "DOB",
      selector: (row) => row.dob,
      sortable: true,
    },
    {
      name: "Phone 2",
      selector: (row) => row.phone2,
      sortable: true,
    },
    {
      name: "Email2",
      selector: (row) => row.email2,
      sortable: true,
    },
    {
      name: "Upload ID",
      selector: (row) => row.uploadId,
      sortable: true,
    },
    {
      name: "Actions",
      selector: () => (
        <div className="flex gap-2">
          <button
            onClick={handleCustomerDetail}
            className="p-1 rounded bg-gray-200 hover:bg-gray-300"
          >
            <FiEye size={16} />
          </button>
          <button className="p-1 rounded bg-gray-200 hover:bg-gray-300">
            <FiEdit size={16} />
          </button>
        </div>
      ),
    },
  ];
  const handleChangeRowsPerPage = (newPerPage, page) => {
    setRowsPerPage(newPerPage);
    setCurrentPage(page);

    // If you're using API:
    // fetchPartsData({ perPage: newPerPage, page: page });
  };
  const handlePageChange = (page) => {
    setCurrentPage(page);

    // If you're using API:
    // fetchPartsData({ perPage: rowsPerPage, page: page });
  };

  return (
    <div className="m-4 md:m-8 lg:mx-12">
      <h1 className="text-stone-900 font-semibold text-xl mb-4">
        Dummy User Record Table
      </h1>

      <div className="border border-gray-300 rounded-sm shadow-md bg-white">
        <div className="flex justify-between p-6 items-center">
          <h1 className="text-stone-900 font-semibold text-2xl mb-4 items-center flex gap-x-4">
            <p className="text-blue-600">{partsData?.length}</p>
            Records
          </h1>
        </div>
        <DataTable
          pagination={true}
          totalRows={totalRows}
          allData={partsData}
          expandableRows={true}
          onChangePage={handlePageChange}
          onChangeRowsPerPage={handleChangeRowsPerPage}
          selectableRows={false}
          tableHeadings={partsListingTableHeadings}
          ExpandedComponent={(rowData) => <ExpandedCarDetails row={rowData} />}
        />
      </div>
    </div>
  );
};

export default PartsListing;
