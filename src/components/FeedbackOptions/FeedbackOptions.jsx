import React from 'react';
import styles from './feedback.module.css';
import PropTypes from 'prop-types';

const FeedbackOptions = ({ onLeaveFeedback }) => (
  <>
    <button
      className={styles.button}
      type="button"
      name="good"
      onClick={onLeaveFeedback}
    >
      Good
    </button>
    <button
      className={styles.button}
      type="button"
      name="neutral"
      onClick={onLeaveFeedback}
    >
      Neutral
    </button>
    <button
      className={styles.button}
      type="button"
      name="bad"
      onClick={onLeaveFeedback}
    >
      Bad
    </button>
  </>
);

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
};
export default FeedbackOptions;
