import React, { useState } from 'react';
import './CreateAssignment.css';

const CreateAssignment = () => {
  const [assignmentData, setAssignmentData] = useState({
    title: '',
    subject: '',
    class: '',
    batch: '',
    type: 'mcq',
    prompt: '',
    questions: []
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setAssignmentData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const generateQuestions = async () => {
    try {
      // Here we'll integrate with Gemini API
      // This is a placeholder for the actual API call
      const response = await fetch('YOUR_GEMINI_API_ENDPOINT', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          prompt: assignmentData.prompt,
          type: assignmentData.type
        })
      });
      
      const data = await response.json();
      setAssignmentData(prev => ({
        ...prev,
        questions: data.questions
      }));
    } catch (error) {
      console.error('Error generating questions:', error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here we'll add the logic to save the assignment
    console.log('Assignment Data:', assignmentData);
  };

  return (
    <div className="create-assignment">
      <h2>Create New Assignment</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Assignment Title</label>
          <input
            type="text"
            name="title"
            value={assignmentData.title}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Subject</label>
          <input
            type="text"
            name="subject"
            value={assignmentData.subject}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Class</label>
          <input
            type="text"
            name="class"
            value={assignmentData.class}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Batch</label>
          <input
            type="text"
            name="batch"
            value={assignmentData.batch}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Question Type</label>
          <select
            name="type"
            value={assignmentData.type}
            onChange={handleInputChange}
          >
            <option value="mcq">Multiple Choice</option>
            <option value="fill">Fill in the Blank</option>
            <option value="oneword">One Word Answer</option>
          </select>
        </div>

        <div className="form-group">
          <label>Prompt for Gemini</label>
          <textarea
            name="prompt"
            value={assignmentData.prompt}
            onChange={handleInputChange}
            placeholder="Enter the topic or concept for generating questions..."
            required
          />
        </div>

        <button type="button" onClick={generateQuestions} className="generate-btn">
          Generate Questions
        </button>

        {assignmentData.questions.length > 0 && (
          <div className="questions-preview">
            <h3>Generated Questions</h3>
            {assignmentData.questions.map((question, index) => (
              <div key={index} className="question-item">
                <p>{question.text}</p>
                {question.type === 'mcq' && (
                  <div className="options">
                    {question.options.map((option, optIndex) => (
                      <label key={optIndex}>
                        <input
                          type="radio"
                          name={`question-${index}`}
                          value={option}
                        />
                        {option}
                      </label>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        <button type="submit" className="submit-btn">
          Create Assignment
        </button>
      </form>
    </div>
  );
};

export default CreateAssignment; 