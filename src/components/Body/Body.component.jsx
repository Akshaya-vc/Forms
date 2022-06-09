import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './Body.styles.css';
import Text from '../Options/Text/Text.component';
import OneDimension from '../Options/OneDimension/OneDimension.component';
import TwoDimension from '../Options/TwoDimension/TwoDimension.component';
import LinearScale from '../Options/LinearScale/LinearScale.component';
import File from '../Options/File/File.component';

const Body = ({ info }) => {
  const { type } = info;

  return (
    <div className="question-body" style={{ textAlign: 'left' }}>
      {type === 'short-answer' ? (
        <Text text="Short description" type={type} />
      ) : type === 'long-answer' ? (
        <Text text="Long description" type={type} />
      ) : type === 'multiple-choice' ? (
        <OneDimension info={info} />
      ) : type === 'checkbox' ? (
        <OneDimension info={info} />
      ) : type === 'dropdown' ? (
        <OneDimension info={info} />
      ) : type === 'file-upload' ? (
        <File info={info} />
      ) : type === 'multiple-choice-grid' ? (
        <TwoDimension info={info} />
      ) : type === 'tick-box-grid' ? (
        <TwoDimension info={info} />
      ) : type === 'linear-scale' ? (
        <LinearScale info={info} />
      ) : type === 'date' ? (
        <Text text="Date, month, year" type={type} />
      ) : type === 'time' ? (
        <Text text="Time" type={type} />
      ) : null}
    </div>
  );
};

Body.propTypes = {
  info: PropTypes.arrayOf.isRequired,
};

export default connect()(Body);
