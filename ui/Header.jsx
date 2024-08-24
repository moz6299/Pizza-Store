import React from 'react'
import { Link } from 'react-router-dom'
import SearchOrder from '../features/order/SearchOrder'
import UserName from '../features/user/UserName'

const Header = () => {
  return (
    <header className='bg-yellow-500 border-b border-stone-200 px-4 py-3 flex items-center justify-between'>
      <Link to="/" className='text-xl tracking-widest font-semibold uppercase'  >Fast Piza Co.</Link>
      <SearchOrder />
      <UserName />
    </header>
  )
}

export default Header
