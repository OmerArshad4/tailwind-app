import { format } from "date-fns";
import { useDispatch, useSelector } from "react-redux";
import Toaster from "../../Shared/Toaster";
import { FiDownload } from "react-icons/fi";
import DataTable from "../../Shared/DataTable";
import PdfTemplate from "../../Shared/PdfTemplate";
import React, { useEffect, useState } from "react";
import { PDFDownloadLink } from "@react-pdf/renderer";
import ExpandedCarDetails from "../../Shared/ExpandedCarDetails";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { getAllParts } from "../../Redux/features/Admin/adminApi";

const PartsListing = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { vehicleId } = useParams();
  const [partsData, setPartsData] = useState();
  const vehicleDetails = location?.state?.vehicleDetails;
  const { user } = useSelector((state) => state.user);
  const [statusInState, setStatusInState] = useState(location?.state?.status);

  useEffect(() => {
    if (!vehicleId && statusInState) {
      const data = {
        apiEndpoint: `getAllParts?status=${statusInState}`,
      };
      dispatch(getAllParts(data)).then((res) => {
        if (res.type === "getAllParts/fulfilled") {
          setPartsData(res?.payload?.data?.vehiclesParts?.rows);
        }
      });
    } else if (vehicleId) {
      setPartsData(location?.state?.vehicleDetails?.carPart);
    } else if (!vehicleId && !statusInState) {
      navigate(`/${user?.role}/otherVehicles`);
      Toaster.error("Please select a vehicle to view this page.");
    }
  }, []);

  const partsListingTableHeadings = [
    {
      name: "Part Number",
      selector: (row) => row.partNumber,
      sortable: true,
    },
    {
      name: "Description",
      selector: (row) => row.description,
      sortable: true,
    },
    {
      name: "Quantity",
      selector: (row) => row.quantity,
      sortable: true,
    },
    {
      name: "Price",
      selector: (row) => row.price,
      sortable: true,
    },
    {
      name: "Our Price",
      selector: (row) => row.ourPrice,
      sortable: true,
    },
    {
      name: "Delivery Date",
      selector: (row) => format(new Date(row?.deliveryDate), "MM-dd-yyyy"),
      sortable: true,
    },
    {
      name: "Supplier",
      selector: (row) => row.supplier,
      sortable: true,
    },
    {
      name: "Notes",
      selector: (row) => row.notes,
      sortable: true,
    },
    {
      name: "Status",
      selector: (row) => row.status,
      sortable: true,
    },
    {
      name: "Download",
      selector: (row) => (
        <div className="flex gap-2">
          <PDFDownloadLink
            document={<PdfTemplate data={row} />}
            fileName={`${row?.partNumber}.pdf`}
          >
            {({ loading }) =>
              loading ? (
                <span className="flex items-center gap-2">
                  <FiDownload
                    size={36}
                    className=" p-1.5 rounded-sm bg-blue-200 text-blue-600  cursor-pointer"
                  />
                </span>
              ) : (
                <span className="flex items-center gap-2">
                  <FiDownload
                    size={36}
                    className=" p-1.5 rounded-sm bg-blue-200 text-blue-600  cursor-pointer"
                  />
                </span>
              )
            }
          </PDFDownloadLink>
        </div>
      ),
    },
  ];

  return (
    <div className="m-4 md:m-8 lg:mx-12">
      <h1 className="text-stone-900 font-semibold text-xl mb-4">
        {vehicleDetails &&
          vehicleDetails?.make +
            " " +
            vehicleDetails?.model +
            " " +
            vehicleDetails?.year}{" "}
        {""}
        Parts Listing
      </h1>

      <div className="border border-gray-300 rounded-sm shadow-md bg-white">
        <div className="flex justify-between p-6 items-center">
          <h1 className="text-stone-900 font-semibold text-2xl mb-4 items-center flex gap-x-4">
            <p className="text-blue-600">{partsData?.length}</p>
            {statusInState} Parts
          </h1>
        </div>
        <DataTable
          pagination={true}
          allData={partsData}
          expandableRows={true}
          selectableRows={false}
          tableHeadings={partsListingTableHeadings}
          ExpandedComponent={(rowData) => <ExpandedCarDetails row={rowData} />}
        />
      </div>
    </div>
  );
};

export default PartsListing;
