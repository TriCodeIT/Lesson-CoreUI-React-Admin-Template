import React from "react";
import CIcon from "@coreui/icons-react";

const _nav = [
  {
    _tag: "CSidebarNavItem",
    name: "Dashboard",
    to: "/dashboard",
    icon: <CIcon name="cil-speedometer" customClasses="c-sidebar-nav-icon" />,
    badge: {
      color: "info",
      text: "NEW",
    },
  },
  {
    _tag: "CSidebarNavDropdown",
    name: "Products",
    route: "/products",
    icon: "cil-puzzle",
    _children: [
      {
        _tag: "CSidebarNavItem",
        name: "All Products",
        to: "/products/all-products",
      },
      {
        _tag: "CSidebarNavItem",
        name: "Add New Products",
        to: "/products/add-new-products",
      },
    ],
  },
  {
    _tag: "CSidebarNavDropdown",
    name: "My Account",
    route: "/myaccount",
    icon: "cil-user",
    _children: [
      {
        _tag: "CSidebarNavItem",
        name: "Edit Profile",
        to: "/myaccount/editprofile",
      },
    ],
  },

  {
    _tag: "CSidebarNavDropdown",
    name: "Setting",
    route: "/setting",
    icon: "cil-settings",
    _children: [
      {
        _tag: "CSidebarNavItem",
        name: "Terms and Condition",
        to: "/setting/terms-condition",
      },
      {
        _tag: "CSidebarNavItem",
        name: "Privacy Policy",
        to: "/setting/privacy-policy",
      },
      {
        _tag: "CSidebarNavItem",
        name: "App Version",
        to: "/setting/app-version",
      },
    ],
  },

  {
    _tag: "CSidebarNavDropdown",
    name: "User Management",
    route: "/user-management",
    icon: "cil-people",
    _children: [
      {
        _tag: "CSidebarNavItem",
        name: "Log User",
        to: "/user-management/log-user",
      },
      {
        _tag: "CSidebarNavItem",
        name: "Data User",
        to: "/user-management/data-user",
      },
    ],
  },

  {
    _tag: "CSidebarNavDropdown",
    name: "Admin Management",
    route: "/admin",
    icon: "cil-applications-settings",
    _children: [
      {
        _tag: "CSidebarNavItem",
        name: "Add Admin",
        to: "/admin/add-admin",
      },
      {
        _tag: "CSidebarNavItem",
        name: "Add Role",
        to: "/admin/add-role",
      },
    ],
  },

];

export default _nav;
