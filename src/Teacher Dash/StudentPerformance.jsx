import React, { useState, useEffect } from 'react';
import './StudentPerformance.css';

const StudentPerformance = () => {
  const [performanceData, setPerformanceData] = useState([]);
  const [selectedClass, setSelectedClass] = useState('');
  const [selectedBatch, setSelectedBatch] = useState('');
  const [selectedSubject, setSelectedSubject] = useState('');

  useEffect(() => {
    fetchPerformanceData();
  }, [selectedClass, selectedBatch, selectedSubject]);

  const fetchPerformanceData = async () => {
    try {
      // Replace with your actual API endpoint
      const response = await fetch(`YOUR_API_ENDPOINT/performance?class=${selectedClass}&batch=${selectedBatch}&subject=${selectedSubject}`);
      const data = await response.json();
      setPerformanceData(data);
    } catch (error) {
      console.error('Error fetching performance data:', error);
    }
  };

  return (
    <div className="student-performance">
      <h2>Student Performance</h2>

      <div className="filters">
        <select
          value={selectedClass}
          onChange={(e) => setSelectedClass(e.target.value)}
        >
          <option value="">Select Class</option>
          <option value="10">Class 10</option>
          <option value="11">Class 11</option>
          <option value="12">Class 12</option>
        </select>

        <select
          value={selectedBatch}
          onChange={(e) => setSelectedBatch(e.target.value)}
        >
          <option value="">Select Batch</option>
          <option value="A">Batch A</option>
          <option value="B">Batch B</option>
          <option value="C">Batch C</option>
        </select>

        <select
          value={selectedSubject}
          onChange={(e) => setSelectedSubject(e.target.value)}
        >
          <option value="">Select Subject</option>
          <option value="math">Mathematics</option>
          <option value="science">Science</option>
          <option value="english">English</option>
        </select>
      </div>

      <div className="performance-stats">
        <div className="stat-card">
          <h3>Average Score</h3>
          <p className="stat-value">85%</p>
        </div>
        <div className="stat-card">
          <h3>Completion Rate</h3>
          <p className="stat-value">92%</p>
        </div>
        <div className="stat-card">
          <h3>Active Students</h3>
          <p className="stat-value">45/50</p>
        </div>
      </div>

      <div className="performance-table">
        <table>
          <thead>
            <tr>
              <th>Student Name</th>
              <th>Assignments Completed</th>
              <th>Average Score</th>
              <th>Last Active</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {performanceData.map(student => (
              <tr key={student.id}>
                <td>{student.name}</td>
                <td>{student.completedAssignments}/{student.totalAssignments}</td>
                <td>{student.averageScore}%</td>
                <td>{student.lastActive}</td>
                <td>
                  <button onClick={() => window.location.href = `/teacher/student/${student.id}`}>
                    View Details
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StudentPerformance; 