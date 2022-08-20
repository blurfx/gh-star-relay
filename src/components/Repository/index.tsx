import {graphql} from 'babel-plugin-relay/macro';
import React from 'react';
import {useFragment} from 'react-relay';

import {RepositoryFragment$key} from './__generated__/RepositoryFragment.graphql';

const fragment = graphql`
fragment RepositoryFragment on Repository {
  owner {
    login
    url
  }
  name
  description
  url
  stargazerCount
  viewerHasStarred
  primaryLanguage {
    color
    name
  }
}
`;

type Props = {
  fragmentRef: RepositoryFragment$key
};

const Repository: React.FC<Props> = ({ fragmentRef }) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const _ =  useFragment(fragment, fragmentRef);
  return null;
};

export default Repository;