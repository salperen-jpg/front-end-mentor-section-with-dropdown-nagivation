import { FaCreditCard, FaBook, FaBriefcase } from 'react-icons/fa';
import React from 'react';
const sublinks = [
  {
    page: 'features',
    links: [
      { label: 'todo list', icon: <FaCreditCard />, url: '/products' },
      { label: 'calendar', icon: <FaCreditCard />, url: '/products' },
      { label: 'reminders', icon: <FaCreditCard />, url: '/products' },
      { label: 'planning', icon: <FaCreditCard />, url: '/products' },
    ],
  },
  {
    page: 'company',
    links: [
      { label: 'plugins', icon: <FaBook />, url: '/products' },
      { label: 'libraries', icon: <FaBook />, url: '/products' },
      { label: 'help', icon: <FaBook />, url: '/products' },
      { label: 'billing', icon: <FaBook />, url: '/products' },
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
