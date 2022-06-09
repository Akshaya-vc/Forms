/* eslint-disable react/forbid-prop-types */
import React from 'react';
import './App.css';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import Navbar from './components/Navbar/Navbar.component';
import Card from './components/Card/Card.component';

const App = ({ question }) => {
  return (
    <div className="App">
      <Navbar />
      {question.map((q, index) => {
        return <Card info={q} key={index} />;
      })}
    </div>
  );
};

App.propTypes = {
  question: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  question: state.question,
});

export default connect(mapStateToProps)(App);
