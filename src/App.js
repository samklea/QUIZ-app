import { Route,Routes } from 'react-router-dom';
import Home from './Component/Home';
import About from './Component/About';
import Book from './Component/Book';
import Q2 from './Component/Q2';
import Q3 from './Component/Q3';
import Q4 from './Component/Q4';
import Q5 from './Component/Q5';
import Q6 from './Component/Q6';
import Q7 from './Component/Q7';
import Q8 from './Component/Q8';
import Q9 from './Component/Q9';
import Q10 from './Component/Q10';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/'element={<Home/>}></Route>
        <Route path='/Book'element={<Book/>}></Route>
        <Route path='/About'element={<About/>}></Route>
        <Route path='/Q2'element={<Q2/>}></Route>
        <Route path='/Q3'element={<Q3/>}></Route>
        <Route path='/Q4'element={<Q4/>}></Route>
        <Route path='/Q5'element={<Q5/>}></Route>
        <Route path='/Q6'element={<Q6/>}></Route>
        <Route path='/Q7'element={<Q7/>}></Route>
        <Route path='/Q8'element={<Q8/>}></Route>
        <Route path='/Q9'element={<Q9/>}></Route>
        <Route path='/Q10'element={<Q10/>}></Route>
      </Routes>
    </div>
  )
    
 
}

export default App;
