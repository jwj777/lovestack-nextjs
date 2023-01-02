// import React from 'react'
// import { Box, Text, Icon } from '@chakra-ui/react'
// import { FaRegCheckCircle } from 'react-icons/fa'

// const PlanRow = ({ plan, hasPlan, index }) => {
//   return (
//     <Box 
//       key={index}
//       display='flex' 
//       justifyContent='space-between'
//       borderTop='1px' 
//       borderColor='gray.200'
//       pt='4' 
//       pr='4'
//       pb='4'
//       pl='4'
//       maxW='600px'
//       _last={{ borderBottom: '1px', borderColor: 'gray.200' }}
//     >
//       <Box pr='8'>
//         <Text fontSize='lg' fontWeight='600'>{plan.planName}</Text>
//         <Text maxW='240px' fontSize='sm'>{plan.planDescription}</Text>
//       </Box>

//       <Box>
//         <Text fontSize='2xl' fontWeight='600' align='right'>{'$' + plan.planPrice}</Text>
//         <Box display='flex' alignItems='center' justifyContent='flex-end'>
//           <Icon as={FaRegCheckCircle} w='3' h='4' mr='1' color='blue.500'></Icon>
//           <Text fontSize='sm'>Free Trial</Text> 
//         </Box>
//       </Box>
//     </Box>
//   )
// }

// export default PlanRow;