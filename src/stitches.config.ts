import { createStitches } from '@stitches/react';

export const { styled } = createStitches({
  theme: {
    colors: {
      semiWhite: '#fafafa',
      gray100: '#ddd',
      gray200: '#777',
      gray300: '#555f5f',
      blue: '#438eff',
    }
  },
  utils: {
    bgColor: (value: string) => ({
      backgroundColor: value,
    }),
  }

});