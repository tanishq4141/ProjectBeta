import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import CreateAssignment from './CreateAssignment';
import AssignmentList from './AssignmentList';
import StudentPerformance from './StudentPerformance';
import WeeklyTopics from './WeeklyTopics';
import './TeacherDashboard.css';

const TeacherDashboard = () => {
  return (
    <div className="teacher-dashboard">
      <nav className="dashboard-nav">
        <h2>Teacher Dashboard</h2>
        <ul>
          <li><Link to="/teacher/create-assignment">Create Assignment</Link></li>
          <li><Link to="/teacher/assignments">View Assignments</Link></li>
          <li><Link to="/teacher/performance">Student Performance</Link></li>
          <li><Link to="/teacher/weekly-topics">Weekly Topics</Link></li>
        </ul>
      </nav>
      
      <div className="dashboard-content">
        <Routes>
          <Route path="/create-assignment" element={<CreateAssignment />} />
          <Route path="/assignments" element={<AssignmentList />} />
          <Route path="/performance" element={<StudentPerformance />} />
          <Route path="/weekly-topics" element={<WeeklyTopics />} />
        </Routes>
      </div>
    </div>
  );
};

export default TeacherDashboard; 