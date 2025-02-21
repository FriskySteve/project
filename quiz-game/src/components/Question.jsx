import { useState } from "react";
import Button from "./Button";
import QuizSummary from "./QuizSummary";
import { QUESTIONS } from "../assets/quizQuestions";

const Question = () => {
  const [questions] = useState(QUESTIONS);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [questionAnswers, setQuestionAnswers] = useState([]);

  function handleAnswer(questionAnswer) {
    setQuestionAnswers((prev) => [...prev, questionAnswer]);
    setCurrentQuestionIndex(currentQuestionIndex + 1);
    console.log(questionAnswers);
  }

  if (currentQuestionIndex === questions.length) {
    return <QuizSummary questionAnswers={questionAnswers} />;
  } else {
    return (
      <div>
        <h2 style={{ color: "#87cefa" }}>
          Pytanie {currentQuestionIndex + 1}
          {": "}
          {questions[currentQuestionIndex].text}
        </h2>
        <ul style={{ gap: 10 }}>
          {questions[currentQuestionIndex].answers.map((answer, index) => (
            <li key={index}>
              <Button
                label={answer.text}
                onClick={() => handleAnswer(answer)}
                style={{ backgroundColor: "#000", color: "#fff" }}
              />
            </li>
          ))}
        </ul>
      </div>
    );
  }
};

export default Question;
