import {
  AirlineSeatReclineNormal,
  AssignmentLate,
  BusinessCenter,
  Dashboard,
  DeleteOutline,
  ManageAccounts,
  ManageSearch,
  Report,
  Settings,
} from "@mui/icons-material";
import { exampleTableData } from "./type";
import { ASSIGNOPTIONS } from "@/app/user/type";

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
      label: "Setting",
      url: "/user/setting?fromPage=driver",
      icon: Settings,
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
      label: "Setting",
      url: "/user/setting",
      icon: Settings,
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
      label: "Setting",
      url: "/user/setting?fromPage=admin",
      icon: Settings,
    },
  ],
};

export const getMenuByRole = (userRole: string) => {
  switch (userRole) {
    case "driver":
      return driverMenu.menuLists;
    case "user":
      return userMenu.menuLists;
    case "admin":
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

export const mockData: exampleTableData[] = [
  {
    "S No": 1,
    "Complain Number": "8599456350",
    "Bin Name": "Erhard",
    "Mobile Number": "321-361-1594",
    Email: "eprendergast0@eventbrite.com",
    Status: ASSIGNOPTIONS.ASSIGNED,
  },
  {
    "S No": 2,
    "Complain Number": "2229183028",
    "Bin Name": "Kalli",
    "Mobile Number": "210-546-5078",
    Email: "kmillington1@washington.edu",
    Status: ASSIGNOPTIONS.COMPLETED,
  },
  {
    "S No": 3,
    "Complain Number": "0647709473",
    "Bin Name": "Sax",
    "Mobile Number": "296-733-2943",
    Email: "sbooler2@comsenz.com",
    Status: ASSIGNOPTIONS.NOTASSIGN,
  },
  {
    "S No": 4,
    "Complain Number": "9985286901",
    "Bin Name": "Staci",
    "Mobile Number": "781-723-2554",
    Email: "sedelmann3@washington.edu",
    Status: ASSIGNOPTIONS.ASSIGNED,
  },
  {
    "S No": 5,
    "Complain Number": "3973417512",
    "Bin Name": "Giorgio",
    "Mobile Number": "164-161-8041",
    Email: "gluxmoore4@senate.gov",
    Status: ASSIGNOPTIONS.ASSIGNED,
  },
  {
    "S No": 6,
    "Complain Number": "4957845328",
    "Bin Name": "Alfons",
    "Mobile Number": "146-954-7437",
    Email: "apendlenton5@nature.com",
    Status: ASSIGNOPTIONS.COMPLETED,
  },
  {
    "S No": 7,
    "Complain Number": "7828953038",
    "Bin Name": "Dunn",
    "Mobile Number": "916-402-3446",
    Email: "ddibb6@discuz.net",
    Status: ASSIGNOPTIONS.ASSIGNED,
  },
  {
    "S No": 8,
    "Complain Number": "1999840054",
    "Bin Name": "Worth",
    "Mobile Number": "351-570-0327",
    Email: "wmcpaike7@opera.com",
    Status: ASSIGNOPTIONS.NOTASSIGN,
  },
  {
    "S No": 9,
    "Complain Number": "0657568821",
    "Bin Name": "Cleopatra",
    "Mobile Number": "496-160-3067",
    Email: "crampling8@posterous.com",
    Status: ASSIGNOPTIONS.ASSIGNED,
  },
  {
    "S No": 10,
    "Complain Number": "3322696235",
    "Bin Name": "Clarisse",
    "Mobile Number": "311-234-8561",
    Email: "ccarress9@parallels.com",
    Status: ASSIGNOPTIONS.ASSIGNED,
  },
  {
    "S No": 11,
    "Complain Number": "0982393466",
    "Bin Name": "Silvain",
    "Mobile Number": "537-591-6465",
    Email: "schanga@canalblog.com",
    Status: ASSIGNOPTIONS.ASSIGNED,
  },
  {
    "S No": 12,
    "Complain Number": "0611822059",
    "Bin Name": "Zoe",
    "Mobile Number": "853-916-1630",
    Email: "zdicksb@pcworld.com",
    Status: ASSIGNOPTIONS.COMPLETED,
  },
  {
    "S No": 13,
    "Complain Number": "1089595956",
    "Bin Name": "Cosme",
    "Mobile Number": "237-559-2501",
    Email: "cscaicec@w3.org",
    Status: ASSIGNOPTIONS.COMPLETED,
  },
  {
    "S No": 14,
    "Complain Number": "7545733975",
    "Bin Name": "Sigrid",
    "Mobile Number": "252-995-9272",
    Email: "sbaudind@mashable.com",
    Status: ASSIGNOPTIONS.ASSIGNED,
  },
  {
    "S No": 15,
    "Complain Number": "1299699928",
    "Bin Name": "Felicity",
    "Mobile Number": "798-518-2728",
    Email: "fbarnese@addtoany.com",
    Status: ASSIGNOPTIONS.COMPLETED,
  },
  {
    "S No": 16,
    "Complain Number": "6999694575",
    "Bin Name": "Merilyn",
    "Mobile Number": "174-829-4735",
    Email: "mbucknerf@newyorker.com",
    Status: ASSIGNOPTIONS.COMPLETED,
  },
  {
    "S No": 17,
    "Complain Number": "1610083393",
    "Bin Name": "Terri",
    "Mobile Number": "634-132-2327",
    Email: "tcraikg@japanpost.jp",
    Status: ASSIGNOPTIONS.NOTASSIGN,
  },
  {
    "S No": 18,
    "Complain Number": "0652552692",
    "Bin Name": "Katharine",
    "Mobile Number": "538-271-0626",
    Email: "kohoolahanh@rakuten.co.jp",
    Status: ASSIGNOPTIONS.COMPLETED,
  },
  {
    "S No": 19,
    "Complain Number": "1690557281",
    "Bin Name": "Katrinka",
    "Mobile Number": "639-626-5951",
    Email: "kstockelli@list-manage.com",
    Status: ASSIGNOPTIONS.COMPLETED,
  },
  {
    "S No": 20,
    "Complain Number": "8210874780",
    "Bin Name": "Noach",
    "Mobile Number": "488-745-0890",
    Email: "nglackenj@blogspot.com",
    Status: ASSIGNOPTIONS.ASSIGNED,
  },
  {
    "S No": 21,
    "Complain Number": "9503361303",
    "Bin Name": "Arabele",
    "Mobile Number": "987-631-9803",
    Email: "aferrisk@hatena.ne.jp",
    Status: ASSIGNOPTIONS.COMPLETED,
  },
  {
    "S No": 22,
    "Complain Number": "1923657879",
    "Bin Name": "Ryley",
    "Mobile Number": "329-170-0757",
    Email: "rtrimel@cnbc.com",
    Status: ASSIGNOPTIONS.COMPLETED,
  },
  {
    "S No": 23,
    "Complain Number": "1683802276",
    "Bin Name": "Brent",
    "Mobile Number": "161-551-6471",
    Email: "bcatmullm@dailymail.co.uk",
    Status: ASSIGNOPTIONS.COMPLETED,
  },
  {
    "S No": 24,
    "Complain Number": "2430879174",
    "Bin Name": "Fernandina",
    "Mobile Number": "640-830-2328",
    Email: "fnaismithn@hibu.com",
    Status: ASSIGNOPTIONS.NOTASSIGN,
  },
  {
    "S No": 25,
    "Complain Number": "0536990840",
    "Bin Name": "Garner",
    "Mobile Number": "240-581-5626",
    Email: "ggrimmero@google.com",
    Status: ASSIGNOPTIONS.NOTASSIGN,
  },
  {
    "S No": 26,
    "Complain Number": "3025916230",
    "Bin Name": "Lauryn",
    "Mobile Number": "521-409-8715",
    Email: "lwestleyp@prnewswire.com",
    Status: ASSIGNOPTIONS.ASSIGNED,
  },
  {
    "S No": 27,
    "Complain Number": "1867570882",
    "Bin Name": "Terri",
    "Mobile Number": "327-758-0289",
    Email: "tscuddersq@mit.edu",
    Status: ASSIGNOPTIONS.NOTASSIGN,
  },
  {
    "S No": 28,
    "Complain Number": "4755750822",
    "Bin Name": "Joy",
    "Mobile Number": "292-450-6929",
    Email: "jspikeingsr@goo.gl",
    Status: ASSIGNOPTIONS.COMPLETED,
  },
  {
    "S No": 29,
    "Complain Number": "0468152717",
    "Bin Name": "Cele",
    "Mobile Number": "533-172-6450",
    Email: "cfraneys@yelp.com",
    Status: ASSIGNOPTIONS.NOTASSIGN,
  },
  {
    "S No": 30,
    "Complain Number": "0839972393",
    "Bin Name": "Kevina",
    "Mobile Number": "395-899-0803",
    Email: "klightewoodt@cocolog-nifty.com",
    Status: ASSIGNOPTIONS.ASSIGNED,
  },
  {
    "S No": 31,
    "Complain Number": "5432235315",
    "Bin Name": "Beltran",
    "Mobile Number": "608-384-8805",
    Email: "battleu@wsj.com",
    Status: ASSIGNOPTIONS.NOTASSIGN,
  },
  {
    "S No": 32,
    "Complain Number": "7699728785",
    "Bin Name": "Terri",
    "Mobile Number": "299-223-9310",
    Email: "tgreatexv@ow.ly",
    Status: ASSIGNOPTIONS.ASSIGNED,
  },
  {
    "S No": 33,
    "Complain Number": "1019873574",
    "Bin Name": "Gabbie",
    "Mobile Number": "160-105-7385",
    Email: "gpandeyw@photobucket.com",
    Status: ASSIGNOPTIONS.NOTASSIGN,
  },
  {
    "S No": 34,
    "Complain Number": "9432566927",
    "Bin Name": "Ronni",
    "Mobile Number": "410-104-3913",
    Email: "rszepex@japanpost.jp",
    Status: ASSIGNOPTIONS.COMPLETED,
  },
  {
    "S No": 35,
    "Complain Number": "2516968183",
    "Bin Name": "Cesar",
    "Mobile Number": "448-302-4728",
    Email: "cschonfeldy@washingtonpost.com",
    Status: ASSIGNOPTIONS.COMPLETED,
  },
  {
    "S No": 36,
    "Complain Number": "2651814989",
    "Bin Name": "Carma",
    "Mobile Number": "681-919-2995",
    Email: "ctamez@rakuten.co.jp",
    Status: ASSIGNOPTIONS.NOTASSIGN,
  },
  {
    "S No": 37,
    "Complain Number": "1502797402",
    "Bin Name": "Frayda",
    "Mobile Number": "474-634-2709",
    Email: "fparrin10@1und1.de",
    Status: ASSIGNOPTIONS.ASSIGNED,
  },
  {
    "S No": 38,
    "Complain Number": "1347053751",
    "Bin Name": "Shea",
    "Mobile Number": "367-510-1732",
    Email: "ssamworth11@foxnews.com",
    Status: ASSIGNOPTIONS.ASSIGNED,
  },
  {
    "S No": 39,
    "Complain Number": "4296218514",
    "Bin Name": "Raine",
    "Mobile Number": "621-920-4727",
    Email: "rpeller12@accuweather.com",
    Status: ASSIGNOPTIONS.NOTASSIGN,
  },
  {
    "S No": 40,
    "Complain Number": "5368960700",
    "Bin Name": "Linell",
    "Mobile Number": "534-796-9686",
    Email: "lwallice13@google.com.hk",
    Status: ASSIGNOPTIONS.NOTASSIGN,
  },
  {
    "S No": 41,
    "Complain Number": "2429800543",
    "Bin Name": "Zarah",
    "Mobile Number": "825-751-4982",
    Email: "zrosario14@seattletimes.com",
    Status: ASSIGNOPTIONS.NOTASSIGN,
  },
  {
    "S No": 42,
    "Complain Number": "1446080161",
    "Bin Name": "D'arcy",
    "Mobile Number": "500-157-1260",
    Email: "dbradbury15@gov.uk",
    Status: ASSIGNOPTIONS.COMPLETED,
  },
  {
    "S No": 43,
    "Complain Number": "6434230648",
    "Bin Name": "Ina",
    "Mobile Number": "671-185-3139",
    Email: "igamet16@sphinn.com",
    Status: ASSIGNOPTIONS.COMPLETED,
  },
  {
    "S No": 44,
    "Complain Number": "1216646910",
    "Bin Name": "Mariette",
    "Mobile Number": "243-672-8964",
    Email: "mmaslen17@ftc.gov",
    Status: ASSIGNOPTIONS.ASSIGNED,
  },
  {
    "S No": 45,
    "Complain Number": "0491680112",
    "Bin Name": "Rutherford",
    "Mobile Number": "935-365-5879",
    Email: "rpantridge18@cafepress.com",
    Status: ASSIGNOPTIONS.COMPLETED,
  },
  {
    "S No": 46,
    "Complain Number": "7812582442",
    "Bin Name": "Morna",
    "Mobile Number": "689-406-6874",
    Email: "mjarmyn19@epa.gov",
    Status: ASSIGNOPTIONS.NOTASSIGN,
  },
  {
    "S No": 47,
    "Complain Number": "6797431476",
    "Bin Name": "Toma",
    "Mobile Number": "498-146-5905",
    Email: "tcasaccia1a@latimes.com",
    Status: ASSIGNOPTIONS.ASSIGNED,
  },
  {
    "S No": 48,
    "Complain Number": "0201780232",
    "Bin Name": "Corby",
    "Mobile Number": "634-172-6271",
    Email: "clabbet1b@blogspot.com",
    Status: ASSIGNOPTIONS.COMPLETED,
  },
  {
    "S No": 49,
    "Complain Number": "5681557529",
    "Bin Name": "Nalani",
    "Mobile Number": "273-495-0690",
    Email: "ncanario1c@biblegateway.com",
    Status: ASSIGNOPTIONS.NOTASSIGN,
  },
  {
    "S No": 50,
    "Complain Number": "1587810662",
    "Bin Name": "Morganica",
    "Mobile Number": "267-148-4795",
    Email: "mcotman1d@odnoklassniki.ru",
    Status: ASSIGNOPTIONS.COMPLETED,
  },
];
