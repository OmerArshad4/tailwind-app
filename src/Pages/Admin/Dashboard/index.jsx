import { TbCar } from "react-icons/tb";
import { LuGift } from "react-icons/lu";
import { useDispatch } from "react-redux";
import { BsHouseDown } from "react-icons/bs";
import { TbCarGarage } from "react-icons/tb";
import { GrUserAdmin } from "react-icons/gr";
import { useNavigate } from "react-router-dom";
import { TbTruckDelivery } from "react-icons/tb";
import React, { useEffect, useState } from "react";
import { MdOutlineCarCrash } from "react-icons/md";
import { IoCarSportOutline } from "react-icons/io5";
// import LineChart from "../../../Shared/Charts/LineChart";
import { DASHBOARD_STATS_API_URL } from "../../../Utils/constant";
import { getDashboardStatsByAdmin } from "../../../Redux/features/Admin/adminApi";

const Dashboard = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [statsData, setStatsData] = useState({
    AllVehicle: 0,
    overdueCount: 0,
    totalCustomer: 0,
    vehiclePending: 0,
    totalTechnician: 0,
    vehicleDelivered: 0,
    NotInShop: 0,
    vehicleInProgress: 0,
    vehiclePartOrdered: 0,
    vehiclePartDelivered: 0,
    averageCompletionTime: 0,
    vehiclePartReadyToOrder: 0,
  });
  const fetchDashboardStatsFunc = () => {
    const data = {
      apiEndpoint: DASHBOARD_STATS_API_URL,
    };

    dispatch(getDashboardStatsByAdmin(data)).then((res) => {
      if (res.type === "getDashboardStatsByAdmin/fulfilled") {
        setStatsData(res?.payload?.data?.data);
      }
    });
  };

  useEffect(() => {
    fetchDashboardStatsFunc();
  }, []);

  const CardsData = [
    {
      label: "All Vehicles",
      value: statsData?.AllVehicle,
      redirectPath: () =>
        navigate("/admin/allVehicles/all", { state: { status: "" } }),
      icon: (
        <TbCar size={58} className="text-blue-600 bg-blue-200 p-3 rounded-sm" />
      ),
    },
    {
      label: "Vehicles Pending",
      value: statsData?.vehiclePending,
      redirectPath: () =>
        navigate("/admin/allVehicles/Pending", {
          state: { status: "Pending" },
        }),
      icon: (
        <TbCarGarage
          size={58}
          className="text-blue-600 bg-blue-200 p-3 rounded-sm"
        />
      ),
    },
    {
      label: "Vehicles In Process",
      value: statsData?.vehicleInProgress,
      redirectPath: () =>
        navigate("/admin/allVehicles/InProgress", {
          state: { status: "InProgress" },
        }),
      icon: (
        <MdOutlineCarCrash
          size={58}
          className="text-blue-600 bg-blue-200 p-3 rounded-sm"
        />
      ),
    },
    {
      label: "Vehicles Delivered",
      value: statsData?.vehicleDelivered,
      redirectPath: () =>
        navigate("/admin/allVehicles/Delivered", {
          state: { status: "Delivered" },
        }),
      icon: (
        <IoCarSportOutline
          size={58}
          className="text-blue-600 bg-blue-200 p-2 rounded-sm"
        />
      ),
    },
    {
      label: "Vehicles Not In Shop",
      value: statsData?.NotInShop,
      redirectPath: () =>
        navigate("/admin/allVehicles/NotInShop", {
          state: { status: "NotInShop" },
        }),
      icon: (
        <IoCarSportOutline
          size={58}
          className="text-blue-600 bg-blue-200 p-2 rounded-sm"
        />
      ),
    },
    {
      label: "Total Technicians",
      value: statsData?.totalTechnician,
      redirectPath: () => navigate("/admin/technicians"),
      icon: (
        <GrUserAdmin
          size={58}
          className="text-blue-600 bg-blue-200 p-2 rounded-sm"
        />
      ),
    },
    {
      label: "Parts Ready To Order",
      value: statsData?.vehiclePartReadyToOrder,
      redirectPath: () =>
        navigate("/allParts", { state: { status: "ReadyToOrder" } }),
      icon: (
        <TbTruckDelivery
          size={58}
          className="text-blue-600 bg-blue-200 p-2 rounded-sm"
        />
      ),
    },
    {
      label: "Parts Ordered",
      value: statsData?.vehiclePartOrdered,
      redirectPath: () =>
        navigate("/allParts", { state: { status: "Ordered" } }),
      icon: (
        <LuGift
          size={58}
          className="text-blue-600 bg-blue-200 p-2 rounded-sm"
        />
      ),
    },
    {
      label: "Parts Delivered",
      value: statsData?.vehiclePartDelivered,
      redirectPath: () =>
        navigate("/allParts", { state: { status: "Delivered" } }),
      icon: (
        <BsHouseDown
          size={58}
          className="text-blue-600 bg-blue-200 p-2 rounded-sm"
        />
      ),
    },
  ];

  // const graphData = [
  //   { label: "08/04", FormSubmitted: 20, FormAccepted: 10 },
  //   { label: "09/04", FormSubmitted: 40, FormAccepted: 20 },
  //   { label: "10/04", FormSubmitted: 50, FormAccepted: 30 },
  //   { label: "11/04", FormSubmitted: 35, FormAccepted: 25 },
  //   { label: "12/04", FormSubmitted: 60, FormAccepted: 40 },
  //   { label: "13/04", FormSubmitted: 45, FormAccepted: 35 },
  //   { label: "14/04", FormSubmitted: 55, FormAccepted: 50 },
  // ];

  return (
    <div className="m-4 md:m-8 lg:mx-12">
      <h1 className="text-stone-900 font-semibold text-xl mb-4">Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
        {CardsData.map((item, index) => (
          <div
            key={index}
            className="bg-white border border-gray-300 rounded-sm shadow-md flex justify-evenly items-center py-8 cursor-pointer"
            onClick={item?.redirectPath}
          >
            {item?.icon}

            <div>
              <p className="font-bold text-3xl ">{item?.value}</p>
              <p className="text-blue-600 font-semibold">{item?.label}</p>
            </div>
          </div>
        ))}
      </div>

      {/* <div className="bg-white shadow-lg rounded-sm p-4 mb-4 border border-gray-300">
        <h1 className="text-stone-900 font-semibold text-2xl mb-4 items-center">
          Vehicles Graph
        </h1>
        <LineChart graphData={graphData} />
      </div> */}
    </div>
  );
};

export default Dashboard;
