// Sleep Debt Calculator
// A person can accumulate sleep debt when they have not had enough sleep.

// Determine a person's  actual and ideal hours of sleep for each night (from the past week).

// To calculate how far a person is from their weekly sleep goal (hours).

// Heading
console.log('SLEEP DEBT CALCULATOR\n')

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
    case 'Thursday':
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

// Find total sleep hours actually slept
// implicit return (no keyword return or {})
const getActualSleepHours = () => 
  getSleepHours('Monday') +
  getSleepHours('Tuesday') +
  getSleepHours('Wednesday') +
  getSleepHours('Thursday') +
  getSleepHours('Friday') +
  getSleepHours('Saturday') +
  getSleepHours('Sunday');

// Find ideal sleep hours that the person prefers (per week)
const getIdealSleepHours = () => 
{
  let idealHours = 8;
  return idealHours * 7;
};

// Test getSleepHours, getActualSleepHours and getIdealSleepHours functions
console.log('Sleep hours on Monday: ' + getSleepHours('Monday'));
// Output
// Sleep hours on Monday: 8
console.log('Actual sleep hours for week: ' + getActualSleepHours());
// Output
// Actual sleep hours for week: 48
console.log('Ideal sleep hours for week: ' + getIdealSleepHours());
// Output
// Ideal sleep hours for week: 56

// Calculate the sleep debt (if any).
// state the hours over or under a person's ideal sleep
const calculateSleepDebt = () => 
{
  const actualSleepHours = getActualSleepHours();
  const idealSleepHours = getIdealSleepHours();

// actual sleep equals ideal sleep
  if (actualSleepHours === idealSleepHours) 
  {
    console.log('You\'ve had the perfect amount of sleep!');
  }
// actual sleep is greater than the ideal sleep
  else if (actualSleepHours > idealSleepHours) 
  {
    console.log('You\'ve had' + (idealSleepHours - actualSleepHours) + ' more hours of sleep this week than needed.');
  }
// actual sleep is less than the ideal sleep
  else if (actualSleepHours < idealSleepHours) 
  {
    console.log('You should have some rest because you\'ve slept ' + (idealSleepHours - actualSleepHours) + ' hours less than you should have this week.');
  }
  else 
  {
    console.log('Error!');
  }
};
// Output 
// You should have some rest because you've slept 8 hours less than you should have this week.

// start program
calculateSleepDebt();


// Output
// SLEEP DEBT CALCULATOR

// Sleep hours on Monday: 8
// Actual sleep hours for week: 48
// Ideal sleep hours for week: 56
// You should have some rest because you've slept 8 hours less than you should have this week.
