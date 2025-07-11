import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Confirmation() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const savedData = localStorage.getItem('step1Data');
    if (savedData) {
      setData(JSON.parse(savedData));
    }
  }, []);

  if (!data) {
    return <p>データがありません。</p>;
  }

  return (
    <div>
      <h1>すごい！STEP1クリア！</h1>
      <h2>入力内容</h2>
      <p><strong>目的:</strong> {data.purpose}</p>
      <p><strong>視聴者ターゲット:</strong> {data.targetAudience}</p>
      <p><strong>動画ジャンル:</strong> {data.videoGenre}</p>
      <p><strong>成功の定義:</strong> {data.successDefinition}</p>
      <Link to="/">STEP1に戻る</Link>
    </div>
  );
}

export default Confirmation;
