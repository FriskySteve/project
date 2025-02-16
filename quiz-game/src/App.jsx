import { useState } from "react";
import "./App.css";
import StartScreen from "./components/StartScreen";
import Question from "./components/Question";

function App() {
  const [quizStarted, setQuizStarted] = useState(false);

  if (!quizStarted) {
    return <StartScreen startQuiz={() => setQuizStarted(true)} />;
  } else {
    return <Question />;
  }
}

export default App;
