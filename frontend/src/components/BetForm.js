import React, { useState } from 'react';
import axios from 'axios';
import { useHistory, useParams } from 'react-router-dom';

function BetForm() {
  const [betDetails, setBetDetails] = useState('');
  const [betAmount, setBetAmount] = useState('');
  const history = useHistory();
  const { matchId } = useParams();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/bets', {
        userId: 'user-id-placeholder', // Replace with actual user ID
        matchId,
        betDetails,
        betAmount,
      });
      console.log('Bet placed:', response.data);
      history.push('/history');
    } catch (error) {
      console.error('Error placing bet:', error);
    }
  };

  return (
    <div>
      <h1>Place Bet</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="betDetails">Bet Details:</label>
          <input
            type="text"
            id="betDetails"
            value={betDetails}
            onChange={(e) => setBetDetails(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="betAmount">Bet Amount:</label>
          <input
            type="number"
            id="betAmount"
            value={betAmount}
            onChange={(e) => setBetAmount(e.target.value)}
            required
          />
        </div>
        <button type="submit">Place Bet</button>
      </form>
    </div>
  );
}

export default BetForm;
