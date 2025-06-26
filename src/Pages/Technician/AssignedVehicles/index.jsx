import { format } from "date-fns";
import { FaRegEdit } from "react-icons/fa";
import { LuUserRoundPlus } from "react-icons/lu";
import DataTable from "../../../Shared/DataTable";
import React, { useEffect, useState } from "react";
import CustomModel from "../../../Shared/CustomModel";
import { useDispatch, useSelector } from "react-redux";
import ExpandedCarDetails from "../../../Shared/ExpandedCarDetails";
import UpdateVehicleStatusForm from "../../../Shared/Forms/UpdateVehicleStatusForm";
import { GET_ALL_ASSIGNED_VEHICLES_BY_TECHNICIAN_API_URL } from "../../../Utils/constant";
import { getAllAssignedVehiclesByTechnician } from "../../../Redux/features/Technician/technicianApi";

const AssignedVehicles = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);
  const [selectedRow, setSelectedRow] = useState(null);
  const [allAssignedVehicles, setAllAssignedVehicles] = useState([]);
  const [showUpdateVehicleModal, setShowUpdateVehicleModal] = useState(false);

  const getAllAssignedVehicles = () => {
    const data = {
      apiEndpoint:
        GET_ALL_ASSIGNED_VEHICLES_BY_TECHNICIAN_API_URL +
        `?TechnicianId=${user?.id}`,
    };
    dispatch(getAllAssignedVehiclesByTechnician(data)).then((res) => {
      if (res.type === "getAllAssignedVehiclesByTechnician/fulfilled") {
        console.log(res?.payload?.data?.VehicleTechnicians?.VehicleTechnicians);
        setAllAssignedVehicles(
          res?.payload?.data?.VehicleTechnicians?.VehicleTechnicians
        );
      }
    });
  };

  useEffect(() => {
    getAllAssignedVehicles();
  }, []);

  const toggleUpdateVehicleModal = (row) => {
    setSelectedRow(row);
    setShowUpdateVehicleModal(!showUpdateVehicleModal);
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
      name: "Delivery Date",
      selector: (row) => format(new Date(row?.deliveryDate), "MM-dd-yyyy"),
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
            onClick={() => toggleUpdateVehicleModal(row)}
          />
        </div>
      ),
    },
  ];

  return (
    <div className="m-4 md:m-8 lg:mx-12">
      <h1 className="text-stone-900 font-semibold text-xl mb-4">
        Assigned Vehicle
      </h1>

      <div className="border border-gray-300 rounded-sm shadow-md bg-white">
        <div className="flex justify-between p-6 items-center">
          <h1 className="text-stone-900 font-semibold text-2xl mb-4 items-center">
            Assigned Vehicle
          </h1>
        </div>
        <DataTable
          pagination={true}
          selectableRows={true}
          expandableRows={true}
          allData={allAssignedVehicles}
          tableHeadings={OrderListingTableHeadings}
          ExpandedComponent={(rowData) => <ExpandedCarDetails row={rowData} />}
        />
      </div>

      <CustomModel
        // buttonStyles
        cancelBtn={false}
        isOpen={showUpdateVehicleModal}
        heading={"Update Vehicle Status"}
        toggle={() => toggleUpdateVehicleModal()}
        description={
          <UpdateVehicleStatusForm
            data={selectedRow}
            getAllAssignedVehicles={getAllAssignedVehicles}
            toggleUpdateVehicleModal={toggleUpdateVehicleModal}
          />
        }
        icon={
          <div className="flex justify-center items-center bg-blue-200 rounded-full w-14 h-14">
            <LuUserRoundPlus size={30} className="text-blue-600" />
          </div>
        }
        modelSize={"w-full max-w-[80vw] lg:max-w-[30vw]"}
      />
    </div>
  );
};

export default AssignedVehicles;
