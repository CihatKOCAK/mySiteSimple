import React from 'react';
import Body from './body/Body';
import Header from '../../header/Header';


function Index({ theme, setTheme, isHappy, setIsHappy }) {
  return (
    <div className="container">
      <Header theme={theme} setTheme={setTheme} isHappy={isHappy} setIsHappy={setIsHappy} />
      <Body theme={theme} />
    </div>
  );
}

export default Index;
