import React, { PropsWithChildren, useState } from "react";
import { createContext } from "react";
import { questionsList } from "../questions";

export const QuizContext = createContext({});
const QuizProvider = ({ children }: PropsWithChildren) => {
  const [questionIndex, setQuestionIndex] = useState(0);
  const question = questionsList[questionIndex];
  const isFinished = questionIndex > questionsList.length - 2;
  const [selectedOptions, setSelectedOptions] = useState<string | undefined>();
  const [score, setScore] = useState(0);

  const onQuestionChange = (type: "forward" | "backward") => {
    if (type == "forward") {
      if (questionIndex < 4) {
        setQuestionIndex((questionIndex) => questionIndex + 1);
        if (selectedOptions == question.correctAnswer) {
          setScore((score) => (score > 5 ? 5 : score + 1));
        }
      }
    }
    if (type == "backward") {
      if (questionIndex > 0) {
        setQuestionIndex((questionIndex) => questionIndex - 1);
      }
    }
  };
  const restart = () => {
    setScore(0);
    setQuestionIndex(0);
  };
  return (
    <QuizContext.Provider
      value={{
        questionIndex,
        question,
        onQuestionChange,
        selectedOptions,
        setSelectedOptions,
        score,
        isFinished,
        restart,
      }}
    >
      {children}
    </QuizContext.Provider>
  );
};

export default QuizProvider;
