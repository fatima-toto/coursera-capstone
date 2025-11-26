import {render,screen,fireEvent} from '@testing-library/react'
import App from './App'
import BookingForm from './components/BookingForm';
test('text description',()=>{
render(<App/>);
const element=screen.getByText('Book a table');
expect(element).toBeInTheDocument();

});

test('test the form',()=>{
  const handleSubmit=jest.fn();
render(<BookingForm onSubmit-={handleSubmit}/>);
const button=screen.getByText('make your reservation');
fireEvent.click(button);
expect(button).not.toHaveBeenCalled();

});