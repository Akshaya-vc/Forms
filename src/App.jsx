import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar.component';
import Question from './components/Question/Question.component';

const App = () => {
  const [questionList, setQuestionList] = useState([
    {
      title: 'question 1',
      type: 'short-answer',
      options: [],
      id: 1,
      isActive: true,
    },
    {
      title: 'question 2',
      type: 'checkbox',
      options: [],
      id: 2,
      isActive: false,
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
  console.log(questionList);
  return (
    <div className="App">
      <Navbar />
      {questionList.map((question, index) => {
        return (
          <Question
            info={question}
            handleInfo={handleChange}
            addQuestion={handleNew}
            key={index}
          />
        );
      })}
    </div>
  );
};

export default App;
