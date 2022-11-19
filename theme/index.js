import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  fonts: {
    heading: 'Asap',
    body: 'Asap'
  },
  textStyles: {
    h1: {
      fontSize: ['48px', '72px'],
      fontWeight: 'bold',
      lineHeight: '110%',
      letterSpacing: '-2%',
    },
    h2: {
      fontSize: ['32px', '48px'],
      fontWeight: '600',
      lineHeight: '110%',
      letterSpacing: '-1%',
    },
  },
});

export default theme;
