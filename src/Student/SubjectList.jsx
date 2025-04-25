const SubjectList = () => {
  // Mock subject data (would come from API)
  const subjects = [
    { id: 1, name: "Mathematics", color: "bg-indigo-600", icon: "➗" },
    { id: 2, name: "Science", color: "bg-green-600", icon: "🔬" },
    { id: 3, name: "English", color: "bg-amber-600", icon: "📚" },
    { id: 4, name: "Social Studies", color: "bg-blue-600", icon: "🌍" },
    { id: 5, name: "Hindi", color: "bg-red-600", icon: "🗣️" },
  ];
  
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6">My Subjects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {subjects.map(subject => (
          //<Link key={subject.id} to={`/student/subject/${subject.id}`}>
            <div key={subject.id} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className={`w-12 h-12 rounded-full ${subject.color} text-white flex items-center justify-center text-2xl mb-4`}>
                {subject.icon}
              </div>
              <h3 className="text-lg font-bold">{subject.name}</h3>
              <p className="text-sm text-gray-500 mt-1">5 assignments</p>
            </div>
          //</Link>
        ))}
      </div>
    </div>
  );
};
export default SubjectList; 