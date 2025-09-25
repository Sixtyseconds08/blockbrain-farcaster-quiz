(import React from 'react';

function App() {
  return (
    <div 
      style={{
        minHeight: '100vh',
        backgroundColor: '#0a0a0b',
        color: 'white',
        fontFamily: 'Arial, sans-serif',
        padding: '20px'
      }}
    >
      <div 
        style={{
          maxWidth: '600px',
          margin: '0 auto',
          textAlign: 'center'
        }}
      >
        {/* Header Section */}
        <div 
          style={{
            background: 'linear-gradient(135deg, #18a0fb, #7b68ee)',
            padding: '40px 20px',
            borderRadius: '20px',
            marginBottom: '30px',
            boxShadow: '0 8px 32px rgba(24, 160, 251, 0.3)'
          }}
        >
          <h1 
            style={{
              fontSize: '3rem',
              margin: '0 0 10px 0',
              fontWeight: 'bold'
            }}
          >
            🧠 BlockBrain
          </h1>
          <p 
            style={{
              fontSize: '1.2rem',
              margin: '0',
              opacity: '0.9'
            }}
          >
            Quiz Game on Farcaster
          </p>
        </div>

        {/* Main Content */}
        <div 
          style={{
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
            padding: '30px 20px',
            borderRadius: '15px',
            marginBottom: '30px',
            border: '1px solid rgba(255, 255, 255, 0.2)'
          }}
        >
          <h2 
            style={{
              fontSize: '2rem',
              margin: '0 0 15px 0',
              color: '#18a0fb'
            }}
          >
           Test Your Knowledge
          </h2>
          <p 
            style={{
              fontSize: '1.1rem',
              margin: '0',
              opacity: '0.8'
            }}
          >
            Daily crypto & general knowledge quizzes
          </p>
        </div>

        {/* Features Grid */}
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
            gap: '15px',
            marginBottom: '40px'
          }}
        >
          <div 
            style={{
              backgroundColor: 'rgba(24, 160, 251, 0.2)',
              padding: '25px 15px',
              borderRadius: '12px',
              border: '2px solid rgba(24, 160, 251, 0.3)'
            }}
          >
            <div style={{ fontSize: '2.5rem', marginBottom: '10px' }}>📅</div>
            <h3 
              style={{
                margin: '0',
                color: '#18a0fb',
                fontSize: '1rem',
                fontWeight: '600'
              }}
            >
              Daily Quests
            </h3>
          </div>
          
          <div 
            style={{
              backgroundColor: 'rgba(24, 160, 251, 0.2)',
              padding: '25px 15px',
              borderRadius: '12px',
              border: '2px solid rgba(24, 160, 251, 0.3)'
            }}
          >
            <div style={{ fontSize: '2.5rem', marginBottom: '10px' }}>🏆</div>
            <h3 
              style={{
                margin: '0',
                color: '#18a0fb',
                fontSize: '1rem',
                fontWeight: '600'
              }}
            >
              Leaderboard
            </h3>
          </div>
          
          <div 
            style={{
                            backgroundColor: 'rgba(24, 160, 251, 0.2)',
              padding: '25px 15px',
              borderRadius: '12px',
              border: '2px solid rgba(24, 160, 251, 0.3)'
            }}
          >
            <div style={{ fontSize: '2.5rem', marginBottom: '10px' }}>⚡</div>
            <h3 
              style={{
                margin: '0',
                color: '#18a0fb',
                fontSize: '1rem',
                fontWeight: '600'
              }}
            >
              Earn XP
            </h3>
          </div>
        </div>

        {/* CTA Button */}
        <button 
          style={{
            background: 'linear-gradient(135deg, #18a0fb, #1e40af)',
            color: 'white',
            border: 'none',
            padding: '15px 40px',
            fontSize: '1.2rem',
            fontWeight: '600',
            borderRadius: '12px',
            cursor: 'pointer',
            boxShadow: '0 4px 15px rgba(24, 160, 251, 0.4)',
            width: '100%',
            maxWidth: '300px',
            marginBottom: '30px'
          }}
        >
          🔗 Connect Farcaster
        </button>

        {/* Status */}
        <div 
          style={{
            backgroundColor: 'rgba(34, 197, 94, 0.2)',
            border: '1px solid rgba(34, 197, 94, 0.3)',
            color: '#22c55e',
            padding: '15px',
            borderRadius: '10px',
            fontSize: '0.95rem',
            fontWeight: '500'
          }}
        >
          ✅ BlockBrain Quiz Ready to Play!
        </div>
      </div>
    </div>
  );
}

export default App;
