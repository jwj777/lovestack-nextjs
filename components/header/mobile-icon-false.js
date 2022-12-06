import { Icon, Link } from '@chakra-ui/react'
import { RiMenu2Line } from 'react-icons/ri'

function MobileIconFalse({ toggleMobileFalse }) {
  return (
    <Link href="#">
      <Icon 
        onClick={() => toggleMobileFalse()} 
        display={{base: 'flex', md: 'none'}} 
        as={RiMenu2Line} w={8} h={8} mr={8}>
      </Icon>
    </Link>
  )
}
export default MobileIconFalse;