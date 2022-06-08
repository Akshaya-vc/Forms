import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar.component';
import Question from './components/Question/Question.component';

const App = () => {
  const [questionList, setQuestionList] = useState([
    {
      title: 'question 1',
      type: 'short-answer',
      body: {
        single: ['option 1', 'option 2'],
        multiple: [[], []],
      },
      id: 1,
      isActive: true,
      isRequired: false,
    },
    {
      title: 'question 2',
      type: 'checkbox',
      body: {
        single: ['option 1', 'option 2'],
        multiple: [['row 1'], ['column 2']],
      },
      id: 2,
      isActive: false,
      isRequired: true,
    },
  ]);
  const handleChange = (info) => {
    const newArr = questionList.map((question) => {
      if (question.id === info.id) return info;
      return question;
    });
    setQuestionList(newArr);
  };
  const handleNew = (info) => {
    const newObj = { ...info, id: questionList.length + 1 };
    setQuestionList([...questionList, newObj]);
  };
  const handleDelete = (id) => {
    const newArr = questionList.filter((question) => question.id !== id);
    setQuestionList(newArr);
  };
  return (
    <div className="App">
      <Navbar />
      {questionList.map((question, index) => {
        return (
          <Question
            info={question}
            handleInfo={handleChange}
            addQuestion={handleNew}
            deleteQuestion={handleDelete}
            key={index}
          />
        );
      })}
    </div>
  );
};

export default App;
