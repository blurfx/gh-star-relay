import React, {useState} from 'react';

import {Container, Form, Header, Input, SearchButton} from './App.styles';
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
    <Container>
      <Header>
        <Form onSubmit={onSubmit}>
          <Input type='text' name={'query'} value={query} onChange={onQueryChange} />
          <SearchButton type={'submit'}>검색</SearchButton>
        </Form>
      </Header>
      <React.Suspense fallback={'Loading...'}>
        { queryParam && <SearchResult query={queryParam} /> }
      </React.Suspense>
    </Container>
  );
};


export default App;
