import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function TeacherHeader({ userName, userInitials, currentTab, setCurrentTab }) {
  const navigate = useNavigate();
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  
  const navigateTo = (path, tab) => {
    navigate(path);
    setCurrentTab(tab);
    setShowProfileMenu(false);
  };

  return (
    <header className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo and brand */}
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <span className="text-indigo-600 text-xl font-bold cursor-pointer" 
                onClick={() => navigateTo('/teacher/home', 'home')}>
                EduQuiz AI
              </span>
            </div>
          </div>
          
          {/* Navigation */}
          <div className="hidden md:flex space-x-6 items-center">
            <button 
              onClick={() => navigateTo('/teacher/home', 'home')}
              className={`px-3 py-2 text-sm font-medium rounded-md ${
                currentTab === 'home' ? 'bg-indigo-100 text-indigo-700' : 'text-gray-700 hover:text-indigo-600'
              }`}
            >
              Dashboard
            </button>
            
            <button 
              onClick={() => navigateTo('/teacher/create-assignment', 'create')}
              className={`px-3 py-2 text-sm font-medium rounded-md ${
                currentTab === 'create' ? 'bg-indigo-100 text-indigo-700' : 'text-gray-700 hover:text-indigo-600'
              }`}
            >
              Create Assignment
            </button>
            
            <button 
              onClick={() => navigateTo('/teacher/manage-assignments', 'manage')}
              className={`px-3 py-2 text-sm font-medium rounded-md ${
                currentTab === 'manage' ? 'bg-indigo-100 text-indigo-700' : 'text-gray-700 hover:text-indigo-600'
              }`}
            >
              Manage Assignments
            </button>
            
            <div className="relative">
              <button 
                onClick={() => setShowProfileMenu(!showProfileMenu)}
                className="px-3 py-2 text-sm font-medium rounded-md text-gray-700 hover:text-indigo-600"
              >
                Performance ▾
              </button>
              
              {showProfileMenu && (
                <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-10">
                  <div className="py-1">
                    <button
                      onClick={() => navigateTo('/teacher/class-performance', 'class')}
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Class Performance
                    </button>
                    <button
                      onClick={() => navigateTo('/teacher/student-performance', 'student')}
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Student Performance
                    </button>
                    <button
                      onClick={() => navigateTo('/teacher/subject-performance', 'subject')}
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Subject Performance
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
          
          {/* Profile picture */}
          <div className="flex items-center">
            <div className="relative">
              <button
                onClick={() => setShowProfileMenu(!showProfileMenu)}
                className="flex items-center focus:outline-none"
              >
                <div className="h-8 w-8 rounded-full bg-indigo-600 flex items-center justify-center text-white">
                  {userInitials}
                </div>
                <span className="ml-2 text-gray-700">{userName}</span>
                <svg className="ml-1 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
              
              {showProfileMenu && (
                <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-10">
                  <div className="py-1">
                    <button className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      Profile
                    </button>
                    <button className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      Settings
                    </button>
                    <button 
                      onClick={() => navigate('/')}
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Sign out
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}