import React from 'react';

function App() {
  return (
    <div style={{
      minHeight: '100vh',
      background: '#0a0a0b',
      color: 'white',
      padding: '20px',
      fontFamily: 'Arial, sans-serif'
    }}>
      <div style={{
        maxWidth: '600px',
        margin: '0 auto',
        textAlign: 'center'
      }}>
        {/* Header */}
        <div style={{
          background: 'linear-gradient(135deg, #18a0fb, #7b68ee)',
          padding: '30px',
          borderRadius: '20px',
          marginBottom: '30px'
        }}>
          <h1 style={{
            fontSize: '3rem',
            margin: '0 0 10px 0',
            textShadow: '0 2px 4px rgba(0,0,0,0.3)'
          }}>
            🧠 BlockBrain
          </h1>
          <p style={{
            fontSize: '1.2rem',
            margin: 0,
            opacity: 0.9
          }}>
            Quiz Game on Farcaster
          </p>
        </div>

        {/* Content */}
        <div style={{
          background: 'rgba(255,255,255,0.1)',
          padding: '25px',
          borderRadius: '15px',
          marginBottom: '25px',
          border: '1px solid rgba(255,255,255,0.2)'
        }}>
          <h2 style={{
            fontSize: '2rem',
            margin: '0 0 15px 0',
            color: '#18a0fb'
          }}>
            Test Your Knowledge
          </h2>
          <p style={{
            fontSize: '1.1rem',
            margin: '0 0 25px 0',
            opacity: 0.8
          }}>
            Daily crypto & general knowledge quizzes
          </p>
        </div>

73aa755e-2caf-4b3c-bf90-056b15a543f7

right arrow
Buy Credits


User Avatar

info

code
Code

preview
Preview

Deploy
Deploy
Screenshot_2025-09-26-02-07-19-639_com.farcaster.mobile.jpg
Screenshot_2025-09-26-02-10-03-160_com.farcaster.mobile-edit.jpg
Masih blank. Dan logo pada miniapp tidak ada, tolong solusinya apakah icon. Svg dan splash. Svg sudah benar?

Sep 26, 02:12 AM

Copy
Robot
Hey SIXTYSECOND, Quick input needed :
Ask Question
Agent will continue working after your reply
🚨 2 Masalah Utama yang Perlu Diperbaiki
Dari screenshot saya lihat:

App masih blank dengan background pink
Icon app adalah ghost (default) bukan logo BlockBrain
Mari kita fix kedua masalah ini:

🔧 SOLUSI 1: Fix Blank App Content
Ganti dengan App.js yang Super Simple:
import React from 'react';

function App() {
  return (
    <div style={{
      minHeight: '100vh',
      background: '#0a0a0b',
      color: 'white',
      padding: '20px',
      fontFamily: 'Arial, sans-serif'
    }}>
      <div style={{
        maxWidth: '600px',
        margin: '0 auto',
        textAlign: 'center'
      }}>
        {/* Header */}
        <div style={{
          background: 'linear-gradient(135deg, #18a0fb, #7b68ee)',
          padding: '30px',
          borderRadius: '20px',
          marginBottom: '30px'
        }}>
          <h1 style={{
            fontSize: '3rem',
            margin: '0 0 10px 0',
            textShadow: '0 2px 4px rgba(0,0,0,0.3)'
          }}>
            🧠 BlockBrain
          </h1>
          <p style={{
            fontSize: '1.2rem',
            margin: 0,
            opacity: 0.9
          }}>
            Quiz Game on Farcaster
          </p>
        </div>

        {/* Content */}
        <div style={{
          background: 'rgba(255,255,255,0.1)',
          padding: '25px',
          borderRadius: '15px',
          marginBottom: '25px',
          border: '1px solid rgba(255,255,255,0.2)'
        }}>
          <h2 style={{
            fontSize: '2rem',
            margin: '0 0 15px 0',
            color: '#18a0fb'
          }}>
            Test Your Knowledge
          </h2>
          <p style={{
            fontSize: '1.1rem',
            margin: '0 0 25px 0',
            opacity: 0.8
          }}>
            Daily crypto & general knowledge quizzes
          </p>
        </div>

        {/* Features */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
          gap: '15px',
          marginBottom: '30px'
        }}>
          <div style={{
            background: 'rgba(24,160,251,0.2)',
            padding: '20px',
            borderRadius: '12px',
            border: '2px solid rgba(24,160,251,0.3)'
          }}>
            <div style={{fontSize: '2rem', marginBottom: '10px'}}>📅</div>
            <h3 style={{margin: '0', color: '#18a0fb', fontSize: '1rem'}}>Daily Quests</h3>
          </div>
          
          <div style={{
            background: 'rgba(24,160,251,0.2)',
            padding: '20px',
            borderRadius: '12px',
            border: '2px solid rgba(24,160,251,0.3)'
          }}>
            <div style={{fontSize: '2rem', marginBottom: '10px'}}>🏆</div>
            <h3 style={{margin: '0', color: '#18a0fb', fontSize: '1rem'}}>Leaderboard</h3>
          </div>
          
          <div style={{
            background: 'rgba(24,160,251,0.2)',
            padding: '20px',
            borderRadius: '12px',
            border: '2px solid rgba(24,160,251,0.3)'
          }}>
            <div style={{fontSize: '2rem', marginBottom: '10px'}}>⚡</div>
            <h3 style={{margin: '0', color: '#18a0fb', fontSize: '1rem'}}>Earn XP</h3>
          </div>
        </div>

        {/* CTA Button */}
        <button style={{
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
        }}>
          🔗 Connect Farcaster
        </button>

        {/* Status */}
        <div style={{
          marginTop: '30px',
          padding: '15px',
          background: 'rgba(0,255,0,0.1)',
          border: '1px solid rgba(0,255,0,0.3)',
          borderRadius: '10px',
          fontSize: '0.9rem'
        }}>
          ✅ App loaded successfully!
        </div>
      </div>
    </div>
  );
}

export default App;
