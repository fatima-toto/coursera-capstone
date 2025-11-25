
import photo from '../assets/restauranfood.jpg'
import { useNavigate } from 'react-router-dom';
import '../App.css'
function Hero(){
const navigate=useNavigate();
const handelclick=()=>{
  navigate('/reserve-page')
}
  return(
<div className='mainhero'>
<div className='hero'>
  <section>
<h2>Little Lemon</h2>
<h4>chicago</h4>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum architecto beatae, doloribus autem laborum inventore, et consectetur mollitia ipsum a excepturi odit quibusdam veniam? Consectetur deleniti libero velit impedit quis.</p>
<button onClick={handelclick}>Book a table</button>
  </section>
  <section className='imgsec'><img src={photo}/></section>
    
</div>
</div>
  );

}

export default Hero;