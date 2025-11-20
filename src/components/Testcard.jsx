import photo from '../assets/restauranfood.jpg'
import '../App.css'
function Testcard(){

  return(

<section className='testcard'>
  <p>Rating</p>
  <div><img src={photo}/><p>name</p></div>
  <p>preview</p>
</section>


  )


}
export default Testcard;