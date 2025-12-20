import { useEffect, useState } from "react";
import styles from "./AllQuotes.module.css";
import facade from "../../apiFacade";
export default function AllQuotes() {
  const [quotes, setQuotes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    //Fetch all qoutes from backend
    facade
      .fetchData("quotes")
      .then((data) => {
        console.log("Data from api: ", data);
        if (!Array.isArray(data)) {
          setError("Unexpected response from server.");
          setQuotes([]);
          setLoading(false);
          return;
        }
        setQuotes(data);
        setLoading(false);
      })

      .catch((err) => {
        //Handle errors from the request
        console.error("Fetct quotes failed: ", err);
        setError("Could not load quotes");
        setQuotes([]);
        setLoading(false);
      });
  }, []);

  return (
    <>
      <div className={styles.container}>
        <h1 className={styles.title}>All Quotes</h1>

        <p className={styles.subtitle}>Browse all quotes in the system</p>
        <div className={styles.divider}></div>
        {loading && <p>Loading quotes...</p>}
        {error && <p>{error}</p>}

        {!loading && !error && (
          <div className={styles.grid}>
            {quotes.map((quote) => (
              <div key={quote.id} className={styles.card}>
                <p className={styles.quote}>“{quote.quote}”</p>
                <div className={styles.divider}></div>
                <p className={styles.author}>{quote.author}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}
