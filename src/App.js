import React from 'react';

function App() {
  const styles = {
    app: {
      minHeight: '100vh',
      background: '#0a0a0b',
      color: 'white',
      padding: '20px',
      fontFamily: 'Arial, sans-serif'
    },
    container: {
      maxWidth: '600px',
      margin: '0 auto',
      textAlign: 'center'
    },
    header: {
      background: 'linear-gradient(135deg, #18a0fb, #7b68ee)',
      padding: '30px',
      borderRadius: '20px',
      marginBottom: '30px'
    },
    title: {
      fontSize: '3rem',
      margin: '0 0 10px 0',
      textShadow: '0 2px 4px rgba(0,0,0,0.3)'
    },
    subtitle: {
      fontSize: '1.2rem',
      margin: 0,
      opacity: 0.9
    },
    content: {
      background: 'rgba(255,255,255,0.1)',
      padding: '25px',
      borderRadius: '15px',
      marginBottom: '25px',
      border: '1px solid rgba(255,255,255,0.2)'
    },
    contentTitle: {
      fontSize: '2rem',
      margin: '0 0 15px 0',
      color: '#18a0fb'
    },
    contentText: {
      fontSize: '1.1rem',
      margin: '0 0 25px 0',
      opacity: 0.8
    },
    features: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
      gap: '15px',
      marginBottom: '30px'},
    feature: {
      background: 'rgba(24,160,251,0.2)',
      padding: '20px',
      borderRadius: '12px',
      border: '2px solid rgba(24,160,251,0.3)'
    },
    featureIcon: {
      fontSize: '2rem',
      marginBottom: '10px'
    },
    featureTitle: {
      margin: '0',
      color: '#18a0fb',
      fontSize: '1rem'
    },
    button: {
      background: 'linear-gradient(135deg, #18a0fb, #1e40af)',
      color: 'white',
      border: 'none',
      padding: '15px 30px',
      fontSize: '1.2rem',
      fontWeight: '600',
      borderRadius: '12px',
      cursor: 'pointer',
      boxShadow: '0 4px 15px rgba(24,160,251,0.3)',
      width: '100%',
      maxWidth: '300px'
    },
    status: {
      marginTop: '30px',
      padding: '15px',
      background: 'rgba(0,255,0,0.1)',
      border: '1px solid rgba(0,255,0,0.3)',
      borderRadius: '10px',
      fontSize: '0.9rem'
    }
  };

  return (
    <div style={styles.app}>
      <div style={styles.container}>
        <div style={styles.header}>
          <h1 style={styles.title}>🧠 BlockBrain</h1>
          <p style={styles.subtitle}>Quiz Game on Farcaster</p>
        </div>

        <div style={styles.content}>
          <h2 style={styles.contentTitle}>Test Your Knowledge</h2>
          <p style={styles.contentText}>Daily crypto & general knowledge quizzes</p>
        </div>

        <div style={styles.features}>
          <div style={styles.feature}>
            <div style={styles.featureIcon}>📅</div>
            <h3 style={styles.featureTitle}>Daily Quests</h3>
          </div>
          
          <div style={styles.feature}>
            <div style={styles.featureIcon}>🏆</div>
            <h3 style={styles.featureTitle}>Leaderboard</h3>
          </div>
          
          <div style={styles.feature}>
            <div style={styles.featureIcon}>⚡</div>
            <h3 style={styles.featureTitle}>Earn XP</h3>
          </div>
        </div>

        <button style={styles.button}>🔗 Connect Farcaster</button>

        <div style={styles.status}>✅ BlockBrain Quiz Ready!</div>
      </div>
    </div>
  );
}
