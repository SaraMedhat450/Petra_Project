import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Customer from '../pages/Customer';

export default function MainLayout() {
  return (
    <>
      <Outlet />
    </>
  );
}
