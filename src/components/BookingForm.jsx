import '../App.css'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {useFormik} from 'formik'
import * as yup from 'yup'


var timeitems=['17:00','18:00','19:00','20:00','21:00','22:00'];

function BookingForm({state,dispatch})
{ const [date,setdate]=useState('');
  const[time,settime]=useState('17:00');
  const [number,setnumber]=useState('1');
  const [ocassion,setocassion]=useState('');
  const navigate=useNavigate();
  const formik=useFormik({
initialValues:{
date:'',
time:'17:00',
number:'1',
ocassion:'Birthday'

},
onSubmit:(values)=>{
setnumber('1');
 settime('17:00');
 setocassion('Birthday');
  
setdate('');
navigate('/confirm-page');
console.log('submited');
},
validationSchema:yup.object({
date:yup.string().required('Requird')

})


  });


   
return(
<>
<form onSubmit={formik.handleSubmit}>
  <label htmlFor='id-date'>Date</label>
  <input type='date' id='id-date' onChange={(e)=>{setdate(e.target.value);
   
  dispatch({type:'clicked'});
  }
  } value={date}  {...formik.getFieldProps('date')}/>
  <p className='errmsg'>{formik.touched.date && formik.errors.date}</p>
  <label htmlFor='id-time'>Time</label>
  <select id='id-time' onChange={(e)=>settime(e.target.value)} value={time} >
    {
 state.map(i =>{
      return(
<option>{i}</option>
      )
       
    })
    }
  </select>
  <label htmlFor='number'>number of guests</label>
  <input type='number' placeholder='1' id='number' min='1' max='10'  onChange={(e)=>setnumber(e.target.value)} value={number}/>
  <label htmlFor='ocassion'>Ocassion</label>
  <select id='ocassion' onChange={(e)=>setocassion(e.target.value)} value={ocassion}>
    <option>Birthday</option>
    <option>Anniversary</option>
  </select>
  <input id='submit' type='submit' value='make your reservation' disabled={!formik.isValid} aria-label="On Click"/>
</form>
</>

);



}
export default BookingForm;