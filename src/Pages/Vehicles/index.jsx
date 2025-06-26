import {
  DELETE_VEHICLE_API_URL,
  GET_ALL_VEHICLES_API_URL,
  VEHICLE_STATUS_OPTIONS,
} from "../../Utils/constant";
import {
  deleteVehicleByAdmin,
  getAllVehiclesByAdmin,
} from "../../Redux/features/Admin/adminApi";
import { format } from "date-fns";
import { FaEye } from "react-icons/fa";
import { IoMdAdd } from "react-icons/io";
import { FaRegEdit } from "react-icons/fa";
import DataTable from "../../Shared/DataTable";
import CustomBtn from "../../Shared/CustomBtn";
import { FiAlertTriangle } from "react-icons/fi";
import InputField from "../../Shared/InputField";
import { GiMechanicGarage } from "react-icons/gi";
import CustomModel from "../../Shared/CustomModel";
import { useDispatch, useSelector } from "react-redux";
import AddCarForm from "../../Shared/Forms/AddCarForm";
import { MdOutlineDeleteForever } from "react-icons/md";
import ExpandedCarDetails from "../../Shared/ExpandedCarDetails";
import React, { use, useEffect, useReducer, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";

const Vehicles = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { status } = useParams();
  const location = useLocation();
  const [formRole, setFormRole] = useState("");
  const statusInLocation = location?.state?.status;
  const { user } = useSelector((state) => state.user);
  const [searchByValue, setSearchByValue] = useState("");
  const [allVehiclesData, setAllVehiclesData] = useState([]);
  const [selectedVehicle, setSelectedVehicle] = useState(null);
  const [showDeleteModel, setShowDeleteModel] = useState(false);
  const [showAddCarModel, setShowAddCarModel] = useState(false);

  console.log("Status", status);

  const getAllVehiclesFunc = () => {
    const data = {
      apiEndpoint:
        !status && !statusInLocation
          ? GET_ALL_VEHICLES_API_URL + `?vehiclePoNumber=${searchByValue}`
          : `getVehiclesByStatus?status=${statusInLocation}`,
    };
    dispatch(getAllVehiclesByAdmin(data)).then((res) => {
      if (res.type === "getAllVehiclesByAdmin/fulfilled") {
        setAllVehiclesData(res?.payload?.data?.vehicles?.rows);
      }
    });
  };

  useEffect(() => {
    getAllVehiclesFunc();
  }, [searchByValue]);

  const deleteVehicleFunc = (vehicleId) => {
    const data = {
      apiEndpoint: DELETE_VEHICLE_API_URL + `?vehicleId=${vehicleId}`,
    };
    dispatch(deleteVehicleByAdmin(data)).then((res) => {
      if (res.type === "deleteVehicleByAdmin/fulfilled") {
        getAllVehiclesFunc();
      }
    });
  };

  const toggleAddCarModel = (row = null, mode = "add") => {
    setSelectedVehicle(row);
    setFormRole(mode);
    setShowAddCarModel((prev) => !prev);
  };

  const toggleDeleteModel = (row = null) => {
    setShowDeleteModel((prev) => !prev);
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
      name: "Delivery Date",
      selector: (row) => {
        const isPastDue =
          row?.deliveryDate && new Date() > new Date(row?.deliveryDate); // Check if the delivery date has passed

        return (
          <span
            className={`flex items-center gap-2 ${
              isPastDue ? "text-red-500" : "text-gray-900"
            }`}
          >
            {row?.deliveryDate
              ? format(new Date(row?.deliveryDate), "MM-dd-yyyy")
              : "--"}
            {isPastDue && (
              <div className="bg-red-200 rounded-full">
                <FiAlertTriangle size={22} className="text-red-500 !ml-1.5 mr-1 my-1" />
              </div>
            )}
          </span>
        );
      },
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
          <FaEye
            size={28}
            className="hover:text-blue-600 hover:bg-blue-200 p-1 rounded-sm cursor-pointer"
            onClick={() => {
              navigate(
                `/${user?.role?.toLowerCase()}/partsListing/${row?.vehicleId}`,
                {
                  state: {
                    vehicleDetails: row,
                  },
                }
              );
            }}
          />
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
            {VEHICLE_STATUS_OPTIONS.find((item) => item.value === row?.status)
              ?.label || row?.status}
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
            onClick={() => toggleAddCarModel(row, "edit")}
          />

          <MdOutlineDeleteForever
            size={34}
            onClick={() => toggleDeleteModel(row)}
            className=" p-1.5 rounded-sm bg-red-200 text-red-600 cursor-pointer"
          />
        </div>
      ),
    },
  ];

  return (
    <div className="m-4 md:m-8 lg:mx-12">
      <h1 className="text-stone-900 font-semibold text-xl mb-4">Vehicles</h1>

      <div className="border border-gray-300 rounded-sm shadow-md bg-white">
        <div className="flex justify-between p-6 items-center">
          <h1 className="text-stone-900 font-semibold text-2xl mb-4 items-center flex gap-x-4">
            <p className="text-blue-600">{allVehiclesData?.length}</p>
            {statusInLocation} Vehicles
          </h1>
          {/* <div className="flex gap-4"> */}
          {!status && (
            <InputField
              type="search"
              required={false}
              mainClass="w-max"
              value={searchByValue}
              placeholder="Search by PO Number"
              className=" border rounded-sm !py-2"
              onChangeHandle={(e) => setSearchByValue(e.target.value)}
            />
          )}
          <CustomBtn
            text={
              <span className="flex gap-x-2">
                <IoMdAdd size={24} />
                <p> Add New Vehicle</p>
              </span>
            }
            className={"font-semibold rounded-sm flex justify-end w-max"}
            handleOnClick={() => toggleAddCarModel()}
          ></CustomBtn>
          {/* </div> */}
        </div>
        <DataTable
          pagination={true}
          selectableRows={true}
          expandableRows={true}
          allData={allVehiclesData}
          tableHeadings={OrderListingTableHeadings}
          ExpandedComponent={(rowData) => <ExpandedCarDetails row={rowData} />}
        />

        <CustomModel
          buttonStyles
          cancelBtn={false}
          heading={formRole === "add" ? "Add New Vehicle" : "Update Vehicle"}
          isOpen={showAddCarModel}
          toggle={toggleAddCarModel}
          description={
            <AddCarForm
              mode={formRole}
              preFillingData={selectedVehicle}
              toggleAddCarModel={toggleAddCarModel}
              getAllVehiclesFunc={getAllVehiclesFunc}
            />
          }
          icon={
            <div className="flex justify-center items-center bg-blue-200 rounded-full w-14 h-14">
              <GiMechanicGarage size={34} className="text-blue-600" />
            </div>
          }
          modelSize={"w-full max-w-[80vw]  lg:max-w-[60vw]"}
        />

        <CustomModel
          buttonFunc={() => {
            deleteVehicleFunc(selectedVehicle?.vehicleId);
            toggleDeleteModel();
          }}
          cancelBtn={true}
          buttonText={"Delete"}
          isOpen={showDeleteModel}
          toggle={toggleDeleteModel}
          cancleBtnStyles={"rounded-sm"}
          buttonStyles={
            "border border-red-600 rounded-sm !text-red-600 !bg-red-100 font-semibold hover:!bg-red-200"
          }
          heading={<p className="text-red-600">Are you sure ?</p>}
          description={
            <p>
              Are you sure you want to delete{" "}
              <b>
                {selectedVehicle?.make +
                  " " +
                  selectedVehicle?.model +
                  " " +
                  selectedVehicle?.year}
              </b>{" "}
              .This action can not be undo.
            </p>
          }
          icon={
            <div className="flex justify-center items-center bg-red-200 rounded-full w-14 h-14">
              <MdOutlineDeleteForever size={30} className="text-red-600" />
            </div>
          }
          modelSize={"w-full max-w-96"}
        />
      </div>
    </div>
  );
};

export default Vehicles;
