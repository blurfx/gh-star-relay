import { createStitches } from '@stitches/react';

export const { styled } = createStitches({
  theme: {
    colors: {
      gray100: '#ddd',
      gray200: '#777',
    }
  },
  utils: {
    bgColor: (value: string) => ({
      backgroundColor: value,
    }),
  }

});