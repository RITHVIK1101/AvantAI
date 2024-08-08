import React, { useEffect, useState } from 'react';
import moment from 'moment';
import './App.css'; // Import the CSS file

function App() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const [isLoaded, setIsLoaded] = useState(false); // State to track if the content has loaded

  useEffect(() => {
    let endDate = localStorage.getItem('countdownEndDate');
    
    if (!endDate) {
      endDate = moment().add(70, 'days').add(8, 'hours').add(5, 'minutes').add(20, 'seconds').valueOf();
      localStorage.setItem('countdownEndDate', endDate);
    }

    const targetDate = moment(parseInt(endDate));

    const calculateTimeLeft = () => {
      const now = moment();
      const duration = moment.duration(targetDate.diff(now));

      return {
        days: Math.floor(duration.asDays()),
        hours: duration.hours(),
        minutes: duration.minutes(),
        seconds: duration.seconds(),
      };
    };

    const updateTimer = () => {
      const newTimeLeft = calculateTimeLeft();
      setTimeLeft(newTimeLeft);
    };

    updateTimer();
    const timerInterval = setInterval(updateTimer, 1000);

    setTimeout(() => setIsLoaded(true), 100); // Simulate a delay before setting isLoaded to true

    return () => clearInterval(timerInterval);
  }, []);

  return (
    <div className={`container ${isLoaded ? 'loaded' : ''}`}>
      <div className="countdown-container">
        <div className="timer-box">
          <div className="timer">
            {`${timeLeft.days}D ${timeLeft.hours}H ${timeLeft.minutes}M ${timeLeft.seconds}S`}
          </div>
          <a href="https://tally.so/r/3lL6Ro" target="_blank" rel="noopener noreferrer" className="access-link">
            Join waitlist →
          </a>
        </div>
      </div>
      <h1 className="main-title">
        The future of AI.<br />
        <span className="subtitle">Find, create, deploy, and embed<br/> </span>
        <span className='new'>AI models</span>
      </h1>
    </div>
  );
}

export default App;
