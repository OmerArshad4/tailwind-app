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
      label: "Latest Upload",

      value: "Today, 3:35 PM",
      subLabel: "256 customers queued",
      icon: (
        <svg
          width="17"
          height="16"
          viewBox="0 0 17 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4.66007 9.3334L5.66007 7.40006C5.76879 7.18416 5.93416 7.00187 6.13848 6.8727C6.34281 6.74352 6.57841 6.67233 6.82007 6.66673H13.9934M13.9934 6.66673C14.1971 6.66637 14.3982 6.71269 14.5812 6.80212C14.7642 6.89155 14.9243 7.02172 15.0491 7.18264C15.174 7.34356 15.2603 7.53095 15.3015 7.73043C15.3427 7.92991 15.3377 8.13618 15.2867 8.3334L14.2601 12.3334C14.1858 12.6211 14.0175 12.8758 13.782 13.0569C13.5465 13.2381 13.2572 13.3354 12.9601 13.3334H3.32674C2.97312 13.3334 2.63398 13.1929 2.38393 12.9429C2.13388 12.6928 1.99341 12.3537 1.99341 12.0001V3.3334C1.99341 2.97978 2.13388 2.64064 2.38393 2.39059C2.63398 2.14054 2.97312 2.00006 3.32674 2.00006H5.92674C6.14973 1.99788 6.36971 2.05166 6.56654 2.15648C6.76337 2.2613 6.93077 2.41381 7.05341 2.60006L7.59341 3.40006C7.71481 3.58442 7.88009 3.73574 8.07441 3.84047C8.26873 3.94519 8.486 4.00003 8.70674 4.00006H12.6601C13.0137 4.00006 13.3528 4.14054 13.6029 4.39059C13.8529 4.64064 13.9934 4.97978 13.9934 5.3334V6.66673Z"
            stroke="#64748B"
            stroke-width="1.33333"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      ),
    },
    {
      label: "Active Bots",
      value: "3 Active Bots",

      subLabel: "Form filler, Email checker, Crawler",
      icon: (
        <svg
          width="9"
          height="8"
          viewBox="0 0 9 8"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect x="0.333374" width="8" height="8" rx="4" fill="#22C55E" />
        </svg>
      ),
    },

    {
      label: "Recent Task Runs",
      value: "Last Run: 12 mins ago",

      subLabel: "Tasks: 200 | Success: 180 | Failures: 20",
      icon: (
        <svg
          width="17"
          height="16"
          viewBox="0 0 17 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8.97679 14.6673C12.6587 14.6673 15.6435 11.6825 15.6435 8.00065C15.6435 4.31875 12.6587 1.33398 8.97679 1.33398C5.29489 1.33398 2.31012 4.31875 2.31012 8.00065C2.31012 11.6825 5.29489 14.6673 8.97679 14.6673Z"
            stroke="#64748B"
            stroke-width="1.33333"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M8.97681 4V8L11.6435 9.33333"
            stroke="#64748B"
            stroke-width="1.33333"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      ),
    },
    {
      label: "Entries Submitted Today",
      value: statsData?.entriesSubmittedToday ?? 845,
      color: "text-[#020817]",
      subLabel: "Across 22 contests",
      icon: (
        <svg
          width="17"
          height="16"
          viewBox="0 0 17 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4.66007 9.3334L5.66007 7.40006C5.76879 7.18416 5.93416 7.00187 6.13848 6.8727C6.34281 6.74352 6.57841 6.67233 6.82007 6.66673H13.9934M13.9934 6.66673C14.1971 6.66637 14.3982 6.71269 14.5812 6.80212C14.7642 6.89155 14.9243 7.02172 15.0491 7.18264C15.174 7.34356 15.2603 7.53095 15.3015 7.73043C15.3427 7.92991 15.3377 8.13618 15.2867 8.3334L14.2601 12.3334C14.1858 12.6211 14.0175 12.8758 13.782 13.0569C13.5465 13.2381 13.2572 13.3354 12.9601 13.3334H3.32674C2.97312 13.3334 2.63398 13.1929 2.38393 12.9429C2.13388 12.6928 1.99341 12.3537 1.99341 12.0001V3.3334C1.99341 2.97978 2.13388 2.64064 2.38393 2.39059C2.63398 2.14054 2.97312 2.00006 3.32674 2.00006H5.92674C6.14973 1.99788 6.36971 2.05166 6.56654 2.15648C6.76337 2.2613 6.93077 2.41381 7.05341 2.60006L7.59341 3.40006C7.71481 3.58442 7.88009 3.73574 8.07441 3.84047C8.26873 3.94519 8.486 4.00003 8.70674 4.00006H12.6601C13.0137 4.00006 13.3528 4.14054 13.6029 4.39059C13.8529 4.64064 13.9934 4.97978 13.9934 5.3334V6.66673Z"
            stroke="#64748B"
            stroke-width="1.33333"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      ),
    },
    {
      label: "Confirmed Entries",
      color: "text-[#16A34A]",
      value: statsData?.confirmedEntries ?? 654,

      subLabel: "Confirmed via email",
      icon: (
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14.5339 6.66764C14.8384 8.16184 14.6214 9.71525 13.9192 11.0688C13.2169 12.4224 12.0719 13.4943 10.675 14.1058C9.27803 14.7174 7.7137 14.8315 6.24281 14.4292C4.77193 14.0269 3.48341 13.1326 2.59213 11.8953C1.70085 10.6579 1.26069 9.15246 1.34505 7.62989C1.42941 6.10733 2.0332 4.6597 3.05571 3.52842C4.07823 2.39714 5.45767 1.65059 6.96399 1.41327C8.47031 1.17595 10.0125 1.46221 11.3333 2.2243"
            stroke="#16A34A"
            stroke-width="1.33333"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M6 7.33268L8 9.33268L14.6667 2.66602"
            stroke="#16A34A"
            stroke-width="1.33333"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      ),
    },
    {
      label: "Failed Attempts",
      color: "text-[#DC2626]",

      value: statsData?.failedAttempts ?? 41,
      subLabel: "Invalid IBAN / captcha failed",
      icon: (
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14.4866 11.9995L9.15329 2.66617C9.037 2.46097 8.86836 2.29029 8.66457 2.17154C8.46078 2.0528 8.22915 1.99023 7.99329 1.99023C7.75743 1.99023 7.52579 2.0528 7.322 2.17154C7.11822 2.29029 6.94958 2.46097 6.83329 2.66617L1.49995 11.9995C1.38241 12.2031 1.32077 12.4341 1.32129 12.6692C1.32181 12.9042 1.38447 13.135 1.50292 13.338C1.62136 13.5411 1.79138 13.7092 1.99575 13.8254C2.20011 13.9415 2.43156 14.0016 2.66662 13.9995H13.3333C13.5672 13.9993 13.797 13.9375 13.9995 13.8204C14.202 13.7032 14.3701 13.5349 14.487 13.3322C14.6038 13.1296 14.6653 12.8998 14.6653 12.6658C14.6652 12.4319 14.6036 12.2021 14.4866 11.9995Z"
            stroke="#DC2626"
            stroke-width="1.33333"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M8 6V8.66667"
            stroke="#DC2626"
            stroke-width="1.33333"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M8 11.334H8.00667"
            stroke="#DC2626"
            stroke-width="1.33333"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      ),
    },
    {
      label: "Queued for Tomorrow",
      color: "text-[#2563EB]",
      value: statsData?.queuedForTomorrow ?? 312,
      subLabel: "Scheduled for entry tomorrow",
      icon: (
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6.66669 1.33398H9.33335"
            stroke="#2563EB"
            stroke-width="1.33333"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M8 9.33398L10 7.33398"
            stroke="#2563EB"
            stroke-width="1.33333"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M8.00002 14.6667C10.9455 14.6667 13.3334 12.2789 13.3334 9.33333C13.3334 6.38781 10.9455 4 8.00002 4C5.0545 4 2.66669 6.38781 2.66669 9.33333C2.66669 12.2789 5.0545 14.6667 8.00002 14.6667Z"
            stroke="#2563EB"
            stroke-width="1.33333"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      ),
    },
  ];

  const actionItems = [
    {
    icon: (
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M28 20V25.3333C28 26.0406 27.719 26.7189 27.219 27.219C26.7189 27.719 26.0406 28 25.3333 28H6.66667C5.95942 28 5.28115 27.719 4.78105 27.219C4.28095 26.7189 4 26.0406 4 25.3333V20"
            stroke="#2563EB"
            stroke-width="1.66667"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M22.6667 10.6667L16 4L9.33337 10.6667"
            stroke="#2563EB"
            stroke-width="1.66667"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M16 4V20"
            stroke="#2563EB"
            stroke-width="1.66667"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      ),  
      title: "Upload Customer CSV",
      description: "Import new customers for entry automation.",
      buttonText: "+ Upload CSV",
      buttonVariant: "primary",
      iconColor: "text-teal-700",
      onClick: () => console.log("Upload clicked"),
    },
    {
      icon: (
       <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16 10.6673V5.33398H10.6666" stroke="#16A34A" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M24 10.666H8.00004C6.52728 10.666 5.33337 11.8599 5.33337 13.3327V23.9993C5.33337 25.4721 6.52728 26.666 8.00004 26.666H24C25.4728 26.666 26.6667 25.4721 26.6667 23.9993V13.3327C26.6667 11.8599 25.4728 10.666 24 10.666Z" stroke="#16A34A" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M2.66663 18.666H5.33329" stroke="#16A34A" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M26.6666 18.666H29.3333" stroke="#16A34A" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M20 17.334V20.0007" stroke="#16A34A" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 17.334V20.0007" stroke="#16A34A" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

      ), 
      title: "Trigger Crawlers",
      description: "Run contest crawler on known URLs and keywords.",
      buttonText: "Run Now",
      buttonVariant: "secondary",
      iconColor: "text-green-600",
      onClick: () => console.log("Run clicked"),
    },
    {
      icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M19.9952 2.66602H7.99516C7.28791 2.66602 6.60964 2.94697 6.10954 3.44706C5.60944 3.94716 5.32849 4.62544 5.32849 5.33268V26.666C5.32849 27.3733 5.60944 28.0515 6.10954 28.5516C6.60964 29.0517 7.28791 29.3327 7.99516 29.3327H23.9952C24.7024 29.3327 25.3807 29.0517 25.8808 28.5516C26.3809 28.0515 26.6618 27.3733 26.6618 26.666V9.33268L19.9952 2.66602Z" stroke="#9333EA" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M18.6617 2.66602V7.99935C18.6617 8.70659 18.9427 9.38487 19.4428 9.88497C19.9429 10.3851 20.6212 10.666 21.3284 10.666H26.6617" stroke="#9333EA" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M13.3284 12H10.6617" stroke="#9333EA" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M21.3284 17.334H10.6617" stroke="#9333EA" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M21.3284 22.666H10.6617" stroke="#9333EA" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

      ), 
      title: "View Logs & Reports",
      description: "See full system logs or download summary reports.",
      buttonText: "Open Logs",
      buttonVariant: "secondary",
      iconColor: "text-purple-600",
      onClick: () => console.log("Logs clicked"),
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

      <div className="space-y-4">
        <div>
          <h2 className="font-dm-sans font-semibold text-[18px] leading-[28px] text-[#111827]">
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
                color={card.color}
              />
            ))}
          </div>
        </div>

        {/* Summary Statistics Section */}
        <div>
          <h2 className="font-dm-sans font-semibold text-[18px] leading-[28px] text-[#111827]">
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
                color={card.color}
              />
            ))}
          </div>
        </div>
      </div>

      <h2 className="font-dm-sans font-semibold text-[18px] leading-[28px] text-[#111827] md:mt-4">
        Quick Actions
      </h2>
      <div className="min-w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-2">
        {actionItems.map((item, index) => (
          <ActionCard
            key={index}
            icon={item.icon}
            title={item.title}
            description={item.description}
            buttonText={item.buttonText}
            buttonVariant={item.buttonVariant}
            iconColor={item.iconColor}
            onClick={item.onClick}
          />
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
