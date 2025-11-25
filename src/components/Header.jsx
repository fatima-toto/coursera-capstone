import logo from '../assets/Logo.svg'
 
import {Routes,Route,Link} from 'react-router-dom'
import '../App.css'
function Header()
{
  return(
    <>
    <header className='header'>
      
<nav>
   <img src={logo}/>
  <Link to='/' className='li'>Home</Link>
  <Link to='/about-page' className='li'>About</Link>
  <Link to='/menu-page' className='li'>Menu</Link>
  <Link to='/reserve-page' className='li'>Reservation</Link>
  <Link to='/order-page' className='li'>Ordrer online</Link>
  <Link to='/login-page' className='li'>Login</Link>
</nav>
    </header>
    </>
  )
}
export default Header;