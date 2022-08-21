import {styled} from '../../stitches.config';

export const Container = styled('span', {
  fontSize: '0.875rem',
  '&:before': {
    position: 'relative',
    top: '1px',

    display: 'inline-block',
    marginRight: '0.25em',
    borderRadius: '50%',
    width: '1em',
    height: '1em',

    color: '$gray300',

    content: '',
  }
});