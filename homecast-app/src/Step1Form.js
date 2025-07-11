import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Step1Form() {
  const [formData, setFormData] = useState({
    purpose: '',
    targetAudience: '',
    videoGenre: '',
    successDefinition: '',
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('step1Data', JSON.stringify(formData));
    navigate('/confirmation');
  };

  return (
    <div>
      <h1>STEP1「目標設定・コンセプト決め」</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            目的（誰に、何を、どんな感情を与えるか）:
            <input
              type="text"
              name="purpose"
              value={formData.purpose}
              onChange={handleChange}
            />
          </label>
        </div>
        <div>
          <label>
            視聴者ターゲット:
            <input
              type="text"
              name="targetAudience"
              value={formData.targetAudience}
              onChange={handleChange}
            />
          </label>
        </div>
        <div>
          <label>
            動画ジャンル（例：解説、Vlog、広告、レビュー、ショートなど）:
            <input
              type="text"
              name="videoGenre"
              value={formData.videoGenre}
              onChange={handleChange}
            />
          </label>
        </div>
        <div>
          <label>
            成功の定義（再生数、登録者数、販売、認知など）:
            <input
              type="text"
              name="successDefinition"
              value={formData.successDefinition}
              onChange={handleChange}
            />
          </label>
        </div>
        <button type="submit">保存する</button>
      </form>
    </div>
  );
}

export default Step1Form;
