import React, { useState } from 'react';
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import TeacherHeader from './TeacherHeader';
import TeacherHome from './TeacherHome';
import CreateAssignment from './CreateAssignment';
import ClassPerformance from './ClassPerformance';
import StudentPerformance from './StudentPerformance';
import ManageAssignments from './ManageAssignments';

export default function TeacherDashboard() {
  const navigate = useNavigate();
  const [currentTab, setCurrentTab] = useState('home');
  const userName = 'Priya Sharma';
  const userInitials = 'PS';
  
  return (
    <div className="min-h-screen bg-gray-50">
      <TeacherHeader
        userName={userName}
        userInitials={userInitials}
        currentTab={currentTab}
        setCurrentTab={setCurrentTab}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Routes>
          <Route index element={<Navigate to="home" replace />} />
          <Route path="home" element={<TeacherHome setCurrentTab={setCurrentTab} />} />
          <Route path="create-assignment" element={<CreateAssignment />} />
          <Route path="manage-assignments" element={<ManageAssignments />} />
          <Route path="class-performance" element={<ClassPerformance />} />
          <Route path="student-performance" element={<StudentPerformance />} />
          <Route path="*" element={<Navigate to="home" replace />} />
        </Routes>
      </div>
    </div>
  );
}