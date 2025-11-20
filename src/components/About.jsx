
import photo from '../assets/restauranfood.jpg'
function About(){
return(
  <div className='mainabout'>
<section className='about'>
<div className='div1'>
  <h1>Little Lemon</h1>
  <h3>chicagi</h3>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit perferendis molestiae possimus! Voluptatum sunt repellat fugiat accusantium at, earum aut distinctio iure nostrum unde rem labore excepturi ducimus iste esse.</p>
</div>
<div className='div2'>
  <img src={photo} className='img1'/>
  <img src={photo} className='img2'/>
</div>

</section>
  </div>
 

)
}
export default About;