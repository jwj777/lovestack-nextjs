import { extendTheme } from "@chakra-ui/react";


const theme = extendTheme({
  components: {
    Link: {
      baseStyle: {
        '&:hover': { textDecoration: 'none' },
      },
    },
    Button: {
      // 1. We can update the base styles
      baseStyle: {
        fontWeight: '600',
      },
      variants: {
        sm: {
          bg: 'gray.50',
          color: 'black',
          _hover: {
            bg: 'gray.200',
          },
        },
      },
      // 6. We can overwrite defaultProps
      defaultProps: {
        size: 'lg', // default is md
        variant: 'sm', // default is solid
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
      50: '#e9eaea',
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
      50: '#aaaaaa',  
      100: '#aaaaaa',
      200: '#92dfee', 
      300: '#6dd4e9',
      400: '#49c9e3',
      500: '#00b4d8',
      600: '#0096b4',
      700: '#007890',
      800: '#005a6c',
      900: '#003c48',
    },
    mdblue: {
      50: '#dff6ff',  
      100: '#b9e0f8',
      200: '#90caed', 
      300: '#67b5e4',
      400: '#3ea0db',
      500: '#2486c1',
      600: '#176997',
      700: '#0a4b6d',
      800: '#002e44',
      900: '#00111c',
    },
  }
});

export default theme;
