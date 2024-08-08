import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Dashboard from "./components/page/Dashboard";
import Taskbar from './components/layout/Taskbar';
import DeliveryList from './components/page/DeliveryList';
import OnFleetDrivers from './components/page/OnFleetDrivers';
import 'bootstrap/dist/css/bootstrap.css';
import Registration from './components/auth/Registration';
import Login from './components/auth/Login';
import CreateLog from './components/log/CreateLog';
import CreateProduct from './components/product/CreateProduct';

function App() {

  return (
    <div className="App bg-[#E6F9FD]">
        <main className='flex'>
          <Router>
            <Taskbar />
            <Routes>
              <Route path='/' element={<Dashboard />}></Route>
              <Route path='/delivery-logs' element={<DeliveryList />}></Route>
              <Route path='/on-fleet-drivers' element={<OnFleetDrivers />}></Route>
              <Route path='/register-customer' element={<Registration role={"ROLE_CUSTOMER"} />}></Route>
              <Route path='/register-driver' element={<Registration role={"ROLE_DRIVER"} />}></Route>
              <Route path='/login' element={<Login />}></Route>
              <Route path='/create-log' element={<CreateLog />}></Route>
              <Route path='/create-product' element={<CreateProduct />}></Route>
            </Routes>
          </Router>
        </main>

    </div>
  );
}

export default App;