import logo from '../assets/Logo.svg'
import '../App.css'
function Header()
{
  return(
    <>
    <header className='header'>
<nav>
  <ul>
    <li><a><img src={logo}/></a></li>
    <li><a href="#">Home</a></li>
    <li><a href="#">About</a></li>
    <li><a href="#">Menu</a></li>
    <li><a href="#">Reservation</a></li>
    <li><a href="#">Ordrer online</a></li>
    <li><a href="#">Login</a></li>
  </ul>
</nav>
    </header>
    </>
  )
}
export default Header;