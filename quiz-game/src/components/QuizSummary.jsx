import { QUESTIONS } from "../assets/quizQuestions";

const QuizSummary = ({ questionAnswers }) => {
  const correctAnswers = questionAnswers.filter(
    (answer) => answer.isCorrect === true
  ).length;

  return (
    <div>
      <div>
        {correctAnswers >= 8 ? (
          <h1>Gratulacja, quiz zaliczony</h1>
        ) : (
          <h1>Niestety, quiz niezaliczony</h1>
        )}
      </div>
      <div>
        <h2></h2>Twój wynik to {correctAnswers}0.00% ({correctAnswers} z 10
        poprawnych odpowiedzi)
      </div>
      <div>
        {QUESTIONS.map((question, index) => (
          <p key={index}>{question.text}</p>
        ))}
      </div>
    </div>
  );
};

export default QuizSummary;
