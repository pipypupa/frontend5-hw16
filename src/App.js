import Section from "./components/Section";
import FeedbackOptions from "./components/FeedbackOptions";
import Statistics from "./components/Statistics";
import Notification from "./components/Notification";

import { useFeedback } from "./hooks/useFeedback";
import { useScrollTo } from "./hooks/useScrollTo";
import { useTheme } from "./hooks/useTheme";

import "./App.css";

function App() {
  const { feedback, leaveFeedback, total, positivePercentage } = useFeedback();
  const { ref, scrollToRef } = useScrollTo();
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={`container ${theme}`}>
      <div style={{ marginBottom: "20px" }}>
        <button onClick={toggleTheme}>Змінити тему</button>
        <button onClick={scrollToRef} style={{ marginLeft: "10px" }}>
          Перейти до статистики
        </button>
      </div>

      <Section title="Залиште свій відгук">
        <FeedbackOptions
          options={Object.keys(feedback)}
          onLeaveFeedback={leaveFeedback}
        />
      </Section>

      <Section title="Статистика">
        <div ref={ref}>
          {total > 0 ? (
            <Statistics
              good={feedback.good}
              neutral={feedback.neutral}
              bad={feedback.bad}
              total={total}
              positivePercentage={positivePercentage}
            />
          ) : (
            <Notification message="Немає відгуків" />
          )}
        </div>
      </Section>
    </div>
  );
}

export default App;
