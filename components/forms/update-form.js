import { Link, Flex, Box } from '@chakra-ui/react'
import styles from './Navbar.module.css'

function UpdateForm() {
  return (

    <form action="/api/form" method="post">
      <label for="first">First name:</label>
      <input type="text" id="first" name="first" />
      <label for="last">Last name:</label>
      <input type="text" id="last" name="last" />
      <button type="submit">Submit</button>
    </form>

  )
}

export default UpdateForm;