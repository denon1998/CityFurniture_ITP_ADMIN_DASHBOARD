import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';

export const SidebarData = [

  {
    title: 'Dashboard Home',
    path: '/admindashboard',
    icon: <AiIcons.AiFillHome />
  },
  {
    title: 'Admin Settings',
    path: '/main',
    icon: <AiIcons.AiFillHome />
  },

  {
    title: 'Stock Product',


    icon: <IoIcons.IoIosPaper />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav:
      [
        {
          title: 'Add Products',
          path: '/addP',
          icon: <AiIcons.AiFillHome />
        }, {
          title: 'Manage Products',
          path: '/homeP',
          icon: <AiIcons.AiFillHome />
        },

      ]
  }, {
    title: 'Stock Category',


    icon: <IoIcons.IoIosPaper />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav:
      [
        {
          title: 'Add Category',
          path: '/addC',
          icon: <AiIcons.AiFillHome />
        }, {
          title: 'Manage Category',
          path: '/homeC',
          icon: <AiIcons.AiFillHome />
        },

      ]
  },
  {
    title: 'Supplier',


    icon: <IoIcons.IoIosPaper />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav:
      [
        {
          title: 'Add Supplier',
          path: '/addS',
          icon: <AiIcons.AiFillHome />
        }, {
          title: 'Manage Supplier',
          path: '/homeS',
          icon: <AiIcons.AiFillHome />
        },

      ]
  },

  {
    title: 'Request Products',
    path: '/req',
    icon: <AiIcons.AiFillHome />
  },

  {
    title: 'Order',
    path: '/order',
    icon: <AiIcons.AiFillHome />
  },


  {
    title: 'Category',
    path: '/category',
    icon: <AiIcons.AiFillHome />
  },

  {
    title: 'Orders',
    path: '#',
    icon: <FaIcons.FaCartPlus />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'All Order',
        path: '/order/home',
        icon: <IoIcons.IoIosPaper />
      },

    ]
  },
  {
    title: 'Categories',
    path: '#',
    icon: <IoIcons.IoIosPaper />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Add Categories',
        path: '/category/add',
        icon: <IoIcons.IoIosPaper />,
        cName: 'sub-nav'
      },
      {
        title: 'All Categories',
        path: '/category/home',
        icon: <IoIcons.IoIosPaper />,
        cName: 'sub-nav'
      },
    ]
  },


  {
    title: 'Email Conformation',
    path: '#',
    icon: <FaIcons.FaEnvelopeOpenText />
  },

  {
    title: 'Pay Home',
    path: '/pay-home',
    icon: <FaIcons.FaEnvelopeOpenText />
  },

  {
    title: 'PayPal Home',
    path: '/payDisplay',
    icon: <FaIcons.FaEnvelopeOpenText />
  },

  {
    title: 'Products',
    path: '/home-products',
    icon: <FaIcons.FaEnvelopeOpenText />
  },

  {
    title: 'Category',
    path: '/HomeCategory',
    icon: <FaIcons.FaEnvelopeOpenText />
  },

  {
    title: 'Offers',
    path: '/HomeOffer',
    icon: <FaIcons.FaEnvelopeOpenText />
  },

  {
    title: 'Customercare Home',
    path: '/CustomercareHome',
    icon: <FaIcons.FaEnvelopeOpenText />
  },


  {
    title: 'Contact',
    path: '#',
    icon: <FaIcons.FaCartPlus />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Contact List',
        path: '/contact/',
        icon: <IoIcons.IoIosPaper />
      },
      {
        title: 'Edit Contact',
        path: '/edit/:id',
        icon: <IoIcons.IoIosPaper />
      }
    ]
  },
  {
    title: 'FAQs',
    path: '/FAQs',
    icon: <IoIcons.IoIosPaper />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'View FAQs',
        path: '/FAQs',
        icon: <IoIcons.IoIosPaper />,
        cName: 'sub-nav'
      },
    ]
  },


  {
    title: 'Suggestions',
    path: '#',
    icon: <FaIcons.FaEnvelopeOpenText />,

    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'View suggestions',
        path: '/suggestion/',
        icon: <IoIcons.IoIosPaper />
      },
    ]
  },
  {
    title: 'View Ratings',
    path: '#',
    icon: <FaIcons.FaEnvelopeOpenText />
  },

  {
    title: 'Report',
    path: '#',
    icon: <FaIcons.FaCartPlus />
  },



  {
    title: 'Delivery Management',
    path: '#t',
    icon: <IoIcons.IoMdHelpCircle


    />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    subNav: [
      {
        title: 'Delivery Home',
        path: '/delivery-mgt',
        icon: <IoIcons.IoMdHelpCircle />
      },
      {
        title: 'Driver',
        path: '/driver',
        icon: <IoIcons.IoMdHelpCircle />
      },
      {
        title: 'Vehicle',
        path: '/vehicle',
        icon: <IoIcons.IoMdHelpCircle />
      }, {
        title: 'Delivery',
        path: '/delivery',
        icon: <IoIcons.IoMdHelpCircle />
      }, {
        title: 'Order',
        path: '/order-for-delivery',
        icon: <IoIcons.IoMdHelpCircle />
      },
    ]
  },



  {
    title: 'Staf Management',
    path: '#',
    icon: <IoIcons.IoMdHelpCircle


    />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    subNav: [
      {
        title: 'Staff dashboard',
        path: '/staff-dashboard',
        icon: <IoIcons.IoMdHelpCircle />
      },
      {
        title: 'Add New Employee',
        path: '/addemp',
        icon: <IoIcons.IoMdHelpCircle />
      },
      {
        title: 'Mark Attendance',
        path: '/attendence',
        icon: <IoIcons.IoMdHelpCircle />
      }, {
        title: 'Calculate Salary',
        path: '/add-salary',
        icon: <IoIcons.IoMdHelpCircle />
      },
    ],
  },




  {
    title: 'Staf Management View',
    path: '#',
    icon: <IoIcons.IoMdHelpCircle


    />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    subNav: [
      {
        title: 'View',
        path: '/view/ViewAEmp',
        icon: <IoIcons.IoMdHelpCircle />
      },
      {
        title: 'All Employee',
        path: '/view/empdetails',
        icon: <IoIcons.IoMdHelpCircle />
      },
      {
        title: 'All Salary Details',
        path: '/view/salary-detail',
        icon: <IoIcons.IoMdHelpCircle />
      },
    ],
  },







  {
    title: 'staff-History',
    path: '/history',
    icon: <IoIcons.IoMdHelpCircle


    />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    subNav: [
      {
        title: 'Attendence',
        path: '/attendence-history',
        icon: <IoIcons.IoMdHelpCircle />
      },
      {
        title: 'Leaved Employees',
        path: '/LeavedEmp',
        icon: <IoIcons.IoMdHelpCircle />
      },
      {
        title: 'All Salary Details',
        path: '/view/salary-detail',
        icon: <IoIcons.IoMdHelpCircle />
      },
    ],
  },



  {
    title: 'Reports',
    path: '#',
    icon: <IoIcons.IoIosPaper />,


    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    subNav: [
      {
        title: 'Staff Report',
        path: '/monthlysalarypaymentreport',
        icon: <IoIcons.IoMdHelpCircle />
      },

    ],
  },



];

