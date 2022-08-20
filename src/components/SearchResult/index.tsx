import {graphql} from 'babel-plugin-relay/macro';
import React from 'react';
import {useLazyLoadQuery, usePaginationFragment} from 'react-relay';

import Repository from '../Repository';

import {SearchResultFragment$key} from './__generated__/SearchResultFragment.graphql';

const searchResultQuery = graphql`
query SearchResultQuery($query: String!) {
  ...SearchResultFragment @arguments(query: $query)
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
};

const SearchResult: React.FC<Props> = ({ query }) => {
  const lazyLoadQuery = useLazyLoadQuery(searchResultQuery, { query }) as SearchResultFragment$key;
  const { data } = usePaginationFragment(searchResultFragment, lazyLoadQuery);
  return (
    <div>
      {data.search?.edges?.map((edge) => (
        <Repository key={edge!.cursor} fragmentRef={edge!.node!} />
      ))}
    </div>
  );
};

export default SearchResult;