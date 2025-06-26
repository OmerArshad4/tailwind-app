import { format } from "date-fns";
import { useDispatch } from "react-redux";
import { FaRegEdit } from "react-icons/fa";
import DataTable from "../../Shared/DataTable";
import { GiMechanicGarage } from "react-icons/gi";
import React, { useEffect, useState } from "react";
import CustomModel from "../../Shared/CustomModel";
import ExpandedCarDetails from "../../Shared/ExpandedCarDetails";
import { GET_ALL_DELIVERED_VEHICLES_API_URL } from "../../Utils/constant";
import UpdateVehicleStatusForm from "../../Shared/Forms/UpdateVehicleStatusForm";
import { getAllDeliveredVehiclesByAdmin } from "../../Redux/features/Admin/adminApi";
import InputField from "../../Shared/InputField";

const DeliverdVehicles = () => {
  const dispatch = useDispatch();
  const [searchByValue, setSearchByValue] = useState("");
  const [allVehiclesData, setAllVehiclesData] = useState([]);
  const [selectedVehicle, setSelectedVehicle] = useState(null);
  const [showEditStatusModel, setShowEditStatusModel] = useState(false);

  const getAllDeliverdVehiclesFunc = () => {
    const data = {
      apiEndpoint:
        GET_ALL_DELIVERED_VEHICLES_API_URL +
        `?vehiclePoNumber=${searchByValue}`,
    };
    dispatch(getAllDeliveredVehiclesByAdmin(data)).then((res) => {
      if (res.type === "getAllDeliveredVehiclesByAdmin/fulfilled") {
        setAllVehiclesData(res?.payload?.data?.vehicles?.rows);
      }
    });
  };

  useEffect(() => {
    getAllDeliverdVehiclesFunc();
  }, [searchByValue]);

  const toggleStatusChangeModel = (row) => {
    setShowEditStatusModel(!showEditStatusModel);
    setSelectedVehicle(row);
  };

  const OrderListingTableHeadings = [
    {
      name: "Vehicle Make",
      selector: (row) => row.make,
      sortable: true,
    },
    {
      name: "Vehicle Model",
      selector: (row) => row.model,
      sortable: true,
    },
    {
      name: "Vehicle Year",
      selector: (row) => row.year,
      sortable: true,
    },
    {
      name: "PO Number",
      selector: (row) => row.vehiclePoNumber,
      sortable: true,
    },
    {
      name: "Delivery Date",
      selector: (row) => format(new Date(row?.deliveryDate), "MM-dd-yyyy"),
      sortable: true,
    },
    {
      name: "Technicians Count",
      selector: (row) => row.TechnicianIds.length,
      sortable: true,
    },
    {
      name: "Parts Count",
      selector: (row) => (
        <div className="flex gap-4">
          <p>{row?.carPart?.length}</p>
        </div>
      ),
      sortable: true,
    },
    {
      name: "Status",
      selector: (row) =>
        row.status === "Delivered" ? (
          <div className="border border-green-600 text-green-600 bg-green-200 rounded-sm px-2 py-1 text-center text-sm w-22">
            Delivered
          </div>
        ) : (
          <div className="border border-gray-600 text-gray-600 bg-gray-300 rounded-sm px-2 py-1 text-center text-sm w-22">
            {row.status}
          </div>
        ),
      sortable: true,
    },
    {
      name: "Action",
      selector: (row) => (
        <div className="flex gap-2">
          <FaRegEdit
            size={34}
            className=" p-1.5 rounded-sm bg-blue-200 text-blue-600 cursor-pointer"
            onClick={() => toggleStatusChangeModel(row)}
          />
        </div>
      ),
    },
  ];

  return (
    <div className="m-4 md:m-8 lg:mx-12">
      <h1 className="text-stone-900 font-semibold text-xl mb-4">
        Delivered Vehicles
      </h1>

      <div className="border border-gray-300 rounded-sm shadow-md bg-white">
        <div className="flex justify-between p-6 items-center">
          <h1 className="text-stone-900 font-semibold text-2xl mb-4 items-center flex gap-x-4">
            <p className="text-blue-600">{allVehiclesData?.length}</p>
            Delivered Vehicles
          </h1>
          <InputField
            type="search"
            required={false}
            mainClass="w-max"
            value={searchByValue}
            placeholder="Search by PO Number"
            className=" border rounded-sm !py-2"
            onChangeHandle={(e) => setSearchByValue(e.target.value)}
          />
        </div>
        <DataTable
          pagination={true}
          expandableRows={false}
          selectableRows={false}
          allData={allVehiclesData}
          tableHeadings={OrderListingTableHeadings}
          ExpandedComponent={(rowData) => <ExpandedCarDetails row={rowData} />}
        />
      </div>

      <CustomModel
        buttonStyles
        cancelBtn={false}
        isOpen={showEditStatusModel}
        heading={"Edit Vehicle Status"}
        toggle={toggleStatusChangeModel}
        description={
          <UpdateVehicleStatusForm
            getAllDeliverdVehiclesFunc={getAllDeliverdVehiclesFunc}
            toggleStatusChangeModel={toggleStatusChangeModel}
            selectedVehicle={selectedVehicle}
          />
        }
        icon={
          <div className="flex justify-center items-center bg-blue-200 rounded-full w-14 h-14">
            <GiMechanicGarage size={34} className="text-blue-600" />
          </div>
        }
        modelSize={"w-full max-w-[80vw]  md:max-w-[50vw] lg:max-w-[30vw]"}
      />
    </div>
  );
};

export default DeliverdVehicles;
