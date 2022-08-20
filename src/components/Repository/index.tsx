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
  const { name, description, owner, url, primaryLanguage, stargazerCount } =  useFragment(fragment, fragmentRef);

  return (
    <div>
      <p><a href={owner.url}>{owner.login}</a>/<a href={url}>{name}</a></p>
      <p>{description}</p>
      <div>
        <span>{primaryLanguage?.name}</span> <span>⭐️ {stargazerCount}</span>
      </div>
    </div>
  );
};

export default Repository;