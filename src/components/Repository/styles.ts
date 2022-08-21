import {styled} from '../../stitches.config';

export const Container = styled('div', {
  border: '1px solid $gray100',
  borderRadius: '4px',
  padding: '1rem',

  backgroundColor: '$semiWhite',
});

export const Header = styled('header', {
  marginBottom: '0.5rem',
});

export const ButtonContainer = styled('div', {
  display: 'flex',
  float: 'right',
});

export const RepositoryLink = styled('a', {
  fontSize: '1.25rem',
  fontWeight: 'bold',
  textDecoration: 'none',

  color: 'black',
});

export const Description = styled('p', {
  color: '$gray300',
});

export const Footer = styled('footer', {
  display: 'flex',
  gap: '1rem',
});

export const StarCount = styled('span', {
  fontSize: '0.875rem',

  color: '$gray300',
});