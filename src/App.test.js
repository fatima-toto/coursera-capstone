import {render,screen} from '@testing-library/react'
import App from './App'

test('text description',()=>{
render(<App/>);
const element=screen.getByText('Book a table');
expect(element).toBeInTheDocument();

});