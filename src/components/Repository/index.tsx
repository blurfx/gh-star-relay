import {graphql} from 'babel-plugin-relay/macro';
import React from 'react';
import {useFragment} from 'react-relay';

import StargazeButton from '../StargazeButton';

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
  primaryLanguage {
    color
    name
  }
  stargazerCount
  ...StargazeButtonFragment
}
`;

type Props = {
  fragmentRef: RepositoryFragment$key;
};

const Repository: React.FC<Props> = ({ fragmentRef }) => {
  const repositoryFragment = useFragment(fragment, fragmentRef);
  const { name, description, owner, url, primaryLanguage, stargazerCount } = repositoryFragment;
  return (
    <div>
      <p><a href={owner.url}>{owner.login}</a>/<a href={url}>{name}</a></p>
      <StargazeButton fragmentRef={repositoryFragment} />
      <p>{description}</p>
      <div>
        <span>{primaryLanguage?.name}</span> <span>⭐️ {stargazerCount}</span>
      </div>
    </div>
  );
};

export default Repository;