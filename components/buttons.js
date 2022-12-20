import { defineStyle, defineStyleConfig } from '@chakra-ui/react'

const buttonFilter = defineStyle({
  background: 'skyblue.200',
  color: 'black',

  // let's also provide dark mode alternatives
  _dark: {
    background: 'skyblue.500',
    color: 'white',
  }
})

export const buttonTheme = defineStyleConfig({
  variants: { buttonFilter },
})