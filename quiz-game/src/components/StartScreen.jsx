import Button from "./Button";

const StartScreen = ({ startQuiz }) => {
  return (
    <div>
      <h1>Javascript Quiz</h1>
      <Button
        label="Rozpocznij quiz"
        onClick={startQuiz}
        style={{ backgroundColor: "blue", color: "#fff" }}
      />
    </div>
  );
};

export default StartScreen;
