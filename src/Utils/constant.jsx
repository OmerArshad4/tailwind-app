export const LOGIN_API_URL = "/login";
export const VERIFY_OTP_API_URL = "/verifyOtp";
export const DASHBOARD_STATS_API_URL = "/dashboard";
export const SET_PASSWORD_API_URL = "/resetPassword";
export const UPLOAD_PDF_FILE_API_URL = "/readpdffile";
export const DELETE_VEHICLE_API_URL = "/deleteVehicle";
export const GET_REMINDER_DAYS_API_URL = "/getReminder";
export const FORGET_PASSWORD_API_URL = "/forgetPassword";
export const ADD_NEW_CAR_API_URL = "/addCustomerVehicle";
export const GET_ALL_VEHICLES_API_URL = "/getAllVehicle";
export const UPDATE_CAR_API_URL = "/updateCustomerVehicle";
export const ADD_NEW_TECHNICIAN_API_URL = "/addTechnician";
export const DELETE_TECHNICIAN_API_URL = "/deleteTechnician";
export const UPDATE_TECHNICIANS_API_URL = "/updateTechnician";
export const GET_ALL_TECHNICIANS_API_URL = "/getAllTechnician";
export const UPDATE_REMINDER_DAYS_API_URL = "/updateReminderDays";
export const FIND_VEHICLE_DETAIL_BY_VIN_NUMBER_API_URL = "/findVinNumber";
export const GET_ALL_DELIVERED_VEHICLES_API_URL = "/getAllDeliveredVehicle";
// Technician apis endpoint
export const GET_ALL_ASSIGNED_VEHICLES_BY_TECHNICIAN_API_URL =
  "getTechnicainVehicle";

export const YearsData = () => {
  const currentYear = new Date().getFullYear();
  const yearsArray = [];
  for (let year = 1950; year <= currentYear; year++) {
    yearsArray.push({ label: year, value: year });
  }
  return yearsArray;
};

export const VehicleMakers = [
  { label: "Toyota", value: "Toyota" },
  { label: "Volkswagen", value: "Volkswagen" },
  { label: "Ford", value: "Ford" },
  { label: "Honda", value: "Honda" },
  { label: "General Motors", value: "General Motors" },
  { label: "BMW", value: "BMW" },
  { label: "Mercedes-Benz", value: "Mercedes-Benz" },
  { label: "Hyundai", value: "Hyundai" },
  { label: "Nissan", value: "Nissan" },
  { label: "Kia", value: "Kia" },
  { label: "Peugeot", value: "Peugeot" },
  { label: "Renault", value: "Renault" },
  { label: "Fiat", value: "Fiat" },
  { label: "Chevrolet", value: "Chevrolet" },
  { label: "Subaru", value: "Subaru" },
  { label: "Mazda", value: "Mazda" },
  { label: "Tesla", value: "Tesla" },
  { label: "Volvo", value: "Volvo" },
  { label: "Jaguar", value: "Jaguar" },
  { label: "Land Rover", value: "Land Rover" },
  { label: "Mitsubishi", value: "Mitsubishi" },
  { label: "Suzuki", value: "Suzuki" },
  { label: "Porsche", value: "Porsche" },
  { label: "Ferrari", value: "Ferrari" },
  { label: "Lamborghini", value: "Lamborghini" },
  { label: "Aston Martin", value: "Aston Martin" },
  { label: "Bentley", value: "Bentley" },
  { label: "Rolls-Royce", value: "Rolls-Royce" },
  { label: "Maserati", value: "Maserati" },
  { label: "Alfa Romeo", value: "Alfa Romeo" },
  { label: "Citroën", value: "Citroën" },
  { label: "Dodge", value: "Dodge" },
  { label: "Jeep", value: "Jeep" },
  { label: "Ram", value: "Ram" },
  { label: "Chrysler", value: "Chrysler" },
  { label: "Buick", value: "Buick" },
  { label: "Cadillac", value: "Cadillac" },
  { label: "GMC", value: "GMC" },
  { label: "Lincoln", value: "Lincoln" },
  { label: "Acura", value: "Acura" },
  { label: "Infiniti", value: "Infiniti" },
  { label: "Lexus", value: "Lexus" },
  { label: "Mini", value: "Mini" },
  { label: "Skoda", value: "Skoda" },
  { label: "Seat", value: "Seat" },
  { label: "Saab", value: "Saab" },
  { label: "Opel", value: "Opel" },
  { label: "Vauxhall", value: "Vauxhall" },
  { label: "Dacia", value: "Dacia" },
  { label: "Lada", value: "Lada" },
  { label: "Geely", value: "Geely" },
  { label: "Great Wall", value: "Great Wall" },
  { label: "BYD", value: "BYD" },
  { label: "Chery", value: "Chery" },
  { label: "Tata Motors", value: "Tata Motors" },
  { label: "Mahindra & Mahindra", value: "Mahindra & Mahindra" },
  { label: "Proton", value: "Proton" },
  { label: "Perodua", value: "Perodua" },
  { label: "Holden", value: "Holden" },
  { label: "SsangYong", value: "SsangYong" },
  { label: "Genesis", value: "Genesis" },
  { label: "Pagani", value: "Pagani" },
  { label: "Koenigsegg", value: "Koenigsegg" },
  { label: "Bugatti", value: "Bugatti" },
  { label: "McLaren", value: "McLaren" },
  { label: "Rivian", value: "Rivian" },
  { label: "Lucid Motors", value: "Lucid Motors" },
  { label: "Fisker", value: "Fisker" },
  { label: "Polestar", value: "Polestar" },
  { label: "Nio", value: "Nio" },
  { label: "XPeng", value: "XPeng" },
  { label: "Li Auto", value: "Li Auto" },
  { label: "VinFast", value: "VinFast" },
];

export const TECHNICIAN_SPECIALIZATIONS = [
  { label: "Mechanic", value: "mechanic" },
  { label: "Electrician", value: "electrician" },
  { label: "Body Repair Specialist", value: "body_repair_specialist" },
  { label: "Tire Specialist", value: "tire_specialist" },
  { label: "Diagnostic Technician", value: "diagnostic_technician" },
];

export const TECHNICIAN_STATUS = [
  { label: "Available", value: true },
  { label: "Unavailable", value: false },
];

export const BEFORE_DAYS_OPTIONS = () =>
  Array.from({ length: 10 }, (_, i) => ({
    label: `Before ${i + 1} days`,
    value: i + 1,
  }));

export const VEHICLE_STATUS_OPTIONS = [
  { value: "Pending", label: "Pending" },
  { value: "InProgress", label: "In Progress" },
  { value: "Delivered", label: "Delivered" },
  { value: "NotInShop", label: "Not In Shop" },
];

export const PARTS_STATUS_OPTIONS = [
  {
    value: "ReadyToOrder",
    label: "Ready To Order",
  },
  {
    value: "Ordered",
    label: "Ordered",
  },
  {
    value: "Delivered",
    label: "Delivered",
  },
];
