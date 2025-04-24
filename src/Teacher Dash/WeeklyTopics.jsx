import React, { useState, useEffect } from 'react';
import './WeeklyTopics.css';

const WeeklyTopics = () => {
  const [topics, setTopics] = useState([]);
  const [selectedWeek, setSelectedWeek] = useState('');
  const [selectedClass, setSelectedClass] = useState('');
  const [selectedSubject, setSelectedSubject] = useState('');

  useEffect(() => {
    fetchWeeklyTopics();
  }, [selectedWeek, selectedClass, selectedSubject]);

  const fetchWeeklyTopics = async () => {
    try {
      // Replace with your actual API endpoint
      const response = await fetch(`YOUR_API_ENDPOINT/weekly-topics?week=${selectedWeek}&class=${selectedClass}&subject=${selectedSubject}`);
      const data = await response.json();
      setTopics(data);
    } catch (error) {
      console.error('Error fetching weekly topics:', error);
    }
  };

  const addNewTopic = () => {
    // Add logic to create a new topic
    const newTopic = {
      id: Date.now(),
      title: '',
      description: '',
      status: 'pending',
      completionRate: 0
    };
    setTopics([...topics, newTopic]);
  };

  return (
    <div className="weekly-topics">
      <h2>Weekly Topics</h2>

      <div className="filters">
        <select
          value={selectedWeek}
          onChange={(e) => setSelectedWeek(e.target.value)}
        >
          <option value="">Select Week</option>
          <option value="1">Week 1</option>
          <option value="2">Week 2</option>
          <option value="3">Week 3</option>
          <option value="4">Week 4</option>
        </select>

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
          value={selectedSubject}
          onChange={(e) => setSelectedSubject(e.target.value)}
        >
          <option value="">Select Subject</option>
          <option value="math">Mathematics</option>
          <option value="science">Science</option>
          <option value="english">English</option>
        </select>
      </div>

      <button className="add-topic-btn" onClick={addNewTopic}>
        Add New Topic
      </button>

      <div className="topics-grid">
        {topics.map(topic => (
          <div key={topic.id} className="topic-card">
            <div className="topic-header">
              <h3>{topic.title}</h3>
              <span className={`status ${topic.status}`}>{topic.status}</span>
            </div>
            <p className="description">{topic.description}</p>
            <div className="progress-bar">
              <div 
                className="progress" 
                style={{ width: `${topic.completionRate}%` }}
              ></div>
            </div>
            <p className="completion-rate">Completion Rate: {topic.completionRate}%</p>
            <div className="topic-actions">
              <button onClick={() => window.location.href = `/teacher/topics/${topic.id}`}>
                View Details
              </button>
              <button onClick={() => window.location.href = `/teacher/topics/${topic.id}/edit`}>
                Edit
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WeeklyTopics; 