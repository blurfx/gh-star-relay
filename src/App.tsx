import React, {useState} from 'react';

import SearchResult from './components/SearchResult';
import useSearchParams from './hooks/useSearchParams';

const App: React.FC = () => {
  const [params, setParams] = useSearchParams();
  const queryParam = params.get('query') ?? '';
  const [query, setQuery] = useState(queryParam);

  const onQueryChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setQuery(e.target.value);
  };

  const onSubmit: React.FormEventHandler = (e) => {
    e.preventDefault();
    params.set('query', query);
    setParams(new URLSearchParams(params));
  };

  return (
    <div>
      <header className='App-header'>
        <form onSubmit={onSubmit}>
          <input type='text' name={'query'} value={query} onChange={onQueryChange} />
          <button type={'submit'}>검색</button>
        </form>
        <React.Suspense fallback={'Loading...'}>
          { queryParam && <SearchResult query={queryParam} /> }
        </React.Suspense>
      </header>
    </div>
  );
};


export default App;
