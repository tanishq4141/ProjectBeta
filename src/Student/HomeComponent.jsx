// Placeholder components (to be implemented separately)
const HomeComponent = () => 
{   
    return(
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6">Home</h2>
      
      {/* Recently Added Assignments */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-4">Recently Added Assignments</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Assignment Cards Would Go Here */}
          <div className="bg-white p-4 rounded-lg shadow">
            <div className="font-medium text-indigo-600">Mathematics</div>
            <div className="font-bold mt-1">Linear Equations Quiz</div>
            <div className="text-sm text-gray-500 mt-2">Due: April 26, 2025</div>
            <button className="mt-3 px-3 py-1 bg-indigo-100 text-indigo-700 rounded-md text-sm">
              Start Quiz
            </button>
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <div className="font-medium text-green-600">Science</div>
            <div className="font-bold mt-1">Photosynthesis Assignment</div>
            <div className="text-sm text-gray-500 mt-2">Due: April 28, 2025</div>
            <button className="mt-3 px-3 py-1 bg-green-100 text-green-700 rounded-md text-sm">
              Start Quiz
            </button>
          </div>
        </div>
      </div>
      
      {/* Performance Summary */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-4">Performance Summary</h3>
        <div className="bg-white p-6 rounded-lg shadow">
          <div className="flex justify-center items-center gap-100">
            {/*grid grid-cols-1 md:grid-cols-3 gap-4*/}
            {/* <div className="text-center">
              <div className="text-3xl font-bold text-indigo-600">85%</div>
              <div className="text-sm text-gray-500">Average Score</div>
            </div> */}
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600">12</div>
              <div className="text-sm text-gray-500">Completed Quizzes</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-amber-600">4</div>
              <div className="text-sm text-gray-500">Pending Quizzes</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Timetable */}
      <div>
        <h3 className="text-xl font-semibold mb-4">Timetable</h3>
        <div className="bg-white p-6 rounded-lg shadow">
          <div className="space-y-3">
            <div className="flex items-center p-3 bg-indigo-50 rounded-md">
              <div className="font-medium w-24">9:00 AM</div>
              <div className="font-medium">English</div>
            </div>
            <div className="flex items-center p-3 bg-green-50 rounded-md">
              <div className="font-medium w-24">10:30 AM</div>
              <div className="font-medium">Science</div>
            </div>
            <div className="flex items-center p-3 bg-amber-50 rounded-md">
              <div className="font-medium w-24">12:00 PM</div>
              <div className="font-medium">Math</div>
            </div>
            <div className="flex items-center p-3 bg-green-50 rounded-md">
              <div className="font-medium w-24">1:30 PM</div>
              <div className="font-medium">Hindi</div>
            </div>
            <div className="flex items-center p-3 bg-indigo-50 rounded-md">
              <div className="font-medium w-24">3:00 PM</div>
              <div className="font-medium">Social Science</div>
            </div>
          </div>
        </div>
      </div>
    </div>)
}
export default HomeComponent;