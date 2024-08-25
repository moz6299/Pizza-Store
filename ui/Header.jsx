import React from 'react'
import { Link } from 'react-router-dom'
import SearchOrder from '../features/order/SearchOrder'
import UserName from '../features/user/UserName'

const Header = () => {
  return (
    <header className='bg-yellow-500 border-b border-stone-200 px-4 py-3 flex flex-col md:flex-row items-center justify-between gap-4'>
      <Link to="/" className='text-xl tracking-widest font-semibold uppercase md:text-2xl lg:text-3xl'>
        Fast Pizza
      </Link>
      <SearchOrder />
      <UserName />
    </header>
  )
}

export default Header
