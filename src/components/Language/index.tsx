import React from 'react';

import {Container} from './styles';

type Props = React.PropsWithChildren<{
  color: string;
}>;

const Language: React.FC<Props> = ({ color, children }) => {
  return <Container css={{ '&:before': { bgColor: color } }}>{ children }</Container>;
};

export default Language;