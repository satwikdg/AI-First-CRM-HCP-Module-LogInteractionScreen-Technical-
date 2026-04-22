import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateFields, setLoading } from './interactionSlice';
import './App.css';

function App() {
  const [inputText, setInputText] = useState('');
  const { hcp_name, product, sentiment, summary, loading } = useSelector((state) => state.interaction);
  const dispatch = useDispatch();

  const handleSync = async () => {
    dispatch(setLoading());
    try {
      const response = await fetch('http://localhost:8000/api/log-interaction', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text: inputText }),
      });
      const data = await response.json();
      // Parsing the stringified JSON from the backend
      const parsedData = typeof data === 'string' ? JSON.parse(data) : data;
      dispatch(updateFields(parsedData));
    } catch (error) {
      console.error("Failed to sync:", error);
    }
  };

  return (
    <div className="container">
      <header>
        <h1>AI-First HCP CRM</h1>
        <p>Life Sciences Field Representative Module</p>
      </header>

      <main className="grid">
        <section className="input-area">
          <h3>Log Interaction</h3>
          <textarea 
            placeholder="e.g., Met Dr. Smith, discussed Oncology portfolio. He liked the clinical data but wants pricing info."
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
          />
          <button onClick={handleSync} disabled={loading}>
            {loading ? 'Processing...' : 'Sync with AI Agent'}
          </button>
        </section>

        <section className="output-area">
          <h3>Extracted Entities</h3>
          <div className="field"><strong>HCP Name:</strong> {hcp_name || '---'}</div>
          <div className="field"><strong>Product:</strong> {product || '---'}</div>
          <div className="field"><strong>Sentiment:</strong> {sentiment || '---'}</div>
          <div className="field"><strong>Summary:</strong> <p>{summary || 'Waiting for input...'}</p></div>
        </section>
      </main>
    </div>
  );
}

export default App;