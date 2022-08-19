import React from 'react';

import useSearch from './hooks/useSearch';

const App: React.FC = () => {
  const [repositories, fetchRepositories] = useSearch();
  return (
    <div>
      <header className='App-header'>
        <p>{JSON.stringify(repositories)}</p>
      </header>
    </div>
  );
};


export default App;
