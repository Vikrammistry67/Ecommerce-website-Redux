import { NavLink } from 'react-router-dom';
const Navbar = () => {
    return (
        <div className='navbar'>
            <NavLink className={(e) => e.isActive ? 'text-red-500' : ''} to='/'>home</NavLink>
            <NavLink className={(e) => e.isActive ? 'text-red-500' : ''} to='/about'>About</NavLink>
            <NavLink className={(e) => e.isActive ? 'text-red-500' : ''} to='/contact'>contact</NavLink>
            <NavLink className={(e) => e.isActive ? 'text-red-500' : ''} to='/auth/register'>register</NavLink>
            <NavLink className={(e) => e.isActive ? 'text-red-500' : ''} to='/auth/login'>login</NavLink>
            <NavLink className={(e) => e.isActive ? 'text-red-500' : ''} to='/product/create'>createproduct</NavLink>
            <NavLink className={(e) => e.isActive ? 'text-red-500' : ''} to='/product/update'>updateproduct</NavLink>
            <NavLink className={(e) => e.isActive ? 'text-red-500' : ''} to='/order/myorder'>order</NavLink>
            <NavLink className={(e) => e.isActive ? 'text-red-500' : ''} to='/cart/mycart'>cart</NavLink>
        </div>
    )
}

export default Navbar