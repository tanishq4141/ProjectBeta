import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export default function ClassPerformance() {
  const [selectedClass, setSelectedClass] = useState('Class 8A');
  const [timeFrame, setTimeFrame] = useState('month');
  
  // Sample data
  const classes = ['Class 6A', 'Class 6B', 'Class 7A', 'Class 7B', 'Class 8A', 'Class 8B', 'Class 9A', 'Class 9B', 'Class 10A'];
  
  const performanceData = {
    'Class 8A': {
      month: [
        { subject: 'Mathematics', average: 78, highest: 96, lowest: 45 },
        { subject: 'Science', average: 82, highest: 98, lowest: 60 },
        { subject: 'English', average: 76, highest: 94, lowest: 52 },
        { subject: 'Social Studies', average: 79, highest: 92, lowest: 58 },
        { subject: 'Hindi', average: 85, highest: 95, lowest: 65 },
      ],
      quarter: [
        { subject: 'Mathematics', average: 75, highest: 94, lowest: 42 },
        { subject: 'Science', average: 80, highest: 97, lowest: 58 },
        { subject: 'English', average: 73, highest: 92, lowest: 48 },
        { subject: 'Social Studies', average: 77, highest: 90, lowest: 55 },
        { subject: 'Hindi', average: 82, highest: 96, lowest: 62 },
      ],
      year: [
        { subject: 'Mathematics', average: 72, highest: 92, lowest: 40 },
        { subject: 'Science', average: 78, highest: 96, lowest: 55 },
        { subject: 'English', average: 70, highest: 90, lowest: 45 },
        { subject: 'Social Studies', average: 75, highest: 88, lowest: 52 },
        { subject: 'Hindi', average: 80, highest: 94, lowest: 60 },
      ]
    },
    'Class 9B': {
      month: [
        { subject: 'Mathematics', average: 72, highest: 94, lowest: 42 },
        { subject: 'Science', average: 79, highest: 96, lowest: 55 },
        { subject: 'English', average: 81, highest: 95, lowest: 60 },
        { subject: 'Social Studies', average: 76, highest: 90, lowest: 53 },
        { subject: 'Hindi', average: 78, highest: 92, lowest: 58 },
      ],
      quarter: [
        { subject: 'Mathematics', average: 70, highest: 92, lowest: 40 },
        { subject: 'Science', average: 76, highest: 94, lowest: 52 },
        { subject: 'English', average: 78, highest: 93, lowest: 57 },
        { subject: 'Social Studies', average: 74, highest: 89, lowest: 50 },
        { subject: 'Hindi', average: 75, highest: 90, lowest: 56 },
      ],
      year: [
        { subject: 'Mathematics', average: 68, highest: 90, lowest: 38 },
        { subject: 'Science', average: 74, highest: 92, lowest: 50 },
        { subject: 'English', average: 76, highest: 91, lowest: 55 },
        { subject: 'Social Studies', average: 72, highest: 87, lowest: 48 },
        { subject: 'Hindi', average: 73, highest: 89, lowest: 54 },
      ]
    }
  };
  
  // For other classes, we'll use Class 8A data as default
  const getClassData = (className) => {
    return performanceData[className] || performanceData['Class 8A'];
  };
  
  const currentData = getClassData(selectedClass)[timeFrame];
  
  // Statistics
  const averageScore = Math.round(currentData.reduce((sum, item) => sum + item.average, 0) / currentData.length);
  const highestSubject = [...currentData].sort((a, b) => b.average - a.average)[0].subject;
  const lowestSubject = [...currentData].sort((a, b) => a.average - b.average)[0].subject;

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Class Performance</h1>
        <p className="text-gray-600">View and analyze performance metrics for each class.</p>
      </div>
      
      <div className="bg-white shadow rounded-lg mb-6">
        <div className="p-6">
          <div className="flex flex-wrap items-center justify-between mb-6">
            <div className="w-full md:w-auto mb-4 md:mb-0">
              <label htmlFor="class" className="block text-sm font-medium text-gray-700 mb-1">
                Select Class
              </label>
              <select
                id="class"
                value={selectedClass}
                onChange={(e) => setSelectedClass(e.target.value)}
                className="block w-full md:w-48 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              >
                {classes.map((cls) => (
                  <option key={cls} value={cls}>{cls}</option>
                ))}
              </select>
            </div>
            
            <div className="w-full md:w-auto">
              <div className="flex items-center space-x-4">
                <span className="text-sm text-gray-700">Time Period:</span>
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
                    onClick={() => setTimeFrame('year')}
                    className={`px-3 py-1 text-sm font-medium rounded-md ${
                      timeFrame === 'year' ? 'bg-white shadow' : 'text-gray-500 hover:text-gray-700'
                    }`}
                  >
                    Year
                  </button>
                </div>
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
                <p className="text-sm text-gray-500">Highest Performing Subject</p>
                <p className="text-2xl font-bold text-green-600">{highestSubject}</p>
              </div>
              <div className="bg-white p-4 rounded-md shadow-sm">
                <p className="text-sm text-gray-500">Lowest Performing Subject</p>
                <p className="text-2xl font-bold text-red-600">{lowestSubject}</p>
              </div>
            </div>
          </div>
          
          <div className="mb-6">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Subject Performance</h3>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={currentData}
                  margin={{
                    top: 20,
                    right: 30,
                    left: 20,
                    bottom: 5,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="subject" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="average" name="Average Score (%)" fill="#6366F1" />
                  <Bar dataKey="highest" name="Highest Score (%)" fill="#10B981" />
                  <Bar dataKey="lowest" name="Lowest Score (%)" fill="#F87171" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}