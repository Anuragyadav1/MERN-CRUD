import NavBar from './components/NavBar';
import Home from './components/Home';
import AllUsers from './components/AllUsers';
import AddUser from './components/AddUser';
import { Routes,Route } from 'react-router-dom';
import EditUser from './components/EditUser';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
       <NavBar/>
       <Routes>
       <Route path='/add-user' element={<AddUser/>}/>
       <Route path='/all-users' element={<AllUsers/>}/>
       <Route path='/' element={<Home/>}/>
       <Route path='/edit-user/:id' element={<EditUser/>}/>
       </Routes>
       <Footer/>
    </div>
  );
}

export default App;
