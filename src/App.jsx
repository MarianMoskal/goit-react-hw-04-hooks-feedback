import { useState } from "react";
import FeedbackOptions from "./components/FeedbackOptions/FeedbackOptions";
import Section from "./components/Section/Section";
import Statistics from "./components/Statistics/Statistics";

function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const names = ["good", "neutral", "bad"];

  function onLeaveFeedback(e) {
    switch (e.target.id) {
      case "good":
        return setGood(good + 1);

      case "neutral":
        return setNeutral(neutral + 1);

      case "bad":
        return setBad(bad + 1);

      default:
        return;
    }
  }

  function countTotal() {
    return good + neutral + bad;
  }

  function countPositivePercentage() {
    return Number(Math.round((good / countTotal()) * 100));
  }

  return (
    <Section title="Please leave feedback">
      <FeedbackOptions names={names} eventHandler={onLeaveFeedback} />
      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
        total={countTotal()}
        positivePercentage={countPositivePercentage()}
      />
    </Section>
  );
}

export default App;
