import React, { useState } from 'react';
import FeedbackSection from './components/FeedbackSection';

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleClickOnBtn = {
    good: () => {
      setGood(good => good + 1);
    },

    neutral: () => {
      setNeutral(neutral => neutral + 1);
    },

    bad: () => {
      setBad(bad => bad + 1);
    },
  };

  const countTotalFeedback = () => good + neutral + bad;

  const countPositiveFeedbackPercentage = () =>
    ((good / countTotalFeedback()) * 100).toFixed(2);

  return (
    <div>
      <FeedbackSection
        handleClickOnBtn={handleClickOnBtn}
        countTotalFeedback={countTotalFeedback}
        countPositiveFeedbackPercentage={countPositiveFeedbackPercentage}
        good={good}
        neutral={neutral}
        bad={bad}
      />
    </div>
  );
};

export default App;
