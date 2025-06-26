import { useDispatch } from "react-redux";
import { FaRegEdit } from "react-icons/fa";
import { LuUserRoundPlus } from "react-icons/lu";
import DataTable from "../../../Shared/DataTable";
import CustomBtn from "../../../Shared/CustomBtn";
import React, { useEffect, useState } from "react";
import CustomModel from "../../../Shared/CustomModel";
import { MdOutlineDeleteForever } from "react-icons/md";
import {
  DELETE_TECHNICIAN_API_URL,
  GET_ALL_TECHNICIANS_API_URL,
} from "../../../Utils/constant";
import AddTechnicianForm from "../../../Shared/Forms/AddTechnicianForm";
import {
  deleteTechnicianByAdmin,
  getAllTechniciansByAdmin,
} from "../../../Redux/features/Admin/adminApi";

const Technicians = () => {
  const dispatch = useDispatch();
  const [showAddCarModel, setShowAddCarModel] = useState(false);
  const [showDeleteModel, setShowDeleteModel] = useState(false);
  const [allTechniciansData, setAllTechniciansData] = useState([]);
  const [selectedTechnician, setSelectedTechnician] = useState(null);
  const [formRole, setFormRole] = useState("");

  const getAllTechniciansFunc = () => {
    const data = {
      apiEndpoint: GET_ALL_TECHNICIANS_API_URL,
    };

    dispatch(getAllTechniciansByAdmin(data)).then((res) => {
      if (res.type === "getAllTechniciansByAdmin/fulfilled") {
        setAllTechniciansData(res?.payload?.data?.technicain?.rows);
      }
    });
  };

  useEffect(() => {
    getAllTechniciansFunc();
  }, []);

  const deleteTechnicianFunc = (id) => {
    const data = {
      apiEndpoint: DELETE_TECHNICIAN_API_URL + `?technicainId=${id}`,
    };
    dispatch(deleteTechnicianByAdmin(data)).then((res) => {
      if (res.type === "deleteTechnicianByAdmin/fulfilled") {
        console.log("Delete api response", res.payload);
        getAllTechniciansFunc();
      }
    });
  };

  const toggleAddCarModel = (row = null, mode = "add") => {
    setSelectedTechnician(row);
    setFormRole(mode);
    setShowAddCarModel((prev) => !prev);
  };

  const toggleDeleteModel = (row = null) => {
    setShowDeleteModel((prev) => !prev);
    setSelectedTechnician(row);
  };

  const TechnicianListingTableHeadings = [
    {
      name: "Technician Name",
      selector: (row) => row?.firstName + " " + row?.lastName,
      sortable: true,
    },
    {
      name: "Email",
      selector: (row) => row?.email,
      sortable: true,
    },
    {
      name: "Phone Number",
      selector: (row) => row?.phoneNumber,
      sortable: true,
    },
    {
      name: "Specialization",
      selector: (row) => row.specialization,
      sortable: true,
    },
    {
      name: "Availability",
      selector: (row) =>
        row.availability ? (
          <div className="border border-green-600 text-green-600 bg-green-200 rounded-sm px-2 py-1 text-center text-sm w-24">
            Available
          </div>
        ) : (
          <div className="border border-gray-600 text-gray-600 bg-gray-300 rounded-sm px-2 py-1 text-center text-sm w-24">
            Unavailable
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
      <h1 className="text-stone-900 font-semibold text-xl mb-4">Technicians</h1>
      <div className="border border-gray-300 rounded-sm bg-white shadow-md">
        <div className="flex justify-between p-6 items-center">
          <h1 className="text-stone-900 font-semibold text-2xl mb-4 items-center flex gap-x-4">
            <p className="text-blue-600">{allTechniciansData?.length}</p>
            Technicians
          </h1>
          <CustomBtn
            text={
              <span className="flex gap-x-2">
                <LuUserRoundPlus size={22} />
                <p> Add New Technician</p>
              </span>
            }
            className={"font-semibold rounded-sm flex justify-end"}
            handleOnClick={() => toggleAddCarModel(null, "add")}
          ></CustomBtn>
        </div>
        <DataTable
          pagination={true}
          selectableRows={true}
          expandableRows={false}
          allData={allTechniciansData}
          tableHeadings={TechnicianListingTableHeadings}
        />

        {/* Add/Edit Technician Modal */}
        <CustomModel
          // buttonStyles
          cancelBtn={false}
          isOpen={showAddCarModel}
          toggle={() => toggleAddCarModel(null, "add")}
          heading={
            formRole === "add" ? "Add New Technician" : "Edit Technician"
          }
          description={
            <AddTechnicianForm
              mode={formRole}
              preFillingData={selectedTechnician}
              toggleAddCarModel={toggleAddCarModel}
              getAllTechniciansFunc={getAllTechniciansFunc}
            />
          }
          icon={
            <div className="flex justify-center items-center bg-blue-200 rounded-full w-14 h-14">
              <LuUserRoundPlus size={30} className="text-blue-600" />
            </div>
          }
          modelSize={"w-full max-w-[80vw]  lg:max-w-[60vw]"}
        />

        <CustomModel
          buttonFunc={() => {
            deleteTechnicianFunc(selectedTechnician?.id);
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
                {selectedTechnician?.firstName +
                  " " +
                  selectedTechnician?.lastName}
              </b>{" "}
              Technician. This action can not be undo
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

export default Technicians;
