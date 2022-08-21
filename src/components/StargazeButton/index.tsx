import {graphql} from 'babel-plugin-relay/macro';
import React from 'react';
import {useFragment, useMutation} from 'react-relay';

import {StargazeButtonFragment$key} from './__generated__/StargazeButtonFragment.graphql';


type Props = {
  fragmentRef: StargazeButtonFragment$key;
};

const fragment = graphql`
fragment StargazeButtonFragment on Repository {
  id
  viewerHasStarred
}`;

const AddStarMutation = graphql`
mutation StargazeButtonAddStarMutation($id: ID!) {
  addStar(input: {starrableId: $id}) {
    starrable {
      id
      stargazerCount
      viewerHasStarred
    }
  }
}
`;

const RemoveStarMutation = graphql`
mutation StargazeButtonRemoveStarMutation($id: ID!) {
  removeStar(input: {starrableId: $id}) {
    starrable {
      id
      stargazerCount
      viewerHasStarred
    }
  }
}
`;

const StargazeButton: React.FC<Props> = ({ fragmentRef }) => {
  const stargazeFragment = useFragment(fragment, fragmentRef);
  const { id, viewerHasStarred } = stargazeFragment;
  const [addStar] = useMutation(AddStarMutation);
  const [removeStar] = useMutation(RemoveStarMutation);
  const onClick = () => {
    if (viewerHasStarred) {
      removeStar({ variables: { id }});
    } else {
      addStar({ variables: { id }});
    }
  };
  return <button type={'button'} aria-pressed={viewerHasStarred} onClick={onClick}>{ viewerHasStarred ? 'Starred' : 'Star' }</button>;
};

export default StargazeButton;