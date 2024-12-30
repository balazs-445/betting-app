import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function MatchList() {
  const [matches, setMatches] = useState([]);

  useEffect(() => {
    const fetchMatches = async () => {
      try {
        const response = await axios.get('/api/matches');
        setMatches(response.data);
      } catch (error) {
        console.error('Error fetching matches:', error);
      }
    };

    fetchMatches();
  }, []);

  return (
    <div>
      <h1>Football Matches</h1>
      <ul>
        {matches.map((match) => (
          <li key={match._id}>
            {match.homeTeam} vs {match.awayTeam} - {new Date(match.matchDate).toLocaleString()}
            <Link to={`/bet/${match._id}`}>Place Bet</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MatchList;
