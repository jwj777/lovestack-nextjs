import { Icon, Link } from '@chakra-ui/react'
import { RiMenu2Line } from 'react-icons/ri'

function MobileIconClose() {
  return (
    <Link className='noSelect' href="#">
      <Icon
        className='noSelect'
        display={{base: 'flex', md: 'none'}} 
        as={RiMenu2Line} 
        color='white'
        fill='white'
        w='8' h='8' mr='7'
      >
      </Icon>
    </Link>
  )
}
export default MobileIconClose;
