import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './Card.styles.css';
import Header from '../Header/Header.component';
import Body from '../Body/Body.component';
import Footer from '../Footer/Footer.component';

const Card = ({ info }) => {
  const { isActive } = info;
  return (
    <div
      className="question"
      style={{ borderLeft: isActive ? '10px solid #673ab7' : '0' }}
    >
      <Header info={info} />
      <Body info={info} />
      <Footer info={info} />
    </div>
  );
};

Card.propTypes = {
  info: PropTypes.arrayOf.isRequired,
};

export default connect()(Card);
