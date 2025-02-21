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
          <div key={index} style={{ display: "flex", flexDirection: "column" }}>
            <p>
              Pytanie {index + 1}: {question.text}
            </p>
            <p
              style={{
                color: questionAnswers[index].isCorrect ? "#00ff00" : "#FF9494",
              }}
            >
              <b style={{ color: "#000" }}>Twoja odpowiedź:</b>{" "}
              {questionAnswers[index].text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuizSummary;
