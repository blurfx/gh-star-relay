import {graphql} from "babel-plugin-relay/macro";
import { fetchQuery } from "react-relay";
import {useState} from "react";
import RelayEnvironment from '../relay-env';
import {useSearchQuery} from "./__generated__/useSearchQuery.graphql";

const searchQuery = graphql`
query useSearchQuery($query: String!, $after: String) { 
  search(type: REPOSITORY, query: $query, first: 10, after: $after) {
    edges {
      cursor
      node {
        ... on Repository {
          owner {
            login
          }
          name
          stargazerCount
          viewerHasStarred
        }
      }
    }
  }
}`;

type Repositories = useSearchQuery['response']['search']['edges'];
type FetchFunction = (query: string, after?: string) => void;

const useSearch = (): [Repositories, FetchFunction] => {
  const [repositories, setRepositories] = useState<Repositories>([]);

  const fetchRepositories: FetchFunction = (query: string, after?: string) => {
    fetchQuery<useSearchQuery>(RelayEnvironment, searchQuery, {
      query,
      after,
    }).toPromise().then((data) => setRepositories(data?.search.edges ?? []));
  }

  return [repositories, fetchRepositories];
}

export default useSearch;
