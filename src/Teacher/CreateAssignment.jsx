import React, { useState } from 'react';

export default function CreateAssignment() {
  // State for assignment form
  const [assignmentType, setAssignmentType] = useState('quiz');
  const [title, setTitle] = useState('');
  const [subject, setSubject] = useState('');
  const [selectedClass, setSelectedClass] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [description, setDescription] = useState('');
  const [questions, setQuestions] = useState([
    { id: 1, question: '', options: ['', '', '', ''], correctAnswer: '', type: 'mcq', marks: 1 }
  ]);
  const [currentStep, setCurrentStep] = useState(1);
  
  // Sample data
  const subjects = ['Mathematics', 'Science', 'English', 'Social Studies', 'Hindi', 'Computer Science'];
  const classes = ['Class 6A', 'Class 6B', 'Class 7A', 'Class 7B', 'Class 8A', 'Class 8B', 'Class 9A', 'Class 9B', 'Class 10A'];
  
  // Question handlers
  const addQuestion = () => {
    const newQuestion = {
      id: questions.length + 1,
      question: '',
      options: assignmentType === 'quiz' ? ['', '', '', ''] : [],
      correctAnswer: '',
      type: assignmentType === 'quiz' ? 'mcq' : (assignmentType === 'fill-blank' ? 'fill-blank' : 'one-word'),
      marks: 1
    };
    setQuestions([...questions, newQuestion]);
  };
  
  const updateQuestion = (index, field, value) => {
    const updatedQuestions = [...questions];
    updatedQuestions[index][field] = value;
    setQuestions(updatedQuestions);
  };
  
  const updateOption = (questionIndex, optionIndex, value) => {
    const updatedQuestions = [...questions];
    updatedQuestions[questionIndex].options[optionIndex] = value;
    setQuestions(updatedQuestions);
  };
  
  const removeQuestion = (index) => {
    const updatedQuestions = questions.filter((_, i) => i !== index);
    setQuestions(updatedQuestions);
  };
  
  // Assignment creation
  const createAssignment = () => {
    // Here you would typically send the data to your backend
    const assignment = {
      title,
      subject,
      class: selectedClass,
      dueDate,
      description,
      type: assignmentType,
      questions
    };
    
    console.log('Creating assignment:', assignment);
    // Reset form or navigate away
    alert('Assignment created successfully!');
    resetForm();
  };
  
  const resetForm = () => {
    setTitle('');
    setSubject('');
    setSelectedClass('');
    setDueDate('');
    setDescription('');
    setQuestions([
      { id: 1, question: '', options: ['', '', '', ''], correctAnswer: '', type: 'mcq', marks: 1 }
    ]);
    setCurrentStep(1);
  };
  
  const nextStep = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    }
  };
  
  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };
  
  // Form validation
  const isStep1Valid = title && subject && selectedClass && dueDate;
  const isStep2Valid = questions.every(q => 
    q.question && 
    (q.type === 'mcq' ? q.options.every(opt => opt) && q.correctAnswer : q.correctAnswer)
  );

  return (
    <div className="bg-white shadow rounded-lg">
      <div className="px-4 py-5 sm:p-6">
        <h1 className="text-xl font-semibold text-gray-900 mb-4">Create New Assignment</h1>
        
        {/* Progress steps */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div className="w-full flex items-center">
              <div className={`flex items-center justify-center w-10 h-10 rounded-full ${
                currentStep >= 1 ? 'bg-indigo-600 text-white' : 'bg-gray-200 text-gray-600'
              }`}>
                1
              </div>
              <div className={`h-1 flex-1 ${currentStep >= 2 ? 'bg-indigo-600' : 'bg-gray-200'}`}></div>
              <div className={`flex items-center justify-center w-10 h-10 rounded-full ${
                currentStep >= 2 ? 'bg-indigo-600 text-white' : 'bg-gray-200 text-gray-600'
              }`}>
                2
              </div>
              <div className={`h-1 flex-1 ${currentStep >= 3 ? 'bg-indigo-600' : 'bg-gray-200'}`}></div>
              <div className={`flex items-center justify-center w-10 h-10 rounded-full ${
                currentStep >= 3 ? 'bg-indigo-600 text-white' : 'bg-gray-200 text-gray-600'
              }`}>
                3
              </div>
            </div>
          </div>
          <div className="flex justify-between mt-2 text-sm">
            <span className="text-indigo-600 font-medium">Assignment Details</span>
            <span className={currentStep >= 2 ? "text-indigo-600 font-medium" : "text-gray-500"}>Create Questions</span>
            <span className={currentStep >= 3 ? "text-indigo-600 font-medium" : "text-gray-500"}>Review & Submit</span>
          </div>
        </div>
        
        {/* Step 1: Assignment Details */}
        {currentStep === 1 && (
          <div>
            <div className="grid grid-cols-1 gap-6">
              <div>
                <label htmlFor="title" className="block text-sm font-medium text-gray-700">
                  Assignment Title
                </label>
                <input
                  type="text"
                  name="title"
                  id="title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  placeholder="e.g., Science Quiz: Forces and Motion"
                />
              </div>
              
              <div>
                <label htmlFor="type" className="block text-sm font-medium text-gray-700">
                  Assignment Type
                </label>
                <select
                  id="type"
                  name="type"
                  value={assignmentType}
                  onChange={(e) => setAssignmentType(e.target.value)}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                >
                  <option value="quiz">Multiple Choice Quiz</option>
                  <option value="fill-blank">Fill in the Blanks</option>
                  <option value="one-word">One Word Answer</option>
                </select>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
                    Subject
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  >
                    <option value="">Select Subject</option>
                    {subjects.map((sub) => (
                      <option key={sub} value={sub}>{sub}</option>
                    ))}
                  </select>
                </div>
                
                <div>
                  <label htmlFor="class" className="block text-sm font-medium text-gray-700">
                    Class
                  </label>
                  <select
                    id="class"
                    name="class"
                    value={selectedClass}
                    onChange={(e) => setSelectedClass(e.target.value)}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  >
                    <option value="">Select Class</option>
                    {classes.map((cls) => (
                      <option key={cls} value={cls}>{cls}</option>
                    ))}
                  </select>
                </div>
              </div>
              
              <div>
                <label htmlFor="dueDate" className="block text-sm font-medium text-gray-700">
                  Due Date
                </label>
                <input
                  type="date"
                  name="dueDate"
                  id="dueDate"
                  value={dueDate}
                  onChange={(e) => setDueDate(e.target.value)}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
              </div>
              
              <div>
                <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                  Description (Optional)
                </label>
                <textarea
                  id="description"
                  name="description"
                  rows={3}
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  placeholder="Instructions or additional information for students..."
                />
              </div>
            </div>
          </div>
        )}
        
        {/* Step 2: Create Questions */}
        {currentStep === 2 && (
          <div>
            <div className="mb-6">
              <h2 className="text-lg font-medium text-gray-900">Questions</h2>
              <p className="text-sm text-gray-500">
                {assignmentType === 'quiz' 
                  ? 'Create multiple choice questions for your quiz.'
                  : assignmentType === 'fill-blank'
                    ? 'Create fill in the blank questions.'
                    : 'Create one word answer questions.'
                }
              </p>
            </div>
            
            {questions.map((question, index) => (
              <div key={question.id} className="mb-8 p-4 border rounded-md bg-gray-50">
                <div className="flex justify-between mb-4">
                  <h3 className="text-md font-medium text-gray-900">Question {index + 1}</h3>
                  {questions.length > 1 && (
                    <button
                      type="button"
                      onClick={() => removeQuestion(index)}
                      className="text-red-600 hover:text-red-800"
                    >
                      Remove
                    </button>
                  )}
                </div>
                
                <div className="mb-4">
                  <label htmlFor={`question-${index}`} className="block text-sm font-medium text-gray-700">
                    Question Text
                    </label>
                  <input
                    type="text"
                    id={`question-${index}`}
                    value={question.question}
                    onChange={(e) => updateQuestion(index, 'question', e.target.value)}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    placeholder="Enter your question here"
                  />
                </div>
                
                {/* Multiple Choice Options */}
                {assignmentType === 'quiz' && (
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Options
                    </label>
                    <div className="space-y-2">
                      {question.options.map((option, optionIndex) => (
                        <div key={optionIndex} className="flex items-center">
                          <input
                            type="radio"
                            id={`option-${index}-${optionIndex}`}
                            name={`correct-${index}`}
                            checked={question.correctAnswer === option}
                            onChange={() => updateQuestion(index, 'correctAnswer', option)}
                            className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300"
                          />
                          <input
                            type="text"
                            value={option}
                            onChange={(e) => updateOption(index, optionIndex, e.target.value)}
                            className="ml-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                            placeholder={`Option ${optionIndex + 1}`}
                          />
                        </div>
                      ))}
                    </div>
                    <p className="mt-1 text-sm text-gray-500">Select the correct answer by clicking the radio button.</p>
                  </div>
                )}
                
                {/* Fill in the Blanks or One Word Answer */}
                {(assignmentType === 'fill-blank' || assignmentType === 'one-word') && (
                  <div className="mb-4">
                    <label htmlFor={`answer-${index}`} className="block text-sm font-medium text-gray-700">
                      Correct Answer
                    </label>
                    <input
                      type="text"
                      id={`answer-${index}`}
                      value={question.correctAnswer}
                      onChange={(e) => updateQuestion(index, 'correctAnswer', e.target.value)}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      placeholder="Enter the correct answer"
                    />
                  </div>
                )}
                
                <div>
                  <label htmlFor={`marks-${index}`} className="block text-sm font-medium text-gray-700">
                    Marks
                  </label>
                  <input
                    type="number"
                    id={`marks-${index}`}
                    value={question.marks}
                    onChange={(e) => updateQuestion(index, 'marks', parseInt(e.target.value))}
                    min="1"
                    className="mt-1 block w-32 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                </div>
              </div>
            ))}
            
            <button
              type="button"
              onClick={addQuestion}
              className="mt-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 focus:outline-none"
            >
              <svg className="-ml-1 mr-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
              </svg>
              Add Question
            </button>
          </div>
        )}
        
        {/* Step 3: Review & Submit */}
        {currentStep === 3 && (
          <div>
            <div className="mb-6">
              <h2 className="text-lg font-medium text-gray-900">Review Your Assignment</h2>
              <p className="text-sm text-gray-500">
                Please review the assignment details and questions before submitting.
              </p>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-md mb-6">
              <h3 className="text-md font-medium text-gray-900 mb-2">Assignment Details</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-gray-500">Title:</p>
                  <p className="font-medium">{title}</p>
                </div>
                <div>
                  <p className="text-gray-500">Type:</p>
                  <p className="font-medium capitalize">{assignmentType.replace('-', ' ')}</p>
                </div>
                <div>
                  <p className="text-gray-500">Subject:</p>
                  <p className="font-medium">{subject}</p>
                </div>
                <div>
                  <p className="text-gray-500">Class:</p>
                  <p className="font-medium">{selectedClass}</p>
                </div>
                <div>
                  <p className="text-gray-500">Due Date:</p>
                  <p className="font-medium">{dueDate}</p>
                </div>
                {description && (
                  <div className="col-span-2">
                    <p className="text-gray-500">Description:</p>
                    <p className="font-medium">{description}</p>
                  </div>
                )}
              </div>
            </div>
            
            <div className="mb-6">
              <h3 className="text-md font-medium text-gray-900 mb-2">Questions ({questions.length})</h3>
              <div className="space-y-4">
                {questions.map((q, index) => (
                  <div key={q.id} className="p-3 border rounded-md">
                    <p className="font-medium">Q{index + 1}: {q.question} <span className="text-gray-500 text-sm">({q.marks} {q.marks === 1 ? 'mark' : 'marks'})</span></p>
                    {q.type === 'mcq' ? (
                      <div className="mt-2 pl-4">
                        <p className="text-gray-500 text-sm">Options:</p>
                        <ul className="list-disc pl-5 text-sm">
                          {q.options.map((opt, i) => (
                            <li key={i} className={opt === q.correctAnswer ? "text-green-600 font-medium" : ""}>
                              {opt} {opt === q.correctAnswer && "(Correct)"}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ) : (
                      <div className="mt-2 pl-4 text-sm">
                        <p className="text-gray-500">Correct Answer:</p>
                        <p className="text-green-600 font-medium">{q.correctAnswer}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
              <div className="flex">
                <div className="flex-shrink-0">
                  <svg className="h-5 w-5 text-yellow-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="ml-3">
                  <p className="text-sm text-yellow-700">
                    Once submitted, this assignment will be visible to the selected class. You can edit it later if needed.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
        
        {/* Navigation buttons */}
        <div className="flex justify-between mt-8">
          {currentStep > 1 ? (
            <button
              type="button"
              onClick={prevStep}
              className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none"
            >
              Back
            </button>
          ) : (
            <div></div>
          )}
          
          {currentStep < 3 ? (
            <button
              type="button"
              onClick={nextStep}
              disabled={currentStep === 1 && !isStep1Valid || currentStep === 2 && !isStep2Valid}
              className={`inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none ${
                (currentStep === 1 && !isStep1Valid) || (currentStep === 2 && !isStep2Valid)
                  ? 'opacity-50 cursor-not-allowed'
                  : ''
              }`}
            >
              Next
            </button>
          ) : (
            <button
              type="button"
              onClick={createAssignment}
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none"
            >
              Create Assignment
            </button>
          )}
        </div>
      </div>
    </div>
  );
}