import {styled} from '../../stitches.config';

export const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
});

export const Button = styled('button', {
  border: 0,
  borderRadius: '4px',
  padding: '0.5rem 1rem',
  width: '100%',

  backgroundColor: '$blue',

  fontSize: '1rem',
  color: 'white',

  appearance: 'none',
  cursor: 'pointer',

  '&:disabled': {
    backgroundColor: '$gray300',
  }
});