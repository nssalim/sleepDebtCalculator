// Sleep Debt Calculator
// A person can accumulate sleep debt when they have not had enough sleep.

// Determine a peson's  actual and ideal hours of sleep for each night (from the past week).

// To calculate how far a person is from their weekly sleep goal (hours).


// Determine number of hours slept each night
const getSleepHours = day => {
    switch(day) {
      case 'Monday':
        return 8
        break;
      case 'Tuesday':
        return 6
        break;
      case 'Wednesday':
        return 7
        break;
      case 'Thurday':
        return 4
        break;
      case 'Friday':
        return 5
        break;
      case 'Saturday':
        return 9
        break;
      case 'Sunday':
        return 9
        break;
      default:
        return 'Error!'
    }
  };
  