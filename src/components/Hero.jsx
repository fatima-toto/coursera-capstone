
import photo from '../assets/restauranfood.jpg'
import '../App.css'
function Hero(){

  return(
<div className='mainhero'>
<div className='hero'>
  <section>
<h2>Little Lemon</h2>
<h4>chicago</h4>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum architecto beatae, doloribus autem laborum inventore, et consectetur mollitia ipsum a excepturi odit quibusdam veniam? Consectetur deleniti libero velit impedit quis.</p>
<button>Book a table</button>
  </section>
  <section className='imgsec'><img src={photo}/></section>
    
</div>
</div>
  );

}

export default Hero;