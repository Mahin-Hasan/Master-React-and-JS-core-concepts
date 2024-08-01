import { useState } from "react";
import './quiz.css'


const questions = [
  {
    question: "Capital of France ?",
    options: ["Paris", "Berlin", "Madrid", "Rome"],
    correctAnswer: "Paris",
  },
  {
    question: "Which planet is known as the red planet ?",
    options: ["Mars", "Venus", "Jupiter", "Saturn"],
    correctAnswer: "Mars",
  },
  {
    question: "Most purchased smartphones ?",
    options: ["Apple", "Samsung", "Xiaomi", "Oppo"],
    correctAnswer: "Apple",
  },
  {
    question: "Largest ocean on Earth ?",
    options: ["Atlantic", "Indian", "Arctic", "Pacific"],
    correctAnswer: "Pacific",
  },
  {
    question: "Who wrote 'To Kill a Mockingbird' ?",
    options: [
      "Harper Lee",
      "Mark Twain",
      "Ernest Hemingway",
      "F. Scott Fitzgerald",
    ],
    correctAnswer: "Harper Lee",
  },
  {
    question: "Fastest land animal ?",
    options: ["Cheetah", "Lion", "Horse", "Leopard"],
    correctAnswer: "Cheetah",
  },
  {
    question: "What is the chemical symbol for gold ?",
    options: ["Au", "Ag", "Pb", "Fe"],
    correctAnswer: "Au",
  },
  {
    question: "Largest planet in our solar system ?",
    options: ["Earth", "Jupiter", "Saturn", "Neptune"],
    correctAnswer: "Jupiter",
  },
];

//1. current question 2. score 3. selected option. 4. show result

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState(
    new Array(questions.length).fill(null)
  );
  const [showResult, setShowResult] = useState(false);
// console.log(selectedOptions,score);
  function handleSelectedOption(getOptionItem){
    // console.log(getOptionItem);
    const updatedSelectedOptions = [...selectedOptions];
    updatedSelectedOptions[currentQuestion] = getOptionItem;
    setSelectedOptions(updatedSelectedOptions)
  }

  function handlePrevQuestion() {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  }
  function handleNextQuestion() {
    if (
      selectedOptions[currentQuestion] ===
      questions[currentQuestion].correctAnswer
    ) {
      setScore(score + 1);
    }

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResult(true);
    }
  }
  function handleRestartQuiz() {
    setCurrentQuestion(0);
    setScore(0);
    setSelectedOptions(new Array(questions.length).fill(null));
    setShowResult(false);
  }

  return (
    <div className="quiz">
      <h1>Quiz App</h1>
      {!showResult ? (
        <div className="options-wrapper">
          <h2>Question {currentQuestion + 1}</h2>
          <p>{questions[currentQuestion].question}</p>
          <div className="options">
            {questions[currentQuestion].options.map((optionItem, idx) => (
              <button
                className={`option ${
                  selectedOptions[currentQuestion] === optionItem
                    ? "selected"
                    : ""
                }`}
                key={idx}
                onClick={()=>handleSelectedOption(optionItem)}
              >
                {optionItem}
              </button>
            ))}
          </div>
          <div className="button-container">
            <button
              onClick={handlePrevQuestion}
              disabled={currentQuestion === 0}
              className="prev-btn"
            >
              Prev
            </button>
            <button onClick={handleNextQuestion} className="next-btn">
              {currentQuestion < questions.length - 1 ? "Next" : "Submit"}
            </button>
          </div>
        </div>
      ) : (
        <div className="show-result-wrapper">
          <h2>quiz completed</h2>
          <p>Your Score: {score}</p>
          <button onClick={handleRestartQuiz} className="restart-btn">
            Restart Quiz
          </button>
        </div>
      )}
    </div>
  );
};

export default Quiz;
