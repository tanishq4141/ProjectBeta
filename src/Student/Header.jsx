import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Header({ userName, userInitials }) {
  const location = useLocation();

  return (
    <header className="bg-white shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <span className="text-indigo-600 text-xl font-bold">ProjectBeta</span>
            </div>
            <nav className="ml-6 flex space-x-4 sm:space-x-8">
              {/** Home link **/}
              <Link
                to="/student/home"
                className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${
                  location.pathname === '/student'
                    ? 'border-indigo-500 text-gray-900'
                    : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
                }`}
              >
                Home
              </Link>

              {/** Subjects link **/}
              <Link
                to="/student/subjects"
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
            <span className="text-sm font-medium text-gray-700 mr-2">{userName}</span>
            <div className="h-8 w-8 rounded-full bg-indigo-200 flex items-center justify-center text-indigo-600 font-medium">
              {userInitials}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
