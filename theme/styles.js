import { extendTheme } from "@chakra-ui/react";

const styles = extendTheme({
  components: {
    Link: {
      baseStyle: {
        '&:hover': { textDecoration: 'none' },
      },
    },
  },
  fonts: {
    heading: 'Figtree',
    body: 'Figtree'
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
  sizes: {
    container: {
      lg: '1160px'
    },
  },
  colors: {
    gray: {
      10: '#f6f6f6',
      50: '#f2f2f2',
      100: '#d3d5d5',
      200: '#bdc0c0',
      300: '#a6abac',
      400: '#909697',
      500: '#7a8182',
      600: '#646c6d',
      700: '#535a5b',
      800: '#323637',
      900: '#212424',
    },
    turq: {
      50: '#dcfffa',  
      100: '#b4f8ee',
      200: '#8af2e3',
      300: '#5fedd8',
      400: '#37e8cd',
      500: '#20ceb4',
      600: '#12a08c',
      700: '#057364',
      800: '#00463c',
      900: '#001914', 
    },
    blue: {
      50: '#e3eefa',  
      100: '#b6d9ff',
      200: '#92c6ff', 
      300: '#49a1ff',
      400: '#248eff',
      500: '#007bff',
      600: '#0066d4',
      700: '#0052aa',
      800: '#003e80',
      900: '#001f40',
    },
    purple: {
      50: '#f3e4f4',  
      100: '#e4c2e6',
      200: '#dbaddd', 
      300: '#d299d5',
      400: '#c070c4',
      500: '#ae47b3',
      600: '#983e9c',
      700: '#823686',
      800: '#6c2d70',
      900: '#572459',
    },
  }
});

export default styles;
