import {graphql} from 'babel-plugin-relay/macro';
import React from 'react';
import {useLazyLoadQuery, usePaginationFragment} from 'react-relay';

import Repository from '../Repository';

import {SearchResultFragment$key} from './__generated__/SearchResultFragment.graphql';
import {Button, Container} from './styles';

const PAGINATION_SIZE = 10;
const searchResultQuery = graphql`
query SearchResultQuery($query: String!, $after: String) {
  ...SearchResultFragment @arguments(query: $query, after: $after)
}`;

const searchResultFragment = graphql`
fragment SearchResultFragment on Query
@argumentDefinitions(
  query: {type: "String!"},
  size: {type: "Int", defaultValue: 10},
  after: {type: "String", defaultValue: null},
)
@refetchable(queryName: "SearchPaginationQuery") {
  search(type: REPOSITORY, query: $query, first: $size, after: $after)
    @connection(key: "SearchResult__search") {
    edges {
      cursor
      node {
        ... on Repository {
          ...RepositoryFragment
        }
      }
    }
  }
}
`;

type Props = {
  query: string;
  cursor?: string;
};

const SearchResult: React.FC<Props> = ({ query, cursor }) => {
  const after = cursor ? btoa(`cursor:${cursor}`) : null;
  const lazyLoadQuery = useLazyLoadQuery(searchResultQuery, { query, after }) as SearchResultFragment$key;
  const { data, hasNext, loadNext, isLoadingNext } = usePaginationFragment(searchResultFragment, lazyLoadQuery);
  const onClickNextButton = () => {
    loadNext(PAGINATION_SIZE);
  };
  return (
    <Container>
      {data.search?.edges?.map((edge) => (
        <Repository key={edge!.cursor} fragmentRef={edge!.node!} />
      ))}
      { hasNext && (
        <Button type={'button'} onClick={onClickNextButton} disabled={isLoadingNext}>
          { isLoadingNext ? 'Loading' : 'Load next result'}
        </Button>
      )}
    </Container>
  );
};

export default SearchResult;
