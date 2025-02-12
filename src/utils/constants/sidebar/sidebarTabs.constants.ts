import { ISidebarTab } from "@/types/global/sidebarTabs";

export const sidebarTabs: ISidebarTab[] = [
  {
    id: "/employee-expenses",
    name: "Employee Expenses",
    icon: "/icons/stack.png",
    isManagerTab: true,
  },
  {
    id: "/my-expenses",
    name: "My Expense list",
    icon: "/icons/clipboard.png",
  },
  {
    id: "settings",
    name: "Settings",
    icon: "/icons/setting.png",
  },
];
