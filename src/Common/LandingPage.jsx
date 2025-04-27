import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-indigo-100">
      {/* Navigation Bar */}
      <nav className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0 flex items-center">
                <span className="text-indigo-600 text-xl font-bold">EduQuiz AI</span>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <button 
                onClick={() => navigate('/login')}
                className="px-4 py-2 text-indigo-600 hover:text-indigo-800 font-medium"
              >
                Log In
              </button>
              <button 
                onClick={() => navigate('/signup')}
                className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 font-medium"
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
              AI-Powered Quizzes for Indian Schools
            </h1>
            <p className="mt-5 text-xl text-gray-500">
              Reduce teacher workload and enhance student learning with AI-generated assessments tailored for classes 1-10.
            </p>
            <div className="mt-8 flex space-x-4">
              <button 
                onClick={() => navigate('/teacher/home')}
                className="px-6 py-3 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 font-medium"
              >
                I'm a Teacher
              </button>
              <button 
                onClick={() => navigate('/student')}
                className="px-6 py-3 bg-emerald-600 text-white rounded-md hover:bg-emerald-700 font-medium"
              >
                I'm a Student
              </button>
            </div>
          </div>
          <div className="hidden md:block">
            <img 
              src="/src/assets/hero.jpg" 
              alt="Educational illustration" 
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-center text-gray-900">Features</h2>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-indigo-50 rounded-lg p-6 shadow-md">
              <div className="text-indigo-600 text-2xl mb-4">✨</div>
              <h3 className="text-xl font-bold text-gray-900">AI Quiz Generation</h3>
              <p className="mt-2 text-gray-600">
                Generate MCQs and Fill in the Blanks questions automatically using AI
              </p>
            </div>
            
            {/* Feature 2 */}
            <div className="bg-indigo-50 rounded-lg p-6 shadow-md">
              <div className="text-indigo-600 text-2xl mb-4">📊</div>
              <h3 className="text-xl font-bold text-gray-900">Performance Tracking</h3>
              <p className="mt-2 text-gray-600">
                Track student progress and quiz completion with detailed analytics
              </p>
            </div>
            
            {/* Feature 3 */}
            <div className="bg-indigo-50 rounded-lg p-6 shadow-md">
              <div className="text-indigo-600 text-2xl mb-4">🔄</div>
              <h3 className="text-xl font-bold text-gray-900">Practice Mode</h3>
              <p className="mt-2 text-gray-600">
                Students can practice with past quizzes after deadlines have passed
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-lg font-bold">EduQuiz AI</p>
              <p className="text-sm text-gray-300">Empowering education with AI</p>
            </div>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-300 hover:text-white">About</a>
              <a href="#" className="text-gray-300 hover:text-white">Contact</a>
              <a href="#" className="text-gray-300 hover:text-white">Privacy</a>
              <a href="#" className="text-gray-300 hover:text-white">Terms</a>
            </div>
          </div>
          <div className="mt-8 border-t border-gray-700 pt-8 text-center text-sm text-gray-300">
            &copy; {new Date().getFullYear()} EduQuiz AI. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}