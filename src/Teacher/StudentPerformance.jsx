import React, { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export default function StudentPerformance() {
  const [selectedClass, setSelectedClass] = useState('Class 8A');
  const [selectedStudent, setSelectedStudent] = useState('');
  const [timeFrame, setTimeFrame] = useState('month');
  
  // Sample data
  const classes = ['Class 6A', 'Class 6B', 'Class 7A', 'Class 7B', 'Class 8A', 'Class 8B', 'Class 9A', 'Class 9B', 'Class 10A'];
  
  const studentsData = {
    'Class 8A': [
      { id: 1, name: 'Arjun Sharma', rollNo: '8A01' },
      { id: 2, name: 'Priya Patel', rollNo: '8A02' },
      { id: 3, name: 'Rahul Singh', rollNo: '8A03' },
      { id: 4, name: 'Neha Gupta', rollNo: '8A04' },
      { id: 5, name: 'Vikram Reddy', rollNo: '8A05' },
    ],
    'Class 9B': [
      { id: 1, name: 'Aisha Khan', rollNo: '9B01' },
      { id: 2, name: 'Rohan Verma', rollNo: '9B02' },
      { id: 3, name: 'Sneha Desai', rollNo: '9B03' },
      { id: 4, name: 'Karan Malhotra', rollNo: '9B04' },
      { id: 5, name: 'Divya Choudhury', rollNo: '9B05' },
    ]
  };
  
  // For other classes, we'll use Class 8A data as default
  const getClassStudents = (className) => {
    return studentsData[className] || studentsData['Class 8A'];
  };
  
  const students = getClassStudents(selectedClass);
  
  // Initialize selected student if not set
  React.useEffect(() => {
    if (!selectedStudent && students.length > 0) {
      setSelectedStudent(students[0].id.toString());
    }
  }, [selectedClass, selectedStudent, students]);
  
  // Performance data
  const performanceData = {
    '1': {
      month: [
        { subject: 'Mathematics', score: 82, classAverage: 78 },
        { subject: 'Science', score: 88, classAverage: 82 },
        { subject: 'English', score: 78, classAverage: 76 },
        { subject: 'Social Studies', score: 75, classAverage: 79 },
        { subject: 'Hindi', score: 90, classAverage: 85 },
      ],
      quarter: [
        { subject: 'Mathematics', score: 80, classAverage: 75 },
        { subject: 'Science', score: 85, classAverage: 80 },
        { subject: 'English', score: 76, classAverage: 73 },
        { subject: 'Social Studies', score: 72, classAverage: 77 },
        { subject: 'Hindi', score: 87, classAverage: 82 },
      ],
      trend: [
        { month: 'Jan', score: 76 },
        { month: 'Feb', score: 78 },
        { month: 'Mar', score: 82 },
        { month: 'Apr', score: 79 },
        { month: 'May', score: 85 },
        { month: 'Jun', score: 83 },
      ]
    },
    '2': {
      month: [
        { subject: 'Mathematics', score: 90, classAverage: 78 },
        { subject: 'Science', score: 92, classAverage: 82 },
        { subject: 'English', score: 95, classAverage: 76 },
        { subject: 'Social Studies', score: 88, classAverage: 79 },
        { subject: 'Hindi', score: 85, classAverage: 85 },
      ],
      quarter: [
        { subject: 'Mathematics', score: 87, classAverage: 75 },
        { subject: 'Science', score: 90, classAverage: 80 },
        { subject: 'English', score: 93, classAverage: 73 },
        { subject: 'Social Studies', score: 85, classAverage: 77 },
        { subject: 'Hindi', score: 82, classAverage: 82 },
      ],
      trend: [
        { month: 'Jan', score: 86 },
        { month: 'Feb', score: 88 },
        { month: 'Mar', score: 91 },
        { month: 'Apr', score: 89 },
        { month: 'May', score: 93 },
        { month: 'Jun', score: 90 },
      ]
    }
  };
  
  // Default data for any student not in our sample
  const defaultStudentData = {
    month: [
      { subject: 'Mathematics', score: 75, classAverage: 78 },
      { subject: 'Science', score: 80, classAverage: 82 },
      { subject: 'English', score: 72, classAverage: 76 },
      { subject: 'Social Studies', score: 78, classAverage: 79 },
      { subject: 'Hindi', score: 83, classAverage: 85 },
    ],
    quarter: [
      { subject: 'Mathematics', score: 73, classAverage: 75 },
      { subject: 'Science', score: 78, classAverage: 80 },
      { subject: 'English', score: 70, classAverage: 73 },
      { subject: 'Social Studies', score: 76, classAverage: 77 },
      { subject: 'Hindi', score: 80, classAverage: 82 },
    ],
    trend: [
      { month: 'Jan', score: 72 },
      { month: 'Feb', score: 74 },
      { month: 'Mar', score: 76 },
      { month: 'Apr', score: 75 },
      { month: 'May', score: 78 },
      { month: 'Jun', score: 80 },
    ]
  };
  
  const getStudentData = (studentId) => {
    return performanceData[studentId] || defaultStudentData;
  };
  
  const currentStudent = students.find(student => student.id.toString() === selectedStudent) || students[0];
  const studentPerformance = getStudentData(selectedStudent);
  const currentPeriodData = studentPerformance[timeFrame === 'trend' ? 'trend' : timeFrame];
  
  // Calculate statistics
  const averageScore = Math.round(
    studentPerformance[timeFrame === 'trend' ? 'month' : timeFrame]
      .reduce((sum, item) => sum + item.score, 0) / 
    studentPerformance[timeFrame === 'trend' ? 'month' : timeFrame].length
  );
  
  const highestSubject = [...studentPerformance[timeFrame === 'trend' ? 'month' : timeFrame]]
    .sort((a, b) => b.score - a.score)[0];
  
  const lowestSubject = [...studentPerformance[timeFrame === 'trend' ? 'month' : timeFrame]]
    .sort((a, b) => a.score - b.score)[0];

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Student Performance</h1>
        <p className="text-gray-600">View detailed performance analytics for individual students.</p>
      </div>
      
      <div className="bg-white shadow rounded-lg mb-6">
        <div className="p-6">
          <div className="flex flex-wrap items-end justify-between mb-6">
            <div className="w-full md:w-auto mb-4 md:mb-0 mr-4">
              <label htmlFor="class" className="block text-sm font-medium text-gray-700 mb-1">
                Class
              </label>
              <select
                id="class"
                value={selectedClass}
                onChange={(e) => {
                  setSelectedClass(e.target.value);
                  setSelectedStudent(''); // Reset selected student when class changes
                }}
                className="block w-full md:w-48 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              >
                {classes.map((cls) => (
                  <option key={cls} value={cls}>{cls}</option>
                ))}
              </select>
            </div>
            
            <div className="w-full md:w-auto mb-4 md:mb-0 mr-4">
              <label htmlFor="student" className="block text-sm font-medium text-gray-700 mb-1">
                Student
              </label>
              <select
                id="student"
                value={selectedStudent}
                onChange={(e) => setSelectedStudent(e.target.value)}
                className="block w-full md:w-60 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              >
                {students.map((student) => (
                  <option key={student.id} value={student.id}>
                    {student.name} ({student.rollNo})
                  </option>
                ))}
              </select>
            </div>
            
            <div className="w-full md:w-auto">
              <div className="flex bg-gray-100 rounded-md p-1">
                <button
                  onClick={() => setTimeFrame('month')}
                  className={`px-3 py-1 text-sm font-medium rounded-md ${
                    timeFrame === 'month' ? 'bg-white shadow' : 'text-gray-500 hover:text-gray-700'
                  }`}
                >
                  Month
                </button>
                <button
                  onClick={() => setTimeFrame('quarter')}
                  className={`px-3 py-1 text-sm font-medium rounded-md ${
                    timeFrame === 'quarter' ? 'bg-white shadow' : 'text-gray-500 hover:text-gray-700'
                  }`}
                >
                  Quarter
                </button>
                <button
                  onClick={() => setTimeFrame('trend')}
                  className={`px-3 py-1 text-sm font-medium rounded-md ${
                    timeFrame === 'trend' ? 'bg-white shadow' : 'text-gray-500 hover:text-gray-700'
                  }`}
                >
                  Trend
                </button>
              </div>
            </div>
          </div>
          
          <div className="bg-indigo-50 p-4 rounded-md mb-6">
            <div className="flex items-center">
              <div className="h-12 w-12 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 font-bold text-lg">
                {currentStudent.name.split(' ').map(n => n[0]).join('')}
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-medium text-gray-900">{currentStudent.name}</h3>
                <p className="text-sm text-gray-600">Roll No: {currentStudent.rollNo} • {selectedClass}</p>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-50 p-4 rounded-md mb-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white p-4 rounded-md shadow-sm">
                <p className="text-sm text-gray-500">Average Score</p>
                <p className="text-2xl font-bold text-indigo-600">{averageScore}%</p>
              </div>
              <div className="bg-white p-4 rounded-md shadow-sm">
                <p className="text-sm text-gray-500">Highest in</p>
                <p className="text-2xl font-bold text-green-600">{highestSubject.subject} ({highestSubject.score}%)</p>
              </div>
              <div className="bg-white p-4 rounded-md shadow-sm">
                <p className="text-sm text-gray-500">Needs Improvement in</p>
                <p className="text-2xl font-bold text-red-600">{lowestSubject.subject} ({lowestSubject.score}%)</p>
              </div>
            </div>
          </div>
          
          <div className="mb-6">
            <h3 className="text-lg font-medium text-gray-900 mb-4">
              {timeFrame === 'trend' ? 'Performance Trend (6 Months)' : 'Subject Performance'}
            </h3>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                {timeFrame === 'trend' ? (
                  <LineChart
                    data={currentPeriodData}
                    margin={{
                      top: 20,
                      right: 30,
                      left: 20,
                      bottom: 5,
                    }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis domain={[0, 100]} />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="score" name="Score (%)" stroke="#6366F1" activeDot={{ r: 8 }} />
                  </LineChart>
                ) : (
                  <BarChart
                    data={currentPeriodData}
                    margin={{
                      top: 20,
                      right: 30,
                      left: 20,
                      bottom: 5,
                    }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="subject" />
                    <YAxis domain={[0, 100]} />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="score" name="Student Score (%)" fill="#6366F1" />
                    <Bar dataKey="classAverage" name="Class Average (%)" fill="#CBD5E1" />
                  </BarChart>
                )}
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}