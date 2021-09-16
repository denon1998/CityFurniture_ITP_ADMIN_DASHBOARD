import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';

export const SidebarDataCustomercare = [

    
  {
    title: 'Home',
    path: '/customercareHome',
    icon: <AiIcons.AiFillHome />
  },
  
  {
    title: 'Dashboard',
    path: '/',
    icon: <AiIcons.AiFillHome />
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
    path: '#',
    icon: <IoIcons.IoIosPaper />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'View FAQs',
        path: '/addC',
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
];
