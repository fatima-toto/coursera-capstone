import ph from '../assets/lemon dessert.jpg'
import '../App.css'
function Card(){
  return(
<div className='card'>
  <section className='sec1'>
    <img src={ph}/>
  </section>
  <section className='sec2'>
    <div className='div1' ><p>Greek Salad</p><p>$12.99</p></div>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur, delectus modi! Sed, odit nemo odio tempor.</p>
    <p className='p2'>Order a delivery</p>
  </section>
</div>
  );
}

export default Card;