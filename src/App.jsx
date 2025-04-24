// import React from 'react';
// import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
// import LandingPage from './Common/LandingPage';
// import Login from './Common/Auth/Login';
// import Signup from './Common/Auth/Signup';
// import TeacherDashboard from './Teacher/TeacherDashboard';
// import StudentDashboard from './Student/StudentDashboard';
// import NotFound from './Common/NotFound';

// // A simple authentication checker (to be replaced with actual auth logic)
// const ProtectedRoute = ({ children, requiredRole }) => {
//   // Mock authentication check - replace with actual auth logic
//   const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';
//   const userRole = localStorage.getItem('userRole');
  
//   if (!isAuthenticated) {
//     return <Navigate to="/login" />;
//   }
  
//   if (requiredRole && userRole !== requiredRole) {
//     return <Navigate to="/unauthorized" />;
//   }
  
//   return children;
// };

// export default function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         {/* Public routes */}
//         <Route path="/" element={<LandingPage />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/signup" element={<Signup />} />
        
//         {/* Protected routes for teachers */}
//         <Route 
//           path="/teacher/*" 
//           element={
//             <ProtectedRoute requiredRole="teacher">
//               <TeacherDashboard />
//             </ProtectedRoute>
//           } 
//         />
        
//         {/* Protected routes for students */}
//         <Route 
//           path="/student/*" 
//           element={
//             <ProtectedRoute requiredRole="student">
//               <StudentDashboard />
//             </ProtectedRoute>
//           } 
//         />
        
//         {/* Error routes */}
//         <Route path="/unauthorized" element={<div>Unauthorized Access</div>} />
//         <Route path="*" element={<NotFound />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import StudentDashboard from './Student/StudentDashboard';
import HomeComponent from './Student/HomeComponent';
import SubjectList from './Student/SubjectList';
import SubjectComponent from './Student/SubjectComponent';

const App = () => {
  return (
    <Router>
    
      <Routes>
         <Route path="/" element={<StudentDashboard />}/>
         <Route path='/home' element={<HomeComponent />} />
         <Route path="subjects" element={<SubjectList />} />
         <Route path="subject/:id" element={<SubjectComponent />} />
         {/* Other routes */}
      </Routes>
    </Router>
  )
}

export default App