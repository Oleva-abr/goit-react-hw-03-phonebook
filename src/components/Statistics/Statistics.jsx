import React from 'react';
import PropTypes from 'prop-types';
const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
  <>
    <h3>Good:{good}</h3>
    <h3>Bad: {bad}</h3>
    <h3>Neutral:{neutral}</h3>
    <h3>Total {total}</h3>
    <h3>Positive Feedback: {positivePercentage}%</h3>
  </>
);

Statistics.propTypes = {
  good: PropTypes.number,
  bad: PropTypes.number,
  neutral: PropTypes.number,
  total: PropTypes.number,
  positivePercentage: PropTypes.number,
};
export default Statistics;
