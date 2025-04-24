import React from 'react'
import { Link, useLocation} from 'react-router-dom';
import HomeComponent from './HomeComponent';
export default function StudentDashboard() 
{
  const location = useLocation();
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <div className="flex-shrink-0 flex items-center">
                <span className="text-indigo-600 text-xl font-bold">EduQuiz AI</span>
              </div>
              <nav className="ml-6 flex space-x-4 sm:space-x-8">
                <Link 
                  to="/home"
                  className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${
                    location.pathname === '/student' 
                      ? 'border-indigo-500 text-gray-900' 
                      : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
                  }`}
                >
                  Home
                </Link>
                <Link 
                  to="subjects"
                  className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${
                    location.pathname === '/student/subjects' 
                      ? 'border-indigo-500 text-gray-900' 
                      : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
                  }`}
                >
                  Subjects
                </Link>
              </nav>
            </div>
            <div className="flex items-center">
              <div className="flex items-center">
                <span className="text-sm font-medium text-gray-700 mr-2">Rahul Singh</span>
                <div className="h-8 w-8 rounded-full bg-indigo-200 flex items-center justify-center text-indigo-600 font-medium">
                  RS
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <HomeComponent/>           
    </div>
  );
}