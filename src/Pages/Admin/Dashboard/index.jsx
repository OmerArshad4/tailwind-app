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
import { LuClipboardList, LuClock } from "react-icons/lu";
import { BsCheck2Circle } from "react-icons/bs";
import { MdErrorOutline, MdHistory } from "react-icons/md";
import { IoMdConstruct } from "react-icons/io";
import { FiPlay, FiUploadCloud } from "react-icons/fi";
// import LineChart from "../../../Shared/Charts/LineChart";
import { DASHBOARD_STATS_API_URL } from "../../../Utils/constant";
import { getDashboardStatsByAdmin } from "../../../Redux/features/Admin/adminApi";
import StatusCard from "../../../Shared/StatusCard/Index";
import SectionHeader from "../../../Shared/SectionHeader/imdex";
import ActionCard from "../../../Shared/ActionCard/Index";

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
      label: "Entries Submitted Today",
      value: statsData?.entriesSubmittedToday ?? 0,
      subLabel: "Across 22 contests",
      icon: (
        <LuClipboardList
          size={40}
          className="text-blue-600 bg-blue-100 p-2 rounded-md"
        />
      ),
    },
    {
      label: "Confirmed Entries",
      value: statsData?.confirmedEntries ?? 0,
      subLabel: "Confirmed via email",
      icon: (
        <BsCheck2Circle
          size={40}
          className="text-green-600 bg-green-100 p-2 rounded-md"
        />
      ),
    },
    {
      label: "Failed Attempts",
      value: statsData?.failedAttempts ?? 0,
      subLabel: "Invalid IBAN / captcha failed",
      icon: (
        <MdErrorOutline
          size={40}
          className="text-red-600 bg-red-100 p-2 rounded-md"
        />
      ),
    },
    {
      label: "Queued for Tomorrow",
      value: statsData?.queuedForTomorrow ?? 0,
      subLabel: "Scheduled for entry tomorrow",
      icon: (
        <LuClock
          size={40}
          className="text-indigo-600 bg-indigo-100 p-2 rounded-md"
        />
      ),
    },
    {
      label: "Active Bots",
      value: "3 Active Bots",
      subLabel: "Form filler, Email checker, Crawler",
      icon: (
        <IoMdConstruct
          size={40}
          className="text-emerald-600 bg-emerald-100 p-2 rounded-md"
        />
      ),
    },
    {
      label: "Recent Task Runs",
      value: "Last Run: 12 mins ago",
      subLabel: "Tasks: 200 | Success: 180 | Failures: 20",
      icon: (
        <MdHistory
          size={40}
          className="text-yellow-600 bg-yellow-100 p-2 rounded-md"
        />
      ),
    },
    {
      label: "Latest Upload",
      value: "Today, 3:35 PM",
      subLabel: "256 customers queued",
      icon: (
        <FiUploadCloud
          size={40}
          className="text-sky-600 bg-sky-100 p-2 rounded-md"
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
      <SectionHeader
        title="Admin Control Center"
        subtitle="Upload CSV with customer data"
      />

      <div className="space-y-8">
        {/* Status Overview Section */}
        <div>
          <h2 className="text-lg font-semibold text-gray-800 mb-4">
            Status Overview
          </h2>
          <div className="min-w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-2">
            {CardsData.slice(0, 3).map((card, index) => (
              <StatusCard
                key={index}
                title={card.label}
                value={card.value}
                subtitle={card.subLabel}
                icon={card.icon}
              />
            ))}
          </div>
        </div>

        {/* Summary Statistics Section */}
        <div>
          <h2 className="text-lg font-semibold text-gray-800 mb-4">
            Summary Statistics
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-3">
            {CardsData.slice(3).map((card, index) => (
              <StatusCard
                key={index + 3}
                title={card.label}
                value={card.value}
                subtitle={card.subLabel}
                icon={card.icon}
              />
            ))}
          </div>
        </div>
      </div>
     
      <h2 className="text-base font-semibold text-gray-800 mb-4">Quick Actions</h2>
      <div className="min-w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-2">
        <ActionCard
          icon={<FiUploadCloud className="text-xl" />}
          title="Upload Customer CSV"
          description="Import new customers for entry automation."
          buttonText="+ Upload CSV"
          buttonVariant="primary"
          iconColor="text-teal-700"
          onClick={() => console.log("Upload clicked")}
        />

        <ActionCard
          icon={<FiPlay className="text-xl" />}
          title="Trigger Crawlers"
          description="Run contest crawler on known URLs and keywords."
          buttonText="Run Now"
          buttonVariant="secondary"
          iconColor="text-green-600"
          onClick={() => console.log("Run clicked")}
        />

        <ActionCard
          icon={<FiPlay className="text-xl" />}
          title="View Logs & Reports"
          description="See full system logs or download summary reports."
          buttonText="Open Logs"
          buttonVariant="secondary"
          iconColor="text-purple-600"
          onClick={() => console.log("Logs clicked")}
        />
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
