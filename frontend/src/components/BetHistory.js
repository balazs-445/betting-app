import React, { useEffect, useState } from 'react';
import axios from 'axios';

function BetHistory() {
  const [betHistory, setBetHistory] = useState([]);

  useEffect(() => {
    const fetchBetHistory = async () => {
      try {
        const response = await axios.get('/api/betHistory', {
          params: { userId: 'user-id-placeholder' }, // Replace with actual user ID
        });
        setBetHistory(response.data);
      } catch (error) {
        console.error('Error fetching bet history:', error);
      }
    };

    fetchBetHistory();
  }, []);

  return (
    <div>
      <h1>Bet History</h1>
      <ul>
        {betHistory.map((bet) => (
          <li key={bet._id}>
            <p>Match: {bet.match}</p>
            <p>Bet Details: {bet.betDetails}</p>
            <p>Bet Amount: {bet.betAmount}</p>
            <p>Potential Winnings: {bet.potentialWinnings}</p>
            <p>Bet Date: {new Date(bet.betDate).toLocaleString()}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BetHistory;
