import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { useState } from 'react';
import './App.css';

function App() {
  const [activeTab, setActiveTab] = useState('dashboard');

  const Dashboard = () => (
    <div className="dashboard">
      <h1>Welcome to Teacher Dashboard</h1>
      <div className="dashboard-stats">
        <div className="stat-card">
          <h3>Total Assignments</h3>
          <p>15</p>
        </div>
        <div className="stat-card">
          <h3>Active Students</h3>
          <p>45</p>
        </div>
        <div className="stat-card">
          <h3>Pending Reviews</h3>
          <p>8</p>
        </div>
      </div>
    </div>
  );

  const CreateAssignment = () => (
    <div className="create-assignment">
      <h2>Create New Assignment</h2>
      <form>
        <div className="form-group">
          <label>Assignment Title</label>
          <input type="text" placeholder="Enter assignment title" />
        </div>
        <div className="form-group">
          <label>Subject</label>
          <select>
            <option value="">Select Subject</option>
            <option value="math">Mathematics</option>
            <option value="science">Science</option>
            <option value="english">English</option>
          </select>
        </div>
        <div className="form-group">
          <label>Class</label>
          <select>
            <option value="">Select Class</option>
            <option value="10">Class 10</option>
            <option value="11">Class 11</option>
            <option value="12">Class 12</option>
          </select>
        </div>
        <div className="form-group">
          <label>Question Type</label>
          <select>
            <option value="mcq">Multiple Choice</option>
            <option value="fill">Fill in the Blank</option>
            <option value="oneword">One Word Answer</option>
          </select>
        </div>
        <button type="submit">Create Assignment</button>
      </form>
    </div>
  );

  const StudentPerformance = () => (
    <div className="student-performance">
      <h2>Student Performance</h2>
      <div className="performance-filters">
        <select>
          <option value="">Select Class</option>
          <option value="10">Class 10</option>
          <option value="11">Class 11</option>
          <option value="12">Class 12</option>
        </select>
        <select>
          <option value="">Select Subject</option>
          <option value="math">Mathematics</option>
          <option value="science">Science</option>
          <option value="english">English</option>
        </select>
      </div>
      <div className="performance-table">
        <table>
          <thead>
            <tr>
              <th>Student Name</th>
              <th>Assignments Completed</th>
              <th>Average Score</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>John Doe</td>
              <td>12/15</td>
              <td>85%</td>
              <td>Active</td>
            </tr>
            <tr>
              <td>Jane Smith</td>
              <td>14/15</td>
              <td>92%</td>
              <td>Active</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );

  const WeeklyTopics = () => (
    <div className="weekly-topics">
      <h2>Weekly Topics</h2>
      <div className="topics-grid">
        <div className="topic-card">
          <h3>Mathematics - Week 1</h3>
          <p>Algebra Basics</p>
          <div className="progress-bar">
            <div className="progress" style={{ width: '75%' }}></div>
          </div>
          <p>Completion: 75%</p>
        </div>
        <div className="topic-card">
          <h3>Science - Week 1</h3>
          <p>Physics Fundamentals</p>
          <div className="progress-bar">
            <div className="progress" style={{ width: '60%' }}></div>
          </div>
          <p>Completion: 60%</p>
        </div>
      </div>
    </div>
  );

  return (
    <Router>
      <div className="app">
        <nav className="sidebar">
          <h2>Teacher Dashboard</h2>
          <ul>
            <li>
              <Link to="/" onClick={() => setActiveTab('dashboard')}>Dashboard</Link>
            </li>
            <li>
              <Link to="/create-assignment" onClick={() => setActiveTab('create')}>Create Assignment</Link>
            </li>
            <li>
              <Link to="/performance" onClick={() => setActiveTab('performance')}>Student Performance</Link>
            </li>
            <li>
              <Link to="/weekly-topics" onClick={() => setActiveTab('topics')}>Weekly Topics</Link>
            </li>
          </ul>
        </nav>
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/create-assignment" element={<CreateAssignment />} />
            <Route path="/performance" element={<StudentPerformance />} />
            <Route path="/weekly-topics" element={<WeeklyTopics />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
