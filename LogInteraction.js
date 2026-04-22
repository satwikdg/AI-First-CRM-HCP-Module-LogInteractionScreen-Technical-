import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateFields } from './store/interactionSlice';

const LogInteraction = () => {
  const [inputText, setInputText] = useState('');
  const formData = useSelector((state) => state.interaction);
  const dispatch = useDispatch();

  const handleAISync = async () => {
    const response = await fetch('http://localhost:8000/api/log-interaction', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text: inputText }),
    });
    const data = await response.json();
    dispatch(updateFields(data));
  };

  return (
    <div style={{ fontFamily: 'Inter, sans-serif', padding: '40px', display: 'flex', gap: '20px' }}>
      <div style={{ flex: 1 }}>
        <h3>Conversational Log</h3>
        <textarea 
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder="Describe your meeting with the HCP..."
          style={{ width: '100%', height: '200px', borderRadius: '8px', padding: '10px' }}
        />
        <button onClick={handleAISync} style={{ marginTop: '10px', padding: '10px 20px', cursor: 'pointer' }}>
          Sync with AI
        </button>
      </div>

      <div style={{ flex: 1, backgroundColor: '#f9f9f9', padding: '20px', borderRadius: '8px' }}>
        <h3>Structured Data (Shadow Form)</h3>
        <label>HCP Name:</label>
        <input type="text" value={formData.hcp_name} readOnly style={{ display: 'block', marginBottom: '10px' }} />
        
        <label>Product Discussed:</label>
        <input type="text" value={formData.product} readOnly style={{ display: 'block', marginBottom: '10px' }} />
        
        <label>Sentiment:</label>
        <input type="text" value={formData.sentiment} readOnly style={{ display: 'block', marginBottom: '10px' }} />
      </div>
    </div>
  );
};

export default LogInteraction;