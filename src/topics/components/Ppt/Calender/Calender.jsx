import React, { useState } from 'react';
import './calender.css';

const Calendar = () => {
  // Sample events data (you can replace this with your actual events data)
  const [events, setEvents] = useState([
    { date: '2024-02-14', title: 'Valentine\'s Day' },
    { date: '2024-03-08', title: 'International Women\'s Day' },
    // Add more events as needed
  ]);

  // Function to render individual days in a month
  const renderDays = () => {
    const days = [];
    // Get the current date to use as reference
    const currentDate = new Date();
    // Get the number of days in the current month
    const numDays = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();

    // Loop through each day of the month
    for (let i = 1; i <= numDays; i++) {
      // Format the date as yyyy-mm-dd
      const formattedDate = `${currentDate.getFullYear()}-${currentDate.getMonth() + 1}-${i}`;
      // Check if there are events for this date
      const event = events.find(event => event.date === formattedDate);
      // Push each day to the days array
      days.push(
        <div key={i} className="day">
          <span>{i}</span>
          {event && <span className="event">{event.title}</span>}
        </div>
      );
    }

    return days;
  };

  return (
    <div className="calendar">
      <div className="header">
        <h2>February 2024</h2> {/* You can dynamically generate this */}
      </div>
      <div className="days">
        {renderDays()}
      </div>
    </div>
  );
};

export default Calendar;
