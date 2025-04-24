import React, { useState, useEffect } from 'react';
import './AssignmentList.css';

const AssignmentList = () => {
  const [assignments, setAssignments] = useState([]);
  const [filter, setFilter] = useState({
    subject: '',
    class: '',
    batch: ''
  });

  useEffect(() => {
    // Fetch assignments from your backend
    fetchAssignments();
  }, []);

  const fetchAssignments = async () => {
    try {
      // Replace with your actual API endpoint
      const response = await fetch('YOUR_API_ENDPOINT/assignments');
      const data = await response.json();
      setAssignments(data);
    } catch (error) {
      console.error('Error fetching assignments:', error);
    }
  };

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilter(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const filteredAssignments = assignments.filter(assignment => {
    return (
      (!filter.subject || assignment.subject.toLowerCase().includes(filter.subject.toLowerCase())) &&
      (!filter.class || assignment.class.toLowerCase().includes(filter.class.toLowerCase())) &&
      (!filter.batch || assignment.batch.toLowerCase().includes(filter.batch.toLowerCase()))
    );
  });

  return (
    <div className="assignment-list">
      <h2>Assignment List</h2>
      
      <div className="filters">
        <input
          type="text"
          name="subject"
          placeholder="Filter by Subject"
          value={filter.subject}
          onChange={handleFilterChange}
        />
        <input
          type="text"
          name="class"
          placeholder="Filter by Class"
          value={filter.class}
          onChange={handleFilterChange}
        />
        <input
          type="text"
          name="batch"
          placeholder="Filter by Batch"
          value={filter.batch}
          onChange={handleFilterChange}
        />
      </div>

      <div className="assignments-grid">
        {filteredAssignments.map(assignment => (
          <div key={assignment.id} className="assignment-card">
            <h3>{assignment.title}</h3>
            <div className="assignment-details">
              <p><strong>Subject:</strong> {assignment.subject}</p>
              <p><strong>Class:</strong> {assignment.class}</p>
              <p><strong>Batch:</strong> {assignment.batch}</p>
              <p><strong>Type:</strong> {assignment.type}</p>
              <p><strong>Completion Rate:</strong> {assignment.completionRate}%</p>
            </div>
            <div className="assignment-actions">
              <button onClick={() => window.location.href = `/teacher/assignments/${assignment.id}`}>
                View Details
              </button>
              <button onClick={() => window.location.href = `/teacher/assignments/${assignment.id}/edit`}>
                Edit
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AssignmentList; 