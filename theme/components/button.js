import { extendTheme } from "@chakra-ui/react";

const Button = extendTheme({

  components: {
    Button: {
      // 1. We can update the base styles
      baseStyle: {
        fontWeight: '500',
      },
      variants: {
        gray50: {
          bg: 'gray.50',
          color: 'black',
          _hover: {
            bg: 'gray.200',
          },
        },
        blue50: {
          bg: 'blue.50',
          color: 'black',
          _hover: {
            bg: 'blue.200',
          },
        },
        blue500: {
          bg: 'blue.500',
          color: 'white',
          borderRadius: '10rem',
          _hover: {
            bg: 'blue.700',
          },
        },
        blueOutline: {
          bg: 'none',
          border: '2px',
          borderColor: 'blue.500',
          color: 'white',
          borderRadius: '10rem',
          _hover: {
            bg: 'blue.500',
          },
        },
        blueOutlineBc: {
          bg: 'none',
          border: '2px',
          borderColor: 'blue.500',
          color: 'blue',
          borderRadius: '10rem',
          _hover: {
            bg: 'blue.500',
          },
        },
      },
      // 6. We can overwrite defaultProps
      // defaultProps: {
      //   size: 'lg', // default is md
      //   variant: 'sm', // default is solid
      //   borderRadius: '10rem'
      // },
    },
  },

});

export default Button;