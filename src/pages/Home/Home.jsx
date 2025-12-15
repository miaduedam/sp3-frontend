import React from "react";
import "./Home.module.css";

function Home() {
  return (
    <div style={{ padding: "2rem" }}>
      <div style={{ marginBottom: "1rem" }}>
        <h1>Welcome to Who Said It!</h1>
      </div>

      <div>
        <p>
          Try and guess who said what
        </p>
        <p>
           Track your score under the "My Score" section and see how well you know your quotes!
        </p>
      </div>
    </div>
  );
}

export default Home;
