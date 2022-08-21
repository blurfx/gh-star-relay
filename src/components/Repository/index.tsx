import {graphql} from 'babel-plugin-relay/macro';
import React from 'react';
import {useFragment} from 'react-relay';

import Language from '../Language';
import StargazeButton from '../StargazeButton';

import {RepositoryFragment$key} from './__generated__/RepositoryFragment.graphql';
import {ButtonContainer, Container, Description, Footer, Header, RepositoryLink, StarCount} from './styles';

const fragment = graphql`
fragment RepositoryFragment on Repository {
  nameWithOwner
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
  const { nameWithOwner, description, url, primaryLanguage, stargazerCount } = repositoryFragment;
  return (
    <Container>
      <Header>
        <RepositoryLink href={url}>{nameWithOwner}</RepositoryLink>
        <ButtonContainer>
          <StargazeButton fragmentRef={repositoryFragment} />
        </ButtonContainer>
      </Header>
      <Description>{description}</Description>
      <Footer>
        {primaryLanguage && <Language color={primaryLanguage.color!}>{primaryLanguage.name}</Language>}
        <StarCount>⭐️ {stargazerCount}</StarCount>
      </Footer>
    </Container>
  );
};

export default Repository;