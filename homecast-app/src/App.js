import React from 'react';
import logo from './logo.png'; // ← logo.pngは srcフォルダ直下にある前提

function App() {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '2rem',
      fontFamily: 'sans-serif',
    }}>
      <img src={logo} alt="ほめキャス ロゴ" style={{ width: '150px', marginBottom: '1rem' }} />
      <h1>ほめキャスへようこそ！</h1>
      <p>動画づくりのSTEPを1つずつ進めていこう！</p>
    </div>
  );
}

export default App;
