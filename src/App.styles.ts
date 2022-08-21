import {styled} from './stitches.config';

export const Container = styled('div', {
  margin: '0 auto',
  width: '100%',
  maxWidth: '800px',
});

export const Header = styled('header', {
  marginBottom: '1em',
});

export const Form = styled('form', {
  display: 'flex',
  width: '100%',
});

export const Input = styled('input', {
  flexGrow: 1,
  padding: '0.75rem 1rem',
  border: '1px solid $gray200',
  borderTopLeftRadius: '4px',
  borderBottomLeftRadius: '4px',

  fontSize: '1rem',

  appearance: 'none',
});

export const SearchButton = styled('button', {
  marginLeft: '-1px',
  paddingLeft: '0.75rem',
  paddingRight: '0.75rem',
});