import React from 'react';
import TodoBody from './body';
import TodayHeader from './header';

const TodayPage = () => {
  return <div className='flex-1 max-h-full bg-gray-200'>
      <TodayHeader />
      <TodoBody />
  </div>;
};

export default TodayPage;
