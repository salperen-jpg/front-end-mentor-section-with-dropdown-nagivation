import {
  FaCreditCard,
  FaCalendarDay,
  FaAcquisitionsIncorporated,
  FaMoneyBillWaveAlt,
  FaPlug,
} from 'react-icons/fa';
import { FcTodoList, FcPlanner, FcLibrary } from 'react-icons/fc';
import { MdOutlineHelp } from 'react-icons/md';
import React from 'react';
const sublinks = [
  {
    page: 'features',
    links: [
      { label: 'todo list', icon: <FcTodoList /> },
      { label: 'calendar', icon: <FaCalendarDay />, color: 'red' },
      {
        label: 'reminders',
        icon: <FaAcquisitionsIncorporated />,
        color: 'blue',
      },
      { label: 'planning', icon: <FcPlanner />, color: 'purple' },
    ],
  },
  {
    page: 'company',
    links: [
      { label: 'plugins', icon: <FaPlug />, color: 'yellow' },
      { label: 'libraries', icon: <FcLibrary />, color: 'grey' },
      { label: 'help', icon: <MdOutlineHelp />, color: 'orange' },
      { label: 'billing', icon: <FaMoneyBillWaveAlt />, color: 'lightblue' },
    ],
  },
  {
    page: 'careers',
  },
  {
    page: 'about',
  },
];

export default sublinks;
