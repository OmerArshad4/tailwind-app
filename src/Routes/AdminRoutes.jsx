import { lazy } from "react";

const AdminRoutes = [
  {
    role: "admin",
    isPublic: false,
    path: "/admin/dashboard",
    component: lazy(() => import("../Pages/Admin/Dashboard")),
  },
  {
    role: "admin",
    isPublic: false,
    path: "/admin/uploadCustomers",
    component: lazy(() => import("../Pages/Admin/UploadCustomer/Index")),
  },
    {
    role: "admin",
    isPublic: false,
    path: "/admin/customerDetail",
    component: lazy(() => import("../Pages/Admin/CustomerDetail/Index")),
  },
    {
    role: "admin",
    isPublic: false,
    path: "/admin/customersListing",
    component: lazy(() => import("../Pages/Admin/CustomerListing/Index")),
  },
  {
    role: "admin",
    isPublic: false,
    path: "/admin/allVehicles/:status",
    component: lazy(() => import("../Pages/Vehicles")),
  },
  {
    role: "admin",
    isPublic: false,
    path: "/admin/technicians",
    component: lazy(() => import("../Pages/Admin/Technicians")),
  },
  {
    role: "admin",
    isPublic: false,
    path: "/admin/settings",
    component: lazy(() => import("../Pages/Admin/Settings")),
  },
  {
    role: "admin",
    isPublic: false,
    path: "/admin/deliveredVehicles",
    component: lazy(() => import("../Pages/Delivered_Vehicles")),
  },
  {
    role: "admin",
    isPublic: false,
    path: "/admin/partsListing/:vehicleId",
    component: lazy(() => import("../Pages/PartsListing")),
  },
  {
    role: "admin",
    isPublic: false,
    path: "/allParts",
    component: lazy(() => import("../Pages/PartsListing")),
  },
];

export default AdminRoutes;
