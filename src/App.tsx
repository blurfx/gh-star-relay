import React from 'react';

import SearchResult from './components/SearchResult';

const App: React.FC = () => {
  return (
    <div>
      <header className='App-header'>
        <SearchResult query={'그린랩스'} />
      </header>
    </div>
  );
};


export default App;
