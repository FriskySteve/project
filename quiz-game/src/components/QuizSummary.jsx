import { QUESTIONS } from "../assets/quizQuestions";
import Button from "./Button";

const QuizSummary = ({ questionAnswers }) => {
  const correctAnswers = questionAnswers.filter(
    (answer) => answer.isCorrect === true
  ).length;

  return (
    <div>
      <div>
        {correctAnswers >= 8 ? (
          <h1 style={{ color: "#00ff00" }}>Gratulacja, quiz zaliczony</h1>
        ) : (
          <h1 style={{ color: "#FF9494" }}>Niestety, quiz niezaliczony</h1>
        )}
      </div>
      <div>
        <h2>
          Twój wynik to{" "}
          <b style={{ color: correctAnswers >= 8 ? "#00ff00" : "#FF9494" }}>
            {(correctAnswers / QUESTIONS.length) * 100}%
          </b>{" "}
          ({correctAnswers} z 10 poprawnych odpowiedzi){" "}
        </h2>
      </div>
      <div>
        {QUESTIONS.map((question, index) => (
          <div
            key={index}
            style={{
              display: "flex",
              flexDirection: "column",
              textAlign: "left",
            }}
          >
            <p style={{ color: "#87cefa" }}>
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
        <Button
          color="#006400"
          label={"Powrót do startu"}
          onClick={() => window.location.reload()}
        />
      </div>
    </div>
  );
};

export default QuizSummary;
