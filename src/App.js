import React, { useState, useEffect } from 'react';
import './App.css';
import UserCard from './UserCard';
import Loader from './Loader';

function App() {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch data from API
    const fetchData = async () => {
      try {
        const response = await fetch('https://randomuser.me/api/?page=1&results=1&seed=abc');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setUserData(data.results[0]); // Extract the first user from the results
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div style={{display:'flex',alignItems:'center', justifyContent:'center',height:'100vh'}}> <Loader/> </div>
  }

  if (error) {
    return <div className="text-center text-red-500">Error: {error}</div>;
  }

  return (
    <div style={{display: 'flex',          
      justifyContent: 'center',  
      alignItems: 'center',      
      height: '100vh',           
      width: '100vw',            
      backgroundColor:'#FFFFFF'
      }}>

      {userData && <UserCard user={userData} />}
    </div>
  );
}

export default App;