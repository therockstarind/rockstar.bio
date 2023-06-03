import React from 'react';

interface GreetingProps {
  greeting?: string;
}

const GreetingMessage: React.FC<GreetingProps> = ({ greeting = '' }) => {
  return (
    <h1 className="text-2xl lg:text-3xl font-bold">{greeting}</h1>
  );
};

const Greeting: React.FC = () => {
  const myDate = new Date();
  const hrs = myDate.getHours();
  let greet: string | undefined;

  if (hrs >= 4 && hrs <= 11) {
    greet = 'Good Morning 🌞';
  } else if (hrs >= 12 && hrs <= 16) {
    greet = 'Good Afternoon ☀️';
  } else if (hrs >= 17 && hrs <= 23) {
    greet = 'Good Evening 🌇';
  } else if (hrs >= 0 && hrs <= 3) {
    greet = 'Good Night 🌃';
  }

  return (
    <h3 className="text-4xl font-medium dark:text-white">
      <label>
        <b>
          <GreetingMessage greeting={greet} />
        </b>
      </label>
    </h3>
  );
};

export default Greeting;
