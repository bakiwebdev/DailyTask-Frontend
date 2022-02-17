import React from 'react';
import TodoBody from './body';
import TodayHeader from './header';

const TodayPage = () => {
  return <div className='w-full flex-1 h-full bg-gray-50 overflow-hidden'>
      <TodayHeader />
      <TodoBody />
  </div>;
};

export default TodayPage;
