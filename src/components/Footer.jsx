import logo from '../assets/creditcard.svg'

function Footer()
{
  return(<>
  <footer className="footer">
<div className='ftdiv1' ><img src={logo}/></div>
<div>
  <ul>
    <li>Doormat navigation</li>
    <li><a href="#">Home</a></li>
    <li><a href="#">About</a></li>
    <li><a href="#">Menu</a></li>
    <li><a href="#">Reservation</a></li>
    <li><a href="#">Ordrer online</a></li>
    <li><a href="#">Login</a></li>
  </ul>
</div>
<div>
  <ul>
    <li>Contact</li>
    <li><a href='#'>Adress</a></li>
    <li><a href='#'>phone number</a></li>
    <li><a href='#'>Email</a></li>
  </ul>
</div>
<div>
  <ul>
    <li>Social media links</li>
    <li>Adress</li>
    <li>Phone number</li>
    <li>Email</li>

  </ul>
</div>
    </footer>
  </>
  )
}
export default Footer;