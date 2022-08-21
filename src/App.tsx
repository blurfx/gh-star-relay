import React, {useRef, useState} from 'react';

import SearchResult from './components/SearchResult';

const App: React.FC = () => {
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);
  const onSubmit: React.FormEventHandler = (e) => {
    e.preventDefault();
    setQuery(inputRef?.current?.value ?? '');
  };

  return (
    <div>
      <header className='App-header'>
        <form onSubmit={onSubmit}>
          <input type='text' name={'query'} ref={inputRef} />
          <button type={'submit'}>검색</button>
        </form>
        <React.Suspense fallback={'Loading...'}>
          { query && <SearchResult query={query} /> }
        </React.Suspense>
      </header>
    </div>
  );
};


export default App;
