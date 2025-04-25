const SubjectComponent = () => {
    // Mock state for tab selection
    const [activeTab, setActiveTab] = useState('uncompleted');
    
    // Mock assignment data (would come from API)
    const uncompletedAssignments = [
      { id: 1, title: "Linear Equations Quiz", deadline: "April 26, 2025", totalQuestions: 15 },
      { id: 2, title: "Quadratic Functions Test", deadline: "May 1, 2025", totalQuestions: 10 },
    ];
    
    const completedAssignments = [
      { id: 3, title: "Geometry Basics", completedOn: "April 15, 2025", score: "85%" },
      { id: 4, title: "Algebraic Expressions", completedOn: "April 10, 2025", score: "92%" },
      { id: 5, title: "Number Systems", completedOn: "April 5, 2025", score: "78%" },
    ];
    
    const practiceAssignments = [
      { id: 6, title: "Trigonometry Quiz", deadline: "April 15, 2025 (Expired)", type: "Practice Mode" },
    ];
    
    return (
      <div className="p-6">
        <div className="flex items-center mb-6">
          <div className="w-10 h-10 rounded-full bg-indigo-600 text-white flex items-center justify-center text-xl mr-3">
            ➗
          </div>
          <h2 className="text-2xl font-bold">Mathematics</h2>
        </div>
        
        {/* Tab Navigation */}
        <div className="flex border-b mb-6">
          <button 
            className={`px-4 py-2 font-medium ${activeTab === 'uncompleted' ? 'text-indigo-600 border-b-2 border-indigo-600' : 'text-gray-500'}`}
            onClick={() => setActiveTab('uncompleted')}
          >
            To Complete
          </button>
          <button 
            className={`px-4 py-2 font-medium ${activeTab === 'completed' ? 'text-indigo-600 border-b-2 border-indigo-600' : 'text-gray-500'}`}
            onClick={() => setActiveTab('completed')}
          >
            Completed
          </button>
          <button 
            className={`px-4 py-2 font-medium ${activeTab === 'practice' ? 'text-indigo-600 border-b-2 border-indigo-600' : 'text-gray-500'}`}
            onClick={() => setActiveTab('practice')}
          >
            Practice Mode
          </button>
        </div>
        
        {/* Assignments Display */}
        <div>
          {activeTab === 'uncompleted' && (
            <div className="space-y-4">
              {uncompletedAssignments.map(assignment => (
                <div key={assignment.id} className="bg-white p-4 rounded-lg shadow-md">
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="font-bold text-lg">{assignment.title}</h3>
                      <p className="text-sm text-gray-500">Due: {assignment.deadline}</p>
                      <p className="text-sm text-gray-500">{assignment.totalQuestions} questions</p>
                    </div>
                    <button className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700">
                      Start
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
          
          {activeTab === 'completed' && (
            <div className="space-y-4">
              {completedAssignments.map(assignment => (
                <div key={assignment.id} className="bg-white p-4 rounded-lg shadow-md">
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="font-bold text-lg">{assignment.title}</h3>
                      <p className="text-sm text-gray-500">Completed: {assignment.completedOn}</p>
                      <p className="text-sm text-gray-500">Score: {assignment.score}</p>
                    </div>
                    <button className="px-4 py-2 bg-green-100 text-green-700 rounded-md">
                      View Results
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
          
          {activeTab === 'practice' && (
            <div className="space-y-4">
              {practiceAssignments.map(assignment => (
                <div key={assignment.id} className="bg-white p-4 rounded-lg shadow-md border-l-4 border-amber-500">
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="font-bold text-lg">{assignment.title}</h3>
                      <p className="text-sm text-gray-500">{assignment.deadline}</p>
                      <div className="inline-block mt-1 px-2 py-1 bg-amber-100 text-amber-800 text-xs rounded">
                        {assignment.type}
                      </div>
                    </div>
                    <button className="px-4 py-2 bg-amber-600 text-white rounded-md hover:bg-amber-700">
                      Practice
                    </button>
                  </div>
                </div>
              ))}
              {completedAssignments.map(assignment => (
                <div key={`practice-${assignment.id}`} className="bg-white p-4 rounded-lg shadow-md border-l-4 border-green-500">
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="font-bold text-lg">{assignment.title}</h3>
                      <p className="text-sm text-gray-500">Completed: {assignment.completedOn}</p>
                      <div className="inline-block mt-1 px-2 py-1 bg-green-100 text-green-800 text-xs rounded">
                        Practice Mode
                      </div>
                    </div>
                    <button className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700">
                      Practice
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    );
  };

export default SubjectComponent; 