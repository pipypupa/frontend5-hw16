import { useReducer } from "react";

const initialState = {
  good: 0,
  neutral: 0,
  bad: 0,
};

function feedbackReducer(state, action) {
  switch (action.type) {
    case "good":
    case "neutral":
    case "bad":
      return {
        ...state,
        [action.type]: state[action.type] + 1,
      };

    default:
      return state;
  }
}

export const useFeedback = () => {
  const [state, dispatch] = useReducer(feedbackReducer, initialState);

  const leaveFeedback = (type) => {
    dispatch({ type });
  };

  const total = state.good + state.neutral + state.bad;

  const positivePercentage =
    total === 0 ? 0 : Math.round((state.good / total) * 100);

  return {
    feedback: state,
    leaveFeedback,
    total,
    positivePercentage,
  };
};
