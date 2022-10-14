import './App.css';
import Navbar from './navbar';
import Home from './home';
import Fav from './favourite';
import Footer from './footer';
import Kids from './kids'
import Add_favs from './appfavs';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
// import State from './state';

function App() {
    let title = "Favourite Movies And TV Shows"
  
  return (
    <div className="App">
      <BrowserRouter>
         <Navbar />
         <Routes >
                <Route path='/home' element={<Home/>}/>
                <Route path='/favourite' element={<Fav data={title} />}/>
                <Route path='/appfavs' element={<Add_favs/>}/>
                <Route path='/kids' element={<Kids/>}/>
         </Routes>
         <Footer/>


      </BrowserRouter>
    </div>
  );
  }
      
export default App;