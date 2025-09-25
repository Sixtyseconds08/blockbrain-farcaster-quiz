import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="header">
          <div className="logo">
            <h1>🧠 BlockBrain</h1>
            <p>Quiz Game on Farcaster</p>
          </div>
        </header>
        
        <main className="main">
          <div className="hero">
            <h2>Test Your Knowledge</h2>
            <p>Daily crypto & general knowledge quizzes</p>
          </div>
          
          <div className="features">
            <div className="feature">
              <span>📅</span>
              <h3>Daily Quests</h3>
            </div>
            <div className="feature">
              <span>🏆</span>
              <h3>Leaderboard</h3>
            </div>
            <div className="feature">
              <span>⚡</span>
              <h3>Earn XP</h3>
            </div>
          </div>
          
          <div className="cta">
            <button className="connect-btn">
              Connect Farcaster
            </button>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
