import {
  AirlineSeatReclineNormal,
  AssignmentLate,
  BusinessCenter,
  Dashboard,
  DeleteOutline,
  ManageAccounts,
  ManageSearch,
  Report,
} from "@mui/icons-material";


export const driverMenu = {
  title: "driver",
  menuLists: [
    { label: "Dashboard", url: "/driver", icon: Dashboard },
    {
      label: "Manage Assign",
      url: "/driver/manage_assign",
      icon: BusinessCenter,
    },
    {
      label: "Search",
      url: "/driver/search",
      icon: ManageSearch,
    },
    {
      label: "Reports",
      url: "/driver/reports",
      icon: Report,
    },
  ],
};
export const userMenu = {
  title: "user",
  menuLists: [
    { label: "Dashboard", url: "/user", icon: Dashboard },
    {
      label: "Create Bin",
      url: "/user/create_bin",
      icon: DeleteOutline,
    },
    {
      label: "My Complain",
      url: "/user/complain",
      icon: AssignmentLate,
    },
    {
      label: "Search",
      url: "/user/search",
      icon: ManageSearch,
    },
  ],
};
export const adminMenu = {
  title: "admin",
  menuLists: [
    {
      label: "Dashboard",
      url: "/admin",
      icon: Dashboard,
    },
    {
      label: "Manage Users",
      url: "/admin/manage_users",
      icon: ManageAccounts,
    },
    {
      label: "Manage Bin",
      url: "/admin/manage_bin",
      icon: DeleteOutline,
    },
    {
      label: "Manage Driver",
      url: "/admin/manage_driver",
      icon: AirlineSeatReclineNormal,
    },
    {
      label: "Search",
      url: "/admin/search",
      icon: ManageSearch,
    },
    {
      label: "Report",
      url: "/admin/report",
      icon: Report,
    },
  ],
};


export const getMenuByRole = (userRole:string) => {
  switch (userRole) {
    case 'driver':
      return driverMenu.menuLists;
    case 'user':
      return userMenu.menuLists;
    case 'admin':
      return adminMenu.menuLists;
    default:
      return []; // Default empty array if role doesn't match
  }
};

export const roleSelection = [
  { label: "Admin", value: "admin" },
  { label: "Driver", value: "driver" },
  { label: "User", value: "user" },
];
