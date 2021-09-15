import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';

export const SidebarDataStock = [

    
  {
    title: 'Home',
    path: '/stockHome',
    icon: <AiIcons.AiFillHome />
  },
  
  {
    title: 'Dashboard',
    path: '/',
    icon: <AiIcons.AiFillHome />
  },

  {
    title: 'Products',
    path: '#',
    icon: <FaIcons.FaCartPlus />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Add Products',
        path: '/addP',
        icon: <IoIcons.IoIosPaper />
      },
      {
        title: 'Manage Products',
        path: '/homeP',
        icon: <IoIcons.IoIosPaper />
      }
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
        path: '/addC',
        icon: <IoIcons.IoIosPaper />,
        cName: 'sub-nav'
      },
      {
        title: 'Manage Categories',
        path: '/homeC',
        icon: <IoIcons.IoIosPaper />,
        cName: 'sub-nav'
      },
    ]
  },


  {
    title: 'Suppliers',
    path: '#',
    icon: <FaIcons.FaEnvelopeOpenText />,

    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Add Supplier',
        path: '/addS',
        icon: <IoIcons.IoIosPaper />
      },
      {
        title: 'Manage Supplier',
        path: '/homeS',
        icon: <IoIcons.IoIosPaper />
      }
    ]
  },
  {
    title: 'Request Products',
    path: '/req',
    icon: <FaIcons.FaEnvelopeOpenText />
  },

  {
    title: 'Report',
    path: '#',
    icon: <FaIcons.FaCartPlus />
  },
];

