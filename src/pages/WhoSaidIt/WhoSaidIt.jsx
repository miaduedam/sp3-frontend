import { useEffect, useState } from "react";
import styles from "./WhoSaidIt.module.css";

export default function QuoteGame() {
  const [quotes, setQuotes] = useState([]);
  const [current, setCurrent] = useState(null);
  const [options, setOptions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [score, setScore] = useState(0);
  const [lives, setLives] = useState(3);
  const [highScores, setHighScores] = useState([]);

  useEffect(() => {
    fetch("https://whosaidit.pigeonnest.dk/api/quotes")
      .then((res) => res.json())
      .then((data) => {
        setQuotes(data);
        setLoading(false);
        nextRound(data);
        });
    }, []);

  function nextRound(allQuotes = quotes) {
    if (!allQuotes.length) return;

    const quote = allQuotes[Math.floor(Math.random() * allQuotes.length)];
    const wrongAuthors = allQuotes
      .map((q) => q.author)
      .filter((a) => a !== quote.author);
    const wrong = wrongAuthors[Math.floor(Math.random() * wrongAuthors.length)];
    const shuffled = [quote.author, wrong].sort(() => Math.random() - 0.5);

    setCurrent(quote);
    setOptions(shuffled);
  }

 function guess(author) {
  const isCorrect = author === current.author;
  const newScore = isCorrect ? score + 1 : score;
  const newLives = isCorrect ? lives : lives - 1;

  if (newLives <= 0) {
    // Game over, save score if > 0
    if (score > 0) setHighScores(prev => [score, ...prev]);
    setScore(0);
    setLives(3);
  } else {
    setScore(newScore);
    setLives(newLives);
  }

  // Only go to next round if game is not over
  if (newLives > 0) {
    nextRound();
  }
}


  function resetRun() {
    if (score > 0) setHighScores((prev) => [score, ...prev]);
    setScore(0);
    setLives(3);
    nextRound();
  }

  function resetHighScores() {
    setHighScores([]);
  }

  if (loading) return <p>Loading...</p>;
  if (!current) return null;

return (
  <div className={styles.pageContainer}>
    {/* Hele spil området */}
    <div className={styles.gameArea}>
      {/* Quote boksen */}
      <div className={styles.quoteBox}>{current.quote}</div>

      {/* det her er gætteknapperne */}
      <div className={styles.options}>
        {options.map((o) => (
          <button key={o} onClick={() => guess(o)}>
            {o}
          </button>
        ))}
      </div>

      {/* boks til point og liv tællerne */}
      <div className={styles.pointCounter}>
        <p>Current Score: {score}</p>
        <p>Lives: {lives}</p>
      </div>

      {/* genstart knappen til spillet */}
      <button className={styles.resetRun} onClick={resetRun}>
        Reset Current Run
      </button>
    </div>

    {/*  highscore panel */}
    <div className={styles.highScores}>
      <h3>High Scores</h3>
      {highScores.length === 0 ? (
        <p>No high scores yet</p>
      ) : (
        <ul>
          {highScores.map((s, i) => (
            <li key={i}>{s}</li>
          ))}
        </ul>
      )}
      <button onClick={resetHighScores}>Reset High Scores</button>
    </div>
  </div>
);
}