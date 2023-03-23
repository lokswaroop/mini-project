import React from 'react'

const CartContext = React.createContext({
  username: '',
  password: '',
  closeNavbar: false,
  triggerCloseNavBar: () => {},
  triggerChangeUsername: () => {},
  triggerChangePassword: () => {},
  searchInput: '',
  triggerSearchChange: () => {},
})
export default CartContext
