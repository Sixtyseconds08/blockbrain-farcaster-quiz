import React from 'react';
import './App.css';

function App() {
  console.log('BlockBrain App Loading...'); // Debug log
  
  return (
    <div className="App">
      <div className="container">
        {/* Emergency visible content */}
        <div style={{
          background: '#18a0fb',
          color: 'white',
          padding: '2rem',
          textAlign: 'center',
          borderRadius: '12px',
          margin: '2rem 0'
        }}>
          <h1 style={{fontSize: '2rem', margin: '0 0 1rem 0'}}>
            🧠 BlockBrain
          </h1>
          <p style={{fontSize: '1.2rem', margin: '0'}}>
            Quiz Game on Farcaster
          </p>
        </div>
        
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
