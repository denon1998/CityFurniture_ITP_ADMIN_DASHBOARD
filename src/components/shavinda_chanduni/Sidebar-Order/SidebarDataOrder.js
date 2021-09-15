import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';

export const SidebarDataOrder = [

   
  {
    title: 'Dashboard',
    path: '/',
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
    title: 'Report',
    path: '#',
    icon: <IoIcons.IoIosPaper />
  },
];

