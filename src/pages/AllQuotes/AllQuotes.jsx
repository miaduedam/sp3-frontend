import { useEffect, useState } from "react";
import styles from "./AllQuotes.module.css";

export default function AllQuotes() {
  const [quotes, setQuotes] = useState([]);

  useEffect(() => {
    // Fetch quotes from an API
    fetch("http://localhost:7070/api/quotes")
      .then((response) => response.json())
      .then((data) => setQuotes(data))
      .catch((error) => console.error("Error fetching quotes:", error));
  }, []);

  return (
    <>
      <div className={styles.container}>
        <h1 className={styles.title}>All Quotes</h1>

        <p className={styles.subtitle}>Browse all quotes in the system</p>
        <div className={styles.divider}></div>
        <div className={styles.grid}>
          {quotes.map((quote) => (
            <div key={quote.id} className={styles.card}>
              <p className={styles.quote}>“{quote.quote}”</p>
              <p className={styles.author}>{quote.author}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
