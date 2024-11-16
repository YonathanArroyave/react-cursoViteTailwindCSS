import { useContext } from "react"
import { NavLink } from "react-router-dom"
import { ShoppingBagIcon } from '@heroicons/react/24/solid'
import { ShoppingCartContext } from "../Context"

const Navbar = () => {
    const context = useContext(ShoppingCartContext)
    const activeStyle = 'underline underline-offset-4'

    return (
        <nav className='flex justify-between items-center fixed z-10 top-0 w-full py-5 px-8 text-sm font-light'>
            <ul className='flex items-center gap-3'>
                <li className='font-semibold text-lg'>
                    <NavLink
                        to='/'
                    >
                        Shopi
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/all'
                        className={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        }>
                        All
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/clothes'
                        className={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        }>
                        Clothes
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/electonic'
                        className={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        }>
                        Electonic
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/furnitures'
                        className={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        }>
                        Furnitures
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/toys'
                        className={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        }>
                        Toys
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/otrers'
                        className={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        }>
                        Otrers
                    </NavLink>
                </li>
            </ul>
            <ul className="flex items-center gap-3">
                <li className="text-black/60">
                    CorreoQuemado@gmail.com
                </li>
                <li>
                    <NavLink to='/my-orders'
                        className={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        }>
                        My Orders
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/my-count'
                        className={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        }>
                        My Account
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/sign-in'
                        className={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        }>
                        sign in
                    </NavLink>
                </li>
                <li className='flex items-center'>
                    <ShoppingBagIcon className='h-6 w-6 text-black'></ShoppingBagIcon>
                    <div>{context.count}</div>
                </li>


            </ul>
        </nav>
    )
}
export default Navbar