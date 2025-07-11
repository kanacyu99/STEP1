// キャッシュクリア用のコメント（再ビルドトリガー）

import React from 'react';
import logo from './assets/logo.png'; // ← assetsフォルダから読み込み

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
