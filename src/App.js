import React, { useState, useEffect } from 'react';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isAuthLoading, setIsAuthLoading] = useState(true);
  const [authError, setAuthError] = useState(null);
  const [user, setUser] = useState(null);
  const [gameState, setGameState] = useState('menu');
  const [selectedCharacter, setSelectedCharacter] = useState(null);
  const [currentLevel, setCurrentLevel] = useState(1);
  const [totalXP, setTotalXP] = useState(0);
  const [dailyCheckedIn, setDailyCheckedIn] = useState(false);

  // Character Data
  const characters = [
    {
      id: 'bitcoin',
      name: 'Bitcoin Bird',
      icon: '\uD83E\uDD19',
      power: 'Heavy Impact',
      description: 'Massive damage to traditional finance',
      color: '#f7931a'
    },
    {
      id: 'ethereum', 
      name: 'Ethereum Bird',
      icon: '\u26A1',
      power: 'Smart Contracts',
      description: 'Chain explosions and combo attacks',
      color: '#627eea'
    },
    {
      id: 'dogecoin',
      name: 'Dogecoin Bird', 
      icon: '\uD83D\uDC15',
      power: 'Community Boost',
      description: 'Multiple hits with meme power',
      color: '#c2a633'
    }
  ];

  const leaderboard = [
    { rank: 1, name: 'CryptoPro', xp: 15420, character: '\uD83E\uDD19', fid: 12345 },
    { rank: 2, name: 'DeFiMaster', xp: 14830, character: '\u26A1', fid: 23456 },
    { rank: 3, name: 'DogeToMoon', xp: 13560, character: '\uD83D\uDC15', fid: 34567 },
    { rank: 4, name: 'BlockchainBird', xp: 12890, character: '\uD83E\uDD19', fid: 45678 },
    { rank: 5, name: 'EthereumEagle', xp: 11750, character: '\u26A1', fid: 56789 }
  ];

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const savedAuth = localStorage.getItem('cryptobirds_auth');
        if (savedAuth) {
          const authData = JSON.parse(savedAuth);
          setUser(authData.user);
          setTotalXP(authData.totalXP || 0);
          setCurrentLevel(authData.currentLevel || 1);
          setDailyCheckedIn(authData.dailyCheckedIn || false);
          setIsAuthenticated(true);
        }
      } catch (error) {
        console.error('Auth check failed:', error);
        localStorage.removeItem('cryptobirds_auth');
      } finally {
        setIsAuthLoading(false);
      }
    };

    checkAuth();
  }, []);

  const generateNonce = () => {
    return Array.from(crypto.getRandomValues(new Uint8Array(32)), 
      byte => byte.toString(16).padStart(2, '0')).join('');
  };

  const handleFarcasterLogin = async () => {
    try {
      setIsAuthLoading(true);
      setAuthError(null);
      
      // Simulate Farcaster auth for development
      const mockFid = Math.floor(Math.random() * 99999) + 1000;
      const userData = {
        fid: mockFid,
        username: `cryptobird${mockFid}`,
        displayName: `CryptoBird Player ${mockFid}`,
        pfpUrl: `https://api.dicebear.com/7.x/avataaars/svg?seed=${mockFid}`,
        connectedAt: new Date().toISOString()
      };
      
      const authData = {
        user: userData,
        totalXP: 0,
        currentLevel: 1,
        dailyCheckedIn: false,
        authenticatedAt: new Date().toISOString()
      };
      
      localStorage.setItem('cryptobirds_auth', JSON.stringify(authData));
      
      setUser(userData);
      setIsAuthenticated(true);
      setTotalXP(0);
      setCurrentLevel(1);
      
    } catch (error) {
      console.error('Login failed:', error);
      setAuthError('Failed to connect. Please try again.');
    } finally {
      setIsAuthLoading(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('cryptobirds_auth');
    setIsAuthenticated(false);
    setUser(null);
    setTotalXP(0);
    setCurrentLevel(1);
    setDailyCheckedIn(false);
    setGameState('menu');
    setSelectedCharacter(null);
  };

  const saveProgress = (updates) => {
    try {
      const currentAuth = JSON.parse(localStorage.getItem('cryptobirds_auth') || '{}');
      const updatedAuth = { ...currentAuth, ...updates };
      localStorage.setItem('cryptobirds_auth', JSON.stringify(updatedAuth));
    } catch (error) {
      console.error('Failed to save progress:', error);
    }
  };

  const handleDailyCheckIn = () => {
    if (!dailyCheckedIn) {
      const newXP = totalXP + 100;
      setTotalXP(newXP);
      setDailyCheckedIn(true);
      saveProgress({ totalXP: newXP, dailyCheckedIn: true });
      alert('Daily Check-in Complete! +100 XP!');
    }
  };

  const playLevel = () => {
    const xpGained = Math.floor(Math.random() * 200) + 50;
    const newXP = totalXP + xpGained;
    const newLevel = currentLevel + 1;
    
    setTotalXP(newXP);
    setCurrentLevel(newLevel);
    saveProgress({ totalXP: newXP, currentLevel: newLevel });
    
    alert(`Level Complete! +${xpGained} XP gained!`);
  };

  const startGame = () => {
    if (selectedCharacter) {
      setGameState('playing');
    }
  };

  // Styles
  const styles = {
    app: {
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #0a0a0b 0%, #1a1a2e 50%, #16213e 100%)',
      color: 'white',
      fontFamily: 'Arial, sans-serif',
      padding: '10px'
    },
    container: {
      maxWidth: '400px',
      margin: '0 auto',
      textAlign: 'center'
    },
    authContainer: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100vh',
      padding: '20px'
    },
    authCard: {
      background: 'rgba(255,255,255,0.1)',
      backdropFilter: 'blur(20px)',
      border: '1px solid rgba(255,255,255,0.2)',
      borderRadius: '20px',
      padding: '40px 30px',
      textAlign: 'center',
      maxWidth: '400px',
      width: '100%',
      margin: '20px'
    },
    header: {
      background: 'linear-gradient(135deg, #f7931a, #627eea)',
      padding: '20px',
      borderRadius: '20px',
      marginBottom: '20px',
      boxShadow: '0 8px 32px rgba(247, 147, 26, 0.3)'
    },
    gameCard: {
      background: 'rgba(255,255,255,0.1)',
      backdropFilter: 'blur(10px)',
      border: '1px solid rgba(255,255,255,0.2)',
      borderRadius: '15px',
      padding: '20px',
      marginBottom: '20px'
    },
    button: {
      background: 'linear-gradient(135deg, #f7931a, #627eea)',
      color: 'white',
      border: 'none',
      padding: '12px 25px',
      fontSize: '1rem',
      fontWeight: '600',
      borderRadius: '10px',
      cursor: 'pointer',
      margin: '5px',
      minWidth: '120px',
      transition: 'all 0.2s ease',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '8px'
    },
    primaryButton: {
      background: 'linear-gradient(135deg, #18a0fb, #1e40af)',
      padding: '15px 30px',
      fontSize: '1.1rem',
      width: '100%',
      maxWidth: '300px'
    },
    characterCard: {
      background: 'rgba(255,255,255,0.05)',
      border: '2px solid transparent',
      borderRadius: '12px',
      padding: '15px',
      margin: '10px 0',
      cursor: 'pointer',
      transition: 'all 0.3s ease'
    },
    selectedCharacter: {
      borderColor: '#f7931a',
      background: 'rgba(247, 147, 26, 0.2)'
    },
    userInfo: {
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
      background: 'rgba(255,255,255,0.1)',
      padding: '10px 15px',
      borderRadius: '10px',
      marginBottom: '20px'
    },
    avatar: {
      width: '40px',
      height: '40px',
      borderRadius: '50%',
      border: '2px solid #f7931a'
    },
    stats: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '10px',
      marginBottom: '20px'
    },
    statItem: {
      background: 'rgba(98, 126, 234, 0.2)',
      padding: '15px 10px',
      borderRadius: '10px',
      border: '1px solid rgba(98, 126, 234, 0.3)'
    },
    gameArea: {
      background: 'rgba(0,0,0,0.3)',
      borderRadius: '15px',
      padding: '30px 20px',
      margin: '20px 0',
      minHeight: '300px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      border: '2px dashed rgba(255,255,255,0.3)'
    },
    leaderboardItem: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '10px 15px',
      background: 'rgba(255,255,255,0.05)',
      border: '1px solid rgba(255,255,255,0.1)',
      borderRadius: '8px',
      marginBottom: '8px'
    },
    errorMessage: {
      background: 'rgba(255, 107, 107, 0.2)',
      border: '1px solid rgba(255, 107, 107, 0.5)',
      color: '#ff6b6b',
      padding: '15px',
      borderRadius: '10px',
      margin: '15px 0',
      fontSize: '0.9rem'
    }
  };

  // Loading Screen
  if (isAuthLoading) {
    return (
      <div style={styles.app}>
        <div style={styles.authContainer}>
          <div style={styles.authCard}>
            <div style={{fontSize: '3rem', marginBottom: '20px'}}>
              {'\uD83C\uDFAF'}
            </div>
            <h2 style={{margin: '0 0 20px 0', color: '#f7931a'}}>CryptoBirds</h2>
            <p style={{opacity: 0.8}}>Loading...</p>
          </div>
        </div>
      </div>
    );
  }

  // Authentication Screen
  if (!isAuthenticated) {
    return (
      <div style={styles.app}>
        <div style={styles.authContainer}>
          <div style={styles.authCard}>
            <div style={{fontSize: '4rem', marginBottom: '20px'}}>
              {'\uD83C\uDFAF'}{'\uD83E\uDD19'}{'\u26A1'}{'\uD83D\uDC15'}
            </div>
            <h1 style={{margin: '0 0 10px 0', fontSize: '2.5rem', color: '#f7931a'}}>
              CryptoBirds
            </h1>
            <p style={{margin: '0 0 30px 0', fontSize: '1.1rem', opacity: 0.8}}>
              Angry Birds meets DeFi
            </p>
            
            <div style={{marginBottom: '30px'}}>
              <h3 style={{color: '#627eea', marginBottom: '15px'}}>Game Features:</h3>
              <div style={{display: 'grid', gap: '10px', textAlign: 'left'}}>
                <div style={{display: 'flex', alignItems: 'center', gap: '10px'}}>
                  <span>{'\uD83E\uDD19'}</span>
                  <span>Choose from 3 crypto characters</span>
                </div>
                <div style={{display: 'flex', alignItems: 'center', gap: '10px'}}>
                  <span>{'\uD83C\uDFAF'}</span>
                  <span>Destroy traditional finance targets</span>
                </div>
                <div style={{display: 'flex', alignItems: 'center', gap: '10px'}}>
                  <span>{'\uD83C\uDFC6'}</span>
                  <span>Compete on weekly leaderboard</span>
                </div>
                <div style={{display: 'flex', alignItems: 'center', gap: '10px'}}>
                  <span>{'\u26A1'}</span>
                  <span>Earn XP and level up</span>
                </div>
              </div>
            </div>

            {authError && (
              <div style={styles.errorMessage}>
                {authError}
              </div>
            )}

            <button
              onClick={handleFarcasterLogin}
              disabled={isAuthLoading}
              style={{
                ...styles.button,
                ...styles.primaryButton
              }}
            >
              {'\uD83D\uDD17'} Connect Farcaster Account
            </button>

            <p style={{fontSize: '0.8rem', opacity: 0.6, marginTop: '20px'}}>
              Connect your Farcaster account to save progress and compete on the leaderboard
            </p>
          </div>
        </div>
      </div>
    );
  }

  // Main Menu
  if (gameState === 'menu') {
    return (
      <div style={styles.app}>
        <div style={styles.container}>
          <div style={styles.header}>
            <h1 style={{fontSize: '2.5rem', margin: '0 0 5px 0'}}>
              {'\uD83C\uDFAF'} CryptoBirds
            </h1>
            <p style={{fontSize: '1rem', margin: 0, opacity: 0.9}}>
              Angry Birds meets DeFi
            </p>
          </div>

          <div style={styles.userInfo}>
            <img src={user?.pfpUrl} alt="Profile" style={styles.avatar} />
            <div style={{textAlign: 'left', flex: 1}}>
              <div style={{fontWeight: 'bold', color: '#f7931a'}}>
                {user?.displayName || user?.username}
              </div>
              <div style={{fontSize: '0.8rem', opacity: 0.7}}>
                FID: {user?.fid}
              </div>
            </div>
            <button 
              onClick={handleLogout}
              style={{
                ...styles.button,
                padding: '5px 10px',
                fontSize: '0.8rem',
                minWidth: 'auto',
                background: 'rgba(255,255,255,0.2)'
              }}
            >
              Logout
            </button>
          </div>

          <div style={styles.stats}>
            <div style={styles.statItem}>
              <div style={{fontSize: '1.5rem', fontWeight: 'bold', color: '#f7931a'}}>
                {totalXP}
              </div>
              <div style={{fontSize: '0.9rem', opacity: 0.8}}>Total XP</div>
            </div>
            <div style={styles.statItem}>
              <div style={{fontSize: '1.5rem', fontWeight: 'bold', color: '#627eea'}}>
                Level {currentLevel}
              </div>
              <div style={{fontSize: '0.9rem', opacity: 0.8}}>Current</div>
            </div>
          </div>

          <div style={styles.gameCard}>
            <h3 style={{margin: '0 0 15px 0', color: '#f7931a'}}>Daily Check-in</h3>
            <button 
              onClick={handleDailyCheckIn}
              disabled={dailyCheckedIn}
              style={{
                ...styles.button,
                ...(dailyCheckedIn ? {background: 'rgba(255,255,255,0.2)', cursor: 'not-allowed'} : {})
              }}
            >
              {dailyCheckedIn ? '\u2705 Checked In' : '\uD83C\uDF81 Check In (+100 XP)'}
            </button>
          </div>

          <div style={styles.gameCard}>
            <button 
              onClick={() => setGameState('character-select')}
              style={styles.button}
            >
              {'\uD83C\uDFAE'} Start Game
            </button>
            <button 
              onClick={() => setGameState('leaderboard')}
              style={styles.button}
            >
              {'\uD83C\uDFC6'} Leaderboard
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Character Selection
  if (gameState === 'character-select') {
    return (
      <div style={styles.app}>
        <div style={styles.container}>
          <div style={styles.header}>
            <h1 style={{fontSize: '2.5rem', margin: '0 0 5px 0'}}>Choose Your Bird</h1>
          </div>

          <div style={styles.gameCard}>
            {characters.map(char => (
              <div
                key={char.id}
                onClick={() => setSelectedCharacter(char)}
                style={{
                  ...styles.characterCard,
                  ...(selectedCharacter?.id === char.id ? styles.selectedCharacter : {})
                }}
              >
                <span style={{fontSize: '3rem', marginBottom: '10px', display: 'block'}}>
                  {char.icon}
                </span>
                <h3 style={{margin: '5px 0', color: char.color}}>{char.name}</h3>
                <p style={{margin: '5px 0', fontSize: '0.9rem', fontWeight: 'bold', color: '#f7931a'}}>
                  {char.power}
                </p>
                <p style={{margin: '0', fontSize: '0.8rem', opacity: 0.7}}>
                  {char.description}
                </p>
              </div>
            ))}
          </div>

          <button 
            onClick={startGame}
            disabled={!selectedCharacter}
            style={{
              ...styles.button,
              ...(!selectedCharacter ? {background: 'rgba(255,255,255,0.2)', cursor: 'not-allowed'} : {})
            }}
          >
            {'\uD83D\uDE80'} Launch Game
          </button>
          <button 
            onClick={() => setGameState('menu')}
            style={styles.button}
          >
            {'←'} Back
          </button>
        </div>
      </div>
    );
  }

  // Playing Game
  if (gameState === 'playing') {
    return (
      <div style={styles.app}>
        <div style={styles.container}>
          <div style={styles.header}>
            <h1 style={{fontSize: '2.5rem', margin: '0 0 5px 0'}}>Level {currentLevel}</h1>
            <p style={{fontSize: '1rem', margin: 0, opacity: 0.9}}>
              Playing as: {selectedCharacter?.name} {selectedCharacter?.icon}
            </p>
          </div>

          <div style={styles.gameArea}>
            <div style={{fontSize: '4rem', marginBottom: '20px'}}>
              {selectedCharacter?.icon}
            </div>
            <h3 style={{color: '#f7931a', marginBottom: '10px'}}>
              Target: Traditional Banks {'\uD83C\uDFE6'}
            </h3>
            <p style={{opacity: 0.8, marginBottom: '30px'}}>
              Tap to launch your {selectedCharacter?.name}!
            </p>
            <button 
              onClick={playLevel}
              style={{
                ...styles.button,
                fontSize: '1.2rem',
                padding: '15px 30px'
              }}
            >
              {'\uD83C\uDFAF'} LAUNCH!
            </button>
          </div>

          <div style={styles.stats}>
            <div style={styles.statItem}>
              <div style={{fontSize: '1.2rem', fontWeight: 'bold', color: '#f7931a'}}>
                {totalXP} XP
              </div>
            </div>
            <div style={styles.statItem}>
              <div style={{fontSize: '1.2rem', fontWeight: 'bold', color: '#627eea'}}>
                Level {currentLevel}
              </div>
            </div>
          </div>

          <button 
            onClick={() => setGameState('menu')}
            style={styles.button}
          >
            {'\uD83C\uDFE0'} Home
          </button>
        </div>
      </div>
    );
  }

  // Leaderboard
  if (gameState === 'leaderboard') {
    return (
      <div style={styles.app}>
        <div style={styles.container}>
          <div style={styles.header}>
            <h1 style={{fontSize: '2.5rem', margin: '0 0 5px 0'}}>
              {'\uD83C\uDFC6'} Top 100
            </h1>
            <p style={{fontSize: '1rem', margin: 0, opacity: 0.9}}>Weekly Leaderboard</p>
          </div>

          <div style={styles.gameCard}>
            <h3 style={{margin: '0 0 15px 0', color: '#f7931a'}}>Top Players</h3>
            {leaderboard.map(player => (
              <div key={player.rank} style={styles.leaderboardItem}>
                <div style={{display: 'flex', alignItems: 'center', gap: '10px'}}>
                  <span style={{
                    backgroundColor: player.rank <= 3 ? '#f7931a' : 'rgba(255,255,255,0.2)',
                    color: player.rank <= 3 ? '#000' : '#fff',
                    width: '25px',
                    height: '25px',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '0.8rem',
                    fontWeight: 'bold'
                  }}>
                    {player.rank}
                  </span>
                  <span>{player.character}</span>
                  <span>{player.name}</span>
                </div>
                <div style={{color: '#627eea', fontWeight: 'bold'}}>
                  {player.xp.toLocaleString()} XP
                </div>
              </div>
            ))}
          </div>

          <div style={{
            ...styles.gameCard,
            background: 'rgba(247, 147, 26, 0.1)',
            border: '1px solid rgba(247, 147, 26, 0.3)'
          }}>
            <p style={{margin: '0', fontSize: '0.9rem'}}>
              {'\u23F0'} Leaderboard resets every Sunday at midnight UTC
            </p>
          </div>

          <button 
            onClick={() => setGameState('menu')}
            style={styles.button}
          >
            {'←'} Back
          </button>
        </div>
      </div>
    );
  }

  return null;
}

export default App;
