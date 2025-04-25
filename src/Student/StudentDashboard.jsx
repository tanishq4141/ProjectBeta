import React from 'react';
import HomeComponent from './HomeComponent';
import { Outlet } from "react-router-dom";

export default function StudentDashboard() {
  

  return (
    <div className="min-h-screen bg-gray-50">
      <Outlet />
    </div>
  );
}